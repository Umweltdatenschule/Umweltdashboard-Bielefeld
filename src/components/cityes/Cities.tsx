import React, { FC } from "react";
import City, { ICity } from "../city/City";
import Section from "../../ui/Section/Section";
import styles from "./Cities.module.css";

interface props {
  city: ICity[];
}

const Cities: FC<props> = ({ city }) => {
  return (
    <Section>
      <div className={styles.cities}>
        {city.map(city => (
          <div className={styles.city} key={city.name}>
            <City name={city.name} key={city.name} image={city.image} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Cities;
