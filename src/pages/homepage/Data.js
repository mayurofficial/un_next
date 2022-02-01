import React from 'react';
import styles from '../../styles/homepage.module.scss'
const Data = () => {
    return (
        <div className={styles.data_wrapper}>
            <h2>Status of Advanced Nuclear Reactors</h2>
            <div className={styles.data_container}>
                <div className={styles.data_left_container}>
                    <h3>Future of Nuclear Power</h3>
                    <p>The IAEA anticipates that the global demand for electricity will continue to increase as a result of economic development aspirations and energy security concerns, and that expansion of nuclear power will continue at a slow but steady pace particularly in Asia and the Middle East.</p>
                    <h3>Advanced Designs</h3>
                    <p>The ARIS database includes technical information about Advanced Reactor Designs that is provided by the responsible design organizations and/or reactor plant vendors.</p>
                    <p>According to the definitions established by the IAEA, an advanced reactor design consists of both Evolutionary and Innovative reactor technologies. Evolutionary reactor designs are reactor designs that improve on existing designs through small or moderate modifications with a strong emphasis on maintaining proven design features to minimize technological risk. While innovative reactor designs incorporate radical changes in the use of materials and/or fuels, operating environments and conditions, and system configurations. Advanced reactors can be classified in terms of coolant, neutron spectrum, temperature or purpose. With regards to purpose, the reactors can be sorted in terms of experimental, demonstration or prototype, and commercial.</p>
                </div>
                <div className={styles.data_right_container}>
                    Graph
                </div>
            </div>
            <div>
                <p>Experimental Reactor - Typically the first design of a new innovative reactor technology that has been constructed with the purpose of validating the performance of reactor core materials and fuels, exploring safety limits and uncertainties, and gaining critical lessons learned so that the technology may be licensed and commercialized at some future time. Experimental reactors are often low power reactors and typically not used to supply reliable electrical power for the grid.</p>
                <p>Demonstration or Prototype Reactor - A demonstration or prototype plant (may or may not be designer to full commercial scale) that is intended to demonstrate overall plant performance, reliability, safety systems, and economics. A demonstration plant will typically generate electrical power and/or process heat for industrial applications at some limited scale.</p>
                <p>Commercial Reactor - A highly reliable reactor power plant that has been built to full scale and intended solely for commercial use in the generation of electricity and/or process heat for industrial applications.</p>
            </div>
            <div>
                <h3>Nuclear Power Technology Development Section</h3>
                <p>The goal of the Nuclear Power Technology Development Section (NPTDS) is to foster information exchange and collaborative research in the area of advanced nuclear reactor technologies to ensure a sustainable, secure, stable and safe energy future for Member States. Fostering information exchange and collaborative research and development for advanced nuclear reactor technologies, this Section provides information to the IAEA’s Member States on technology status and development trends for advanced reactor systems and their applications.</p>
            </div>
        </div>
    )
};

export default Data;
