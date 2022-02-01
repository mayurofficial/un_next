import { Grid } from "@mui/material";
import Content from "@components/searchAndFilters/Content";
import GridNav from "@components/navigationAndTable/GridNav";
import { NUCLEAR_PLANTS } from "nuclear_plants";
import { TABLE_DATA, TABLE_HEADERS } from "table-data";
import CustomizedTables from "@components/navigationAndTable/TableData";
import React from "react";
import DataContextProvider from "src/Context/data-context";

const TechnicalData = (props) => {

  const [itemName, setitemName] = React.useState(NUCLEAR_PLANTS[0].name);
  const [length,setlength] = React.useState(TABLE_DATA);


  return (
    <DataContextProvider>
      <Grid container spacing={2}>
        <Grid item xs={2} >
          <GridNav data={NUCLEAR_PLANTS} name={setitemName} />
        </Grid>
        <Grid item xs={10}>
          <Grid item xs={12} style={{ zIndex: "1" }}>
            <Content itemName={itemName} length={length.length} />
          </Grid>
          <Grid item xs={12}>
            <CustomizedTables  tableHeaders={TABLE_HEADERS} length={setlength} />
          </Grid>
        </Grid>
      </Grid>
    </DataContextProvider>
  );
};

export default TechnicalData;
