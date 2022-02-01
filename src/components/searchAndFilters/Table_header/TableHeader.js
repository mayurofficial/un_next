import * as React from 'react';
import style from '../../../styles/TableHeader.module.css';
import Filters from './Filters';
import SearchFiled from './SearchFiled';
import ShowColumns from './ShowColumns';

function TableHeader({ header }) {

    return (
        <>
            <div>
                <div className={style.head}>
                    <div className={style.h4} >
                        {header.heading}
                    </div>
                    <p className={style.h6}>{header.items}</p>
                </div>
                <div className={style.table_header}>
                    <div className={style.searchFileds}>
                        <SearchFiled />
                        <Filters />
                    </div>
                    <div>
                        <ShowColumns />
                    </div>
                </div>

            </div>
        </>
    );
}

export default TableHeader;
