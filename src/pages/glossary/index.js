import React from "react";
import Alphabet from "./Alphabet";
import styles from "../../styles/glossary_scss/glossary.module.scss";
import data from "./glossary.json";
import DetailsAlpha from "./DetailsAlpha";

export default function Glossary() {
  let i = 65;
  let j = 91;
  const alphaArr = [];

  for (let k = i; k < j; k++) {
    alphaArr.push(String.fromCharCode(k));
  }
  return (
    <>
      <div className={styles.glossary_page}>
        <div className={styles.left_side_buttons}>
          {alphaArr.map((item, index) => {
            return (
              <Alphabet
                key={index}
                alphabet={item}
              />
            );
          })}
        </div>
        <div className={styles.right_side_details}>
          <div className={styles.title_text}>Glossary</div>
          <div className={styles.glossary_details}>
            {data.map((item, index) => {
              return (
                  <DetailsAlpha
                    key={index}
                    alpha={item.alphabet}
                    alphaDetails={item.alphabet_data}
                  />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
