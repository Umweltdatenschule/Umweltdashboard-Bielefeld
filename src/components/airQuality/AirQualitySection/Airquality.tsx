"use client";
import React, { useState } from "react";
import "chart.js/auto";
import styles from "./airquality.module.css";
import Section from "@/components/Section/Section";
import Chart from "../AirQualityChart/Chart";
import Field from "@/ui/Field/Field";
import getCurrentDate from "@/libs/currentDate";
import useDebounce from "@/hooks/useDebounce/useDebounce";

const Airquality = () => {
  const [startDate, setStartDate] = useState<string>("2023-09-26");
  const [endDate, setEndDate] = useState<string>(getCurrentDate());
  const start = useDebounce<string>(startDate, 2000);
  const end = useDebounce<string>(endDate, 2000);

  return (
    <div>
      <Section style={{ width: "100%" }}>
        <h3>Air Quality</h3>
        <div className={styles.diagramms}>
          <Chart
            parameter='no2'
            type='line'
            key={1}
            date={{ start: start, end: end }}
          />
          <Chart parameter='pm10' type='bar' key={2} date={{ start, end }} />
          <Chart parameter='pm25' type='line' key={3} date={{ start, end }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Field
            placeholder='start date'
            style={{ marginRight: "20px" }}
            type='date'
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
          <Field
            placeholder='end date'
            type='date'
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </div>
      </Section>
    </div>
  );
};

export default Airquality;
