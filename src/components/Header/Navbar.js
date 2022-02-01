import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../../styles/components/header.module.css";
import SubHeader from "./SubHeader";
import {navigationLinks} from '../navigationLinks.js'
function Navbar() {
  const [toggle, setToggle] = useState(0);
  
  return (
    <div className={style.main_header}>
      <div className={style.header_logo}>
        <Link href="/" passHref={true}>
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
      <div className={style.header_search_content}>
        <SubHeader />
        <nav className={style.navigation_container}>
          <ul>
            {navigationLinks.map((data, index) => (
              <li
                className={toggle.count === index ? style.activeLink : undefined}
                key={index}
              >
                <Link href={data.link}>
                  <a
                    onClick={() => {
                      setToggle(index);
                    }}
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
  );
}

export default React.memo(Navbar);
