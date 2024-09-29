"use client";

import Section from "@/components/Section/Section";
import { useFetch } from "@/hooks/useFetch/useFetch";
import React, { FC, useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface GreenValue {
  date: string;
  value: string;
}

interface props {
  start: string;
  end: string;
}

const Chart: FC<props> = date => {
  const [data, setData] = useState<GreenValue[]>();
  const {
    data: response,
    error,
    isPending,
  } = useFetch<GreenValue[]>(`/api/green?start=${date.start}&end=${date.end}`);

  useEffect(() => {
    if (response) {
      console.log(response);
      setData(response);
    }
  }, [response]);

  const chartData = {
    labels: data?.map(res => res.date),
    datasets: [
      {
        label: "green Value",
        data: data?.map(res => res.value),
        backgroundColor: "#064FF0",
        borderColor: "#064FF0",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Section style={{ width: "100%" }}>
      <div
        style={{
          minHeight: "200px",
          minWidth: "300px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isPending && <div>Loading...</div>}
        {!data || error || data.length == 0 ? (
          <div>there is no data</div>
        ) : (
          <Line
            data={chartData}
            style={{ width: "100%", height: "500px" }}
            options={{ maintainAspectRatio: false }}
            key={`${date.start}-${date.end}`}
          />
        )}
      </div>
    </Section>
  );
};

export default Chart;
