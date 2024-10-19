import Image from "next/image";
import React from "react";
import Link from "next/link";
import CustmerButton from "../CustomerBotton/CustomerButton";

const Header = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>

      <CustmerButton
        title="Sign in"
        btnType="button"
        containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
      />
    </nav>
  </header>
);
export default Header;
