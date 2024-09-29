import React, { forwardRef } from "react";
import { TypeInputProps } from "./field.types";
import styles from "./field.module.css";
const Field = forwardRef<HTMLInputElement, TypeInputProps>(
  ({ placeholder, className, ...rest }, ref) => {
    return (
      <div>
        <input
          className={`${styles.field} ${className}`}
          ref={ref}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  }
);

Field.displayName = "Field";

export default Field;
