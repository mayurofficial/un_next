import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../../styles/components/homeheader.module.css";
import HomeSubHeader from "./HomeSubHeader";
import {navigationLinks} from '../navigationLinks.js'

function HomeNavbar() {
  return (
    <div>
      <HomeSubHeader />
      <div className={style.home_main_header}>
        <div className={style.home_logo_wrapper}>
          <div className={style.home_header_logo}>
            <Link href="/" passHref>
              <a>
                <Image
                  src="/assets/images/header/DetailedLogo.svg"
                  width="260"
                  height="120"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={style.home_header_content}>
          <nav className={style.home_navigation_container}>
            <ul>
            {navigationLinks.map((data, index) => (
              <li
                key={index}
              >
                <Link href={data.link}>
                  <a
                    className={index===0 ? style.home_section : undefined}
                  >
                    {data.category}
                  </a>
                </Link>
              </li>
            ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
