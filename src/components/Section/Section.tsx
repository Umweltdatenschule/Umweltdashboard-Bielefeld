import React, { ReactNode, FC, ComponentProps } from "react";
import styles from "./section.module.css";

interface ISection extends ComponentProps<"div"> {
  children: ReactNode;
}

const Section: FC<ISection> = ({ children, ...rest }) => {
  return (
    <div {...rest} className={styles.Section}>
      {children}
    </div>
  );
};

export default Section;
