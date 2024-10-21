"use client";
import React, { useState } from "react";
import "chart.js/auto";
import styles from "./airquality.module.css";
import Section from "@/ui/Section/Section";
import Chart from "../AirQualityChart/Chart";
import Field from "@/ui/Field/Field";
import getCurrentDate from "@/libs/currentDate";
import useDebounce from "@/hooks/useDebounce/useDebounce";
import { useParams } from "next/navigation";

const Airquality = () => {
  const [startDate, setStartDate] = useState<string>("2023-09-26");
  const [endDate, setEndDate] = useState<string>(getCurrentDate());
  const start = useDebounce<string>(startDate, 2000);
  const end = useDebounce<string>(endDate, 2000);
  const id = useParams();
  const city = Array.isArray(id) ? id[0] : id;
  return (
    <div className={styles.container}>
      <Section>
        <h3>Air Quality</h3>
        <div className={styles.diagramms}>
          <Chart
            parameter='no2'
            type='line'
            key={1}
            date={{ start: start, end: end }}
            city={city.id}
          />
          <Chart
            parameter='pm10'
            type='bar'
            key={2}
            date={{ start, end }}
            city={city.id}
          />
          <Chart
            parameter='pm25'
            type='line'
            key={3}
            date={{ start, end }}
            city={city.id}
          />
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
