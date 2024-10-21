import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import csv from "csv-parser";
import parseDate from "@/libs/parseDate";
const getGreenValues = async (start: string, end: string) => {
  const paths = path.resolve(
    process.cwd(),
    "src/data/bielefeld/green_values.csv"
  );
  const startDate = new Date(start);
  const endDate = new Date(end);
  return new Promise<Record<string, number>[]>((resolve, reject) => {
    const results: Record<string, number>[] = [];
    fs.createReadStream(paths)
      .pipe(csv())
      .on("data", data => {
        if (data && data.Date) {
          const date = new Date(data.Date);
          if (
            date!.getTime() >= startDate.getTime() &&
            date!.getTime() <= endDate.getTime()
          ) {
            results.push({
              date: data.Date,
              value: Number(data.GreenValue),
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
  const startDate = searchParams.get("start");
  const endDate = searchParams.get("end");
  if (!startDate || !endDate) {
    return Response.json(
      { error: "Missing required parameters: start, or end" },
      { status: 400 }
    );
  }
  try {
    const res = await getGreenValues(startDate!, endDate!);
    return Response.json(res);
  } catch (error) {
    console.log(error);
    return Response.json(
      { error: "Failed to fetch air quality data" },
      { status: 500 }
    );
  }
}
