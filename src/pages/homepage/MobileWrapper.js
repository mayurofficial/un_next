import React from 'react';
import styles from "../../styles/homepage.module.scss";
import Image from 'next/image';
import mobileBg from '../../../public/assets/images/mobileBg.png'
import MobileCard from '@components/mobileCard';
import mobileLogo from '../../../public/assets/images/MobileFullLogo.svg'
import about from '../../../public/assets/images/mobileSubHero/about.svg'
import characterstics from '../../../public/assets/images/mobileSubHero/characterstics.png'
import deployment from '../../../public/assets/images/mobileSubHero/deployment.svg'
import glossary from '../../../public/assets/images/mobileSubHero/glossary.png'
import publication from '../../../public/assets/images/mobileSubHero/publication.png'
import technical from '../../../public/assets/images/mobileSubHero/technical.svg'
import Link from 'next/link';
const MobileWrapper = () => {
    const cardData = [
        {
            logo: technical,
            heading: 'Technical Data',
            metaData: 'DSRs with technical specifications'
        },
        {
            logo: deployment,
            heading: 'Deployment',
            metaData: 'DSRs with Economic data'
        },
        {
            logo: characterstics,
            heading: 'Characterstics',
            metaData: 'DSRs with characteristics data'
        },
        {
            logo: publication,
            heading: 'Publications',
            metaData: 'Aris related publications'
        },
        {
            logo: glossary,
            heading: 'Glossary',
            metaData: 'Aris key glossary terms'
        },
        {
            logo: about,
            heading: 'About',
            metaData: 'About ARIS and design description'
        }
    ]
    return (
        <div className={styles.mobile_wrapper}>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "304px",
                    maxHeight: "304px",
                    maxWidth: "100%",
                }}
            >
                <Image
                    src={mobileBg} alt="background" layout='fill' />
            </div>
            <div className={styles.mobile_herosection}>
                <Image src={mobileLogo} alt="mobileLogo" />
                <div className={styles.hero_card_wrapper}>
                    <h1>About ARIS</h1>
                    <p>The Advanced Reactor Information System (ARIS) is a database designed and maintained by the IAEA's Nuclear Power Technology Development Section (NPTDS) since 2009.</p>
                    <Link href='https://web.aris.qa.foxlabs.in/TechnicalData'>Read More</Link>
                </div>
            </div>
            <div className={styles.sub_hero_section}>
                <h2>Explore ARIS</h2>
                <div className={styles.mobile_card_container}>
                    {
                        cardData.map((item, index) => {
                            return (
                                <MobileCard 
                                    key={index} 
                                    heading={item.heading} 
                                    metaData={item.metaData} 
                                    logo={item.logo}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
};

export default MobileWrapper;
