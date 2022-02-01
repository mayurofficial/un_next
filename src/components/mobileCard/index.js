import React from 'react';
import Image from 'next/image';
import styles from "../../styles/homepage.module.scss";
const MobileCard = ({heading, metaData, logo, alt}) => {
    return (
        <div className={styles.mobile_card_wrapper}>
            <div className={styles.logo}>
                <Image src={logo}  alt={heading +`.svg`} layout='fixed'/>
            </div>
            <h3>{heading}</h3>
            <p>{metaData}</p>
        </div>
    )
};

export default MobileCard;
