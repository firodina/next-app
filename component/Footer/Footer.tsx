import Image from "next/image";
import Link from "next/link";
import style from "./footer.module.css";
import { footerLinks } from "../../Constant";
import "../../app/globals.css";

const Footer = () => (
  <footer className={style.footerContainer}>
    <div className={style.footerContent}>
      <div className={style.columnContainer}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className={style.objectContain}
        />
        <p className={style.textBase}>
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className={style.flexColumn}>
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className={style.wrapper}>
      <p>@2023 CarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
