import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabCard from '@components/tabCard';
import styles from '../../styles/homepage.module.scss'
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
        <Box className={styles.tab_pannel}>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const advancedReactorsData = [
    {
      heading: 'Water Cooled Technology',
      para1: 'Water cooled reactors have played a significant role in the commercial nuclear industry since its beginnings and currently account for more than 95 per cent of all operating civilian power reactors in the world. In addition, the majority of nuclear reactors under development and construction are water-cooled.',
      para2: 'Water Cooled Reactors (WCRs) have been the cornerstone of the nuclear industry in the 20th century. Of the currently operating 442 reactors, 96 per cent are water-cooled.',
      link: 'https://www.iaea.org/topics/water-cooled-reactors'
    },
    {
      heading: 'Gas Cooled Technology',
      para1: 'Commercial gas cooled reactors are currently in use only in the United Kingdom. International interest in developing high temperature gas cooled reactors is increasing because they can provide efficient and cost effective electricity and produce high-temperature process heat usable for various industrial applications.',
      para2: 'Gas cooled reactors currently represent about three per cent of the total number of reactors in commercial operation worldwide. These are all advanced carbon-dioxide gas cooled reactors in the United Kingdom that will be phased out around the mid-2020s.',
      link: 'https://www.iaea.org/topics/gas-cooled-reactors'
    },
    {
      heading: 'Liquid Metal Cooled Technology',
      para1: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.',
      para2: 'Gas cooled reactors currently represent about three per cent of the total number of reactors in commercial operation worldwide. These are all advanced carbon-dioxide gas cooled reactors in the United Kingdom that will be phased out around the mid-2020s.',
      link: 'https://www.iaea.org/topics/gas-cooled-reactors'
    },
    {
      heading: 'Molten Salt Cooled Technology',
      para1: 'Initially developed in the 1950s, molten salt reactors have benefits in higher efficiencies and lower waste generation. Some designs do not require solid fuel, which eliminates the need for manufacturing and disposing of it. In recent years, growing interest in this technology has led to renewed development activities.',
      para2: 'Molten salt reactors (MSRs) are seen in some countries as a promising advanced reactor technology because of the various benefits associated with them. They operate at higher temperatures, which lead to increased efficiencies in generating electricity.',
      link: 'https://www.iaea.org/topics/molten-salt-reactors'
    },
  ]
  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className={styles.inner_tab_pannel} label="Water Cooled Technology" {...a11yProps(0)} />
          <Tab className={styles.inner_tab_pannel} label="Gas Cooled Technology" {...a11yProps(1)} />
          <Tab className={styles.inner_tab_pannel} label="Liquid Metal Cooled Technology" {...a11yProps(2)} />
          <Tab className={styles.inner_tab_pannel} label="Molten Salt Cooled Technology" {...a11yProps(3)} />
        </Tabs>
      </Box>
      {
        advancedReactorsData.map((card, index) => {
          return (
            <TabPanel key={card.heading} value={value} index={index}>
              <TabCard heading={card.heading} para1={card.para1} para2={card.para2} link={card.link}/>
            </TabPanel>
          )
        })
      }
    </Box>
  );
}