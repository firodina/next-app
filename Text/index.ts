import { MouseEventHandler } from "react";

export interface CustmerButtonProps {
  title: string;
  containerStyle?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
