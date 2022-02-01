import React from "react";
import TableHeader from "./Table_header/TableHeader";


function Content({itemName,length}) {
  
  let heading=itemName;
  let items = `${length} Reactors`;
   
  return (
    <>
      <TableHeader header={{ heading, items }} />
    </>
  );
}

export default Content;
