import React from 'react';
import styles from '../../styles/homepage.module.scss'
import Image from 'next/image';
import image from "../../../public/assets/images/hero-section-bg.webp";
import Button from '@components/button';
const TabCard = ({ heading, para1, para2, link }) => {
    return (

        <div className={styles.tab_card_wrapper}>
            <div className={styles.card_left_container}>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "385px",
                        maxHeight: "100%",
                        maxWidth: "100%",
                    }}
                >
                    <Image src={image} alt="card-img"
                        layout='fill'
                    />
                </div>
            </div>
            <div className={styles.card_right_container}>
                <div>
                    <h3>{heading}</h3>
                    <p>{para1}</p>
                    <p>{para2}</p>
                </div>
                <a href={link}>
                    <Button name="Read More" type="secondary" />
                </a>
            </div>
        </div>
    )
};

export default TabCard;
