import Section from "@/ui/Section/Section";
import React from "react";
import Chart from "../GreenValuesChart/Chart";
import styles from "./styles.module.css";
import "chart.js/auto";
const GreenvalueSection = () => {
  return (
    <div className={styles.container}>
      <Section>
        <h3>green values</h3>
        <Chart start='2019-03-01' end='2024-09-01' key={1} />
      </Section>
    </div>
  );
};

export default GreenvalueSection;
