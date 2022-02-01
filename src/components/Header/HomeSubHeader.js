import React from "react";
import Link from 'next/link'
import style from '../../styles/components/homeheader.module.css'
function HomeSubHeader() {
 
  return (
    <nav className={style.home_site_navigation}>
      <ul>
        <li>
          <Link href="https://www.iaea.org" target="_blank">IAEA.org</Link>
        </li>
        <li>
          <Link href="https://www.iaea.org/resources/nucleus-information-resources">
            NUCLEUS
          </Link>
        </li>
        <li>
           <Link id="contact_id" href="/contact">Contact Us</Link>
        </li>
        <li>
          <select>
            <option>English</option>
            <option>Arabic</option>
            <option>Chinese</option>
            <option>French</option>
            <option>Russian</option>
            <option>Spanish</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}

export default HomeSubHeader;
