import React, { FC } from "react";
import Section from "../../ui/Section/Section";
import Link from "next/link";
import Image from "next/image";
import styles from "./City.module.css";
import cityDefault from "../../app/public/city.png";
export interface ICity {
  name: string;
  image?: string;
}

const City: FC<ICity> = ({ name, image }) => {
  return (
    <Link href={`/city/${name}`}>
      <Section>
        <div className={styles.City}>
          <div className={styles.name}>{name}</div>
          <Image
            src={image ? image : cityDefault}
            alt='city'
            className={styles.image}
          />
        </div>
      </Section>
    </Link>
  );
};

export default City;
