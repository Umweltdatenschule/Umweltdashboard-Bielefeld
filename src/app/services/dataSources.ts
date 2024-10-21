// dataSources.ts
import csvParser from "csv-parser";
import fs from "fs";
import path from "path";
import parseDate from "@/libs/parseDate";
import isDateInRange from "@/libs/isDateinRange";

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

export const fetchLocalData = (
  city: string,
  parameter: string,
  start: Date,
  end: Date
) => {
  return new Promise<Record<string, string>[]>((resolve, reject) => {
    const results: Record<string, string>[] = [];
    const csvColumn = parameterMapping[parameter];

    if (!csvColumn) {
      return reject(new Error("Invalid parameter"));
    }

    const filePath = path.resolve(
      process.cwd(),
      `src/data/${city}/airquality.csv`
    );
    let current: Date | undefined = undefined;

    fs.createReadStream(filePath)
      .pipe(csvParser({ separator: ";", quote: '"', escape: "\\" }))
      .on("data", data => {
        if (data && data.Datum) {
          const date = parseDate(data.Datum);
          if (isDateInRange(date, start, end, current)) {
            results.push({
              date: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`,
              value: data[csvColumn],
            });
            current = date;
          }
        }
      })
      .on("end", () => resolve(results))
      .on("error", error => reject(error));
  });
};
