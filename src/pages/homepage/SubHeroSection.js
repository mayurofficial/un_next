import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from '../../styles/homepage.module.scss'
import TabComponent from '@components/tab';
import TabCard from '@components/tabCard';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const SubHeroSection = () => {

    const [value, setValue] = React.useState(0);
    const [cssStyle, setCss] = React.useState(true)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleCss = () => {
        console.log(1);
    }

    return (
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className={cssStyle ? styles.defaultCss : styles.parent_tab} label="Advanced Reactors" {...a11yProps(0)} />
                        <Tab className={styles.parent_tab} label="Small Modular Reactors" {...a11yProps(1)} onClick={() => setCss(false)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <TabComponent />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TabCard
                        heading='Small Modular Reactors'
                        para1='Small and medium-sized or modular reactors are an option to fulfil the need for flexible power generation for a wider range of users and applications. Small modular reactors, deployable either as single or multi-module plant, offer the possibility to combine nuclear with alternative energy sources, including renewables.'
                        para2='There are about 50 SMR designs and concepts globally. Most of them are in various developmental stages and some are claimed as being near-term deployable. There are currently four SMRs in advanced stages of construction in Argentina, China and Russia, and several existing and newcomer nuclear energy countries are conducting SMR research and development.'
                        link='https://www.iaea.org/topics/small-modular-reactors'
                    />
                </TabPanel>
            </Box>

    )
};

export default SubHeroSection;
