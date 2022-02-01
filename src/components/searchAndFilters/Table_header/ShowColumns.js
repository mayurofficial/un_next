import React from 'react';
import style from '../../../styles/TableHeader.module.css';
import MapIcon from '@mui/icons-material/Map';
import TableChartIcon from '@mui/icons-material/TableChart';
function ShowColumns() {
    return (
        <div className={style.filter_container}>
            <button className={style.btn}>
                <TableChartIcon/>
                <span className={style.spn}>Manage Columns</span>
            </button>
            <hr />
            <button className={style.btn}>
                <MapIcon/>
                <span className={style.spn}>Show map</span>
            </button>
        </div>
    );
}

export default ShowColumns;
