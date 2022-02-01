import React from 'react';
import styles from "../../styles/about.module.scss";
import Footer from "../../components/footer/footer"


function About() {
    return <>
        <div className={styles.mainAbout}>
            <h2 className={styles.Heading}>About ARIS</h2>



            <div className={styles.box1}>
                <h3 className={styles.h3}>What is ARIS ?</h3>
                <p>Member States, both those considering their first nuclear power plant and those with an existing nuclear power programme, are interested in having ready access to the most up-to-date information about all available nuclear power plant designs, as well as important development trends. The IAEA's Advanced Reactors Information System (ARIS) - developed to meet this need - is a web-accessible database that provides Members States with balanced, comprehensive and up-to-date information about advanced nuclear plant designs and concepts. ARIS includes reactors of all sizes and all reactor types, from evolutionary nuclear plant designs for near term deployment, to innovative reactor concepts still under development.</p>
                <br />
                <p>ARIS can be used conjointly with the IAEA's document <a href="https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1597_web.pdf" target="_blank">
                    " Nuclear Reactor Technology Assessment for Near Term Deployment" (NE Series NP-T-1.10)</a> to enable Member States to preform an informed reactor technology assessment.</p>
            </div>
            <div className={styles.box1}>
                <h3 className={styles.h3}>Design Descriptions in ARIS</h3>
                <p>Compiled from <a href="https://aris.iaea.org/Publications/ARIS_Standard_Template.pdf" target="_blank">information provided by the Design Organizations </a> of various advanced nuclear plant designs, the Design Descriptions stored in ARIS are harmonized to produce an unbiased and easy-to-use source of information. For designs which are certified or are being deployed, it is expected that the Design Organizations will provide fairly comprehensive information according to IAEA's outline for Design Descriptions. For designs which are in the early stages of development, Design Organizations are encouraged to provide as much information as possible, although it is not necessary to provide information for every section of the outline. Depending on the level of development of the various designs, ARIS includes descriptions of the nuclear steam supply system, safety concepts, plant performance, proliferation resistance, and spent fuel and waste management, as well as a list of key technical data. Each Design Description is updated when there are significant advancements in the design, licensing or deployment status.</p>
                <br />
                <p>Before being loaded into ARIS, the Design Descriptions are reviewed by IAEA to identify technical items needing clarification, and edited to remove overly commercial statements and, if necessary, to improve clarity and English. Also, the IAEA edits the Design Descriptions to assure that safety levels, costs, projected construction times, projected availability factors, and commercialization dates are presented as "goals" or "claims" of the Design Organization - to be clear that IAEA has not reviewed or endorsed these claims. Each Design Description is loaded into ARIS following the Design Organization's clarification of technical questions and concurrence with IAEA's editing.</p>
                <br />
                <p>Information in ARIS is available to support Member States' Technology Assessments of Advanced Designs.</p>
            </div>
        </div>

    </>;
}

export default About;
