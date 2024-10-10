import Image from "next/image";
import React from "react";
import style from "./header.module.css";
import Link from "next/link";
import CustmerButton from "../CustomerBotton/CustmerButton";

function Header() {
  return (
    <header className="w-full absolute z-10">
      <nav className={style.navContainer}>
        <Link href={"/"} className={style.flexCenter}>
          <Image
            src="/logo.svg"
            alt="ar hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <div className="flex items-center">
          <CustmerButton
            title="Sign-In"
            containerStyle={style.btn}
            btnType="button"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
