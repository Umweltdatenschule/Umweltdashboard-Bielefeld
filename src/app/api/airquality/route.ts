import { fetchLocalData } from "@/app/services/dataSources";
import { NextRequest } from "next/server";

export const getAirQualityData = async (
  city: string,
  parameter: string,
  start: string,
  end: string
) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  try {
    return await fetchLocalData(city, parameter, startDate, endDate);
  } catch (error) {}
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const city = searchParams.get("city");
  const parameter = searchParams.get("parameter");
  const startDate = searchParams.get("start");
  const endDate = searchParams.get("end");

  if (!city || !parameter || !startDate || !endDate) {
    return Response.json(
      { error: "Missing required parameters: city, parameter, start, or end" },
      { status: 400 }
    );
  }

  try {
    const res = await getAirQualityData(city, parameter!, startDate!, endDate!);
    return Response.json(res);
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to fetch air quality data" },
      { status: 500 }
    );
  }
}
