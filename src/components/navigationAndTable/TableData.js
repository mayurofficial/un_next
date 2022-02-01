import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { datacontext } from "src/Context/data-context";
import styles from "../../styles/TableHeader.module.css";

export default function CustomizedTables(props) {
  const [sortingOrder, setSortingOrder] = React.useState(false);
  const { tableHeaders, length } = props;
  const CTX = React.useContext(datacontext);
  const [tableData, setTableData] = React.useState(CTX.searchvalue);

  const sortBy = (header) => {
    let newTable;
    if (sortingOrder) {
      newTable = tableData.sort((a, b) => {
        if (a[header] < b[header]) return 1;
        if (a[header] > b[header]) return -1;
        return 0;
      });
    }
    if (!sortingOrder) {
      newTable = tableData.sort((a, b) => {
        if (a[header] < b[header]) return -1;
        if (a[header] > b[header]) return 1;
        return 0;
      });
    }
    let newArray = [];
    for (const item of newTable) {
      item["key"] = Math.random() + 2;
      newArray.push(item);
    }
    setTableData(newArray);
    setSortingOrder((prevState) => !prevState);
  };

  const shallowHeadersCopy = tableHeaders.filter((item, i) => {
    return i > 0;
  });

  React.useEffect(() => {
    setTableData(CTX.searchvalue);
    length(tableData);
  }, [tableData, CTX.searchvalue, sortingOrder]);

  return (
    <TableContainer className={styles.table_data} component={Paper}>
      <Table
        stickyHeader
        sx={{ minWidth: 700 }}
        className="thead"
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, i) => (
              <TableCell key={i} className={styles.heading} align="center">
                {header.display}
                <div
                  className={styles.sort_btn}
                  onClick={() => sortBy(header.fieldName)}
                >
                  {sortingOrder ? "↑" : "↓"}
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, i) => (
            <TableRow key={i}>
              <TableCell
                style={{
                  position: "sticky",
                  left: 0,
                  background: "white",
                  fontWeight: "700",
                }}
                component="th"
                scope="row"
              >
                {row.acronym}
              </TableCell>
              {Object.values(row).map((values, i) =>
                i !== 0 ? <TableCell key={i} align="center">{values}</TableCell> : null
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
