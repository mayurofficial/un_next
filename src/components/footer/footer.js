import React from 'react';
import styles from "../../styles/components/footer.module.scss";
import Link from 'next/link';
import { navigationLinks } from '../navigationLinks'
function Footer() {
  return (
    <>
      <div className={styles.container}>
        <ul>
          {
            navigationLinks.map((item, index) => {
              return (
                <li key={index}><Link href={item.link}>{item.category}</Link></li>
              )
            })
          }
        </ul>

        {/* <div className={styles.copyright}> */}
        <p>Copyright 2021 International Atomic Energy Agency (IAEA), All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
