import { MouseEventHandler } from "react";

export interface CustmerButtonProps {
  title: string;
  containerStyle?: string;
  textStyles?: string;
  options?: string;
  rightIcon?: string;
  isDisable?: boolean;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearcManufacturerprops {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface Carprops {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}
export interface HomeProps {
  searchParams: FilterProps;
}
