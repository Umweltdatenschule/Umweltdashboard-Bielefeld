import Section from "@/components/Section/Section";
import { useFetch } from "@/hooks/useFetch/useFetch";
import React, { FC, useEffect, useMemo, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import styles from "./chart.module.css";

type parameter = "pm10" | "o3" | "no2" | "pm25" | "index";

type GraphType = "line" | "bar";

interface date {
  start: string;
  end?: string;
}

interface props {
  parameter: parameter;
  type: GraphType;
  date: date;
}

interface response {
  date: string;
  value: number;
}

const Chart: FC<props> = ({ type, parameter, date }) => {
  const [data, setData] = useState<response[]>();
  const memoizedUrl = useMemo(
    () =>
      `/api/airquality?parameter=${parameter}&start=${date.start}&end=${date.end}`,
    [parameter, date.start, date.end]
  );
  const {
    data: response,
    isPending,
    error,
  } = useFetch<response[]>(memoizedUrl);
  useEffect(() => {
    if (response) {
      setData(response);
    }
  }, [response, isPending]);

  const chartData = {
    labels: data?.map(res => res.date),
    datasets: [
      {
        label: parameter.toString(),
        data: data?.map(res => res.value),
        backgroundColor: type === "bar" ? "#064FF0" : "transparent",
        borderColor: type === "line" ? "#064FF0" : undefined,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Section className={styles.chart}>
      <div
        style={{
          minHeight: "200px",
          minWidth: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isPending && <div>Loading...</div>}
        {!data || error ? (
          <div>there is no data</div>
        ) : type === "bar" ? (
          <Bar data={chartData} style={{ width: "500px", height: "500px" }} />
        ) : (
          <Line data={chartData} style={{ width: "500px", height: "500px" }} />
        )}
      </div>
    </Section>
  );
};

export default Chart;
