import React, { useState } from "react";
import Link from "react-scroll/modules/components/Link";
import styles from "../../styles/glossary_scss/alphabet.module.scss";
export default function Alphabet(props) {
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Link
        to={props.alphabet}
        smooth={true}
        duration={1500}
        offset={-40}
        onClick={toggleFunction}
      >
        <div className={toggle === true ? styles.active : styles.inActive}>
          <div className={styles.button_text}>{props.alphabet}</div>
        </div>
      </Link>
    </>
  );
}
