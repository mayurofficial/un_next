import React from "react";
import styles from "../../styles/glossary_scss/DetailsAlpha.module.scss";

export default function DetailsAlpha(props) {
  return (
    <div id={props.alpha} className={styles.glossary_alphabet_details}>
      <div className={styles.details_alphabet}>
        <div className={styles.text_alpha}>{props.alpha}</div>
      </div>

      <div className={styles.all_details}>
        {props.alphaDetails.map((item, index) => {
          return (
            <div key={index}>
              <div className={styles.single_details} >
                <div className={styles.title_alpha}>{item.title}</div>
                <div className={styles.details_alpha}>{item.title_data}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
