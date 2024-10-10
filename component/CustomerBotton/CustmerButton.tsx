"use client";
import React from "react";
import { CustmerButtonProps } from "@/Text";
("../../Text/index");

const CustmerButton = ({
  title,
  containerStyle, btnType,
  handleClick,
}: CustmerButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      disabled={false}
      onClick={handleClick}
      
    >
      <span className={"flex-1"}>{title}</span>
    </button>
  );
};

export default CustmerButton;
