import { InputHTMLAttributes } from "react";

export interface IFieldProps {
  placeholder: string;
  className?: string;
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> &
  IFieldProps;
