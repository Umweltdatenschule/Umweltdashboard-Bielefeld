import { NextRequest } from "next/server";

const getGreenValues = async (startDate: string, endDate: string) => {
  return new Promise<Record<string, string>[]>((resolve, reject) => {});
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
