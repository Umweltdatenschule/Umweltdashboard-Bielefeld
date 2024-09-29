import csvParser from "csv-parser";
import fs from "fs";
import path from "path";
import { NextRequest } from "next/server";

interface IAirQualityData {
  Stationscode: string;
  Datum: string;
  "Feinstaub (PM₁₀) Tagesmittel (stündlich gleitend) in µg/m³": string;
  "Ozon (O₃) Ein-Stunden-Mittelwert in µg/m³": string;
  "Stickstoffdioxid (NO₂) Ein-Stunden-Mittelwert in µg/m³": string;
  "Feinstaub (PM₂,₅) Tagesmittel (stündlich gleitend) in µg/m³": string;
  Luftqualitätsindex: string;
}

const parameterMapping: Record<string, keyof IAirQualityData> = {
  pm10: "Feinstaub (PM₁₀) Tagesmittel (stündlich gleitend) in µg/m³",
  o3: "Ozon (O₃) Ein-Stunden-Mittelwert in µg/m³",
  no2: "Stickstoffdioxid (NO₂) Ein-Stunden-Mittelwert in µg/m³",
  pm25: "Feinstaub (PM₂,₅) Tagesmittel (stündlich gleitend) in µg/m³",
  index: "Luftqualitätsindex",
};

function parseDate(dateString: string) {
  const clearData = dateString.replace(/'/g, "");
  const [datePart, timePart] = clearData.split(" ");
  const [day, month, year] = datePart.split(".").map(Number);
  const [hours, minutes] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes);
}

const paths = path.resolve(process.cwd(), "src/data/airquality.csv");

export const getAirQualityData = async (
  parameter: string,
  start: string,
  end: string
) => {
  return new Promise<Record<string, string>[]>((resolve, reject) => {
    const results: Record<string, string>[] = [];

    const csvColumn = parameterMapping[parameter];
    if (!csvColumn) {
      return reject(new Error("Invalid parameter"));
    }
    const startDate = new Date(start);
    const endDate = new Date(end);
    fs.createReadStream(paths)
      .pipe(
        csvParser({
          separator: ";",
          quote: '"',
          escape: "\\",
        })
      )
      .on("data", data => {
        if (data && data.Datum) {
          const date = parseDate(data.Datum);
          if (
            date!.getTime() >= startDate.getTime() &&
            date!.getTime() <= endDate.getTime()
          ) {
            results.push({
              date: data.Datum,
              value: data[csvColumn],
            });
          }
        }
      })
      .on("end", () => {
        resolve(results);
      })
      .on("error", error => {
        reject(error);
      });
  });
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const parameter = searchParams.get("parameter");
  const startDate = searchParams.get("start");
  const endDate = searchParams.get("end");
  if (!parameter || !startDate || !endDate) {
    return Response.json(
      { error: "Missing required parameters: parameter, start, or end" },
      { status: 400 }
    );
  }
  try {
    const res = await getAirQualityData(parameter!, startDate!, endDate!);
    return Response.json(res);
  } catch (error) {
    console.log(error);
    return Response.json(
      { error: "Failed to fetch air quality data" },
      { status: 500 }
    );
  }
}
