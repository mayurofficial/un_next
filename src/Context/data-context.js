import React, { useState, createContext } from "react";
import { TABLE_DATA } from "../../table-data";

export const datacontext = createContext();

function DataContextProvider(props) {
  const [searchvalue, setsearchvalue] = useState(TABLE_DATA);

  const setvalues = (e) => {
    setsearchvalue(e);
  };
  const values = {
    searchvalue,
    setvalues,
  };

  return (
    <datacontext.Provider value={values}>{props.children}</datacontext.Provider>
  );
}

export default DataContextProvider;
