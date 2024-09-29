"use client";
import React from "react";
import "chart.js/auto";
import styles from "./airquality.module.css";
import Section from "@/components/Section/Section";
import Chart from "../AirQualityChart/Chart";
import Field from "@/ui/Field/Field";

// interface IAirQuality {
//   date: string;
//   pm10: string;
//   o3: string;
//   no2: string;
//   pm25: string;
//   index: string;
// }

const Airquality = () => {
  return (
    <div>
      <Section style={{ width: "100%" }}>
        <h3>Air Quality</h3>
        <div className={styles.diagramms}>
          <Chart
            parameter='no2'
            type='line'
            key={1}
            date={{ start: "2023-09-25", end: "2024-09-27" }}
          />
          <Chart
            parameter='pm10'
            type='bar'
            key={2}
            date={{ start: "2023-10-10", end: "2023-11-10" }}
          />
          <Chart
            parameter='pm25'
            type='line'
            key={3}
            date={{ start: "2023-10-10", end: "2023-11-10" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Field placeholder='start date' style={{ marginRight: "20px" }} />
          <Field placeholder='end date' />
        </div>
      </Section>
    </div>
  );
};

export default Airquality;
