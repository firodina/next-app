"use client";
import React from "react";
import { CustmerButtonProps } from "@/Text";
import Image from "next/image";
("../../Text/index");

const CustmerButton = ({
  title,
  containerStyle,
  btnType,
  textStyles,
  rightIcon,
  handleClick,
}: CustmerButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      disabled={false}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="rightIcon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustmerButton;
