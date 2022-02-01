import React from 'react';
import style from '../../../styles/TableHeader.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { TABLE_DATA } from "../../../../table-data";
import { datacontext } from '../../../Context/data-context'

const data = TABLE_DATA

function Filters() {

    const [showDropdown, setshowDropdown] = useState({
        load: false,
        option: ''
    });


    const [searchValue, setsearchValue] = React.useState("");
    const CTX = React.useContext(datacontext);

    const show = (e) => {
        e.preventDefault()
        setshowDropdown((pre) => {
            return {
                ...pre,
                load: !pre.load,
                option: e.target.name
            }

        });
    }


    const handleCheckbox = (e) => {
        setsearchValue(e.target.value)
        const filteredData = TABLE_DATA.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
        })
        if (e.target.checked) {
            CTX.setvalues(filteredData)
        } else {
            CTX.setvalues(TABLE_DATA)
        }
    }


    return (
        <>
            <div className={style.filter_container} >

                <form onSubmit={show} name='Type' >
                    <button className={style.btn} type="submit" >
                        <span className={style.spn}>Type</span>
                        <ArrowDropDownIcon />
                    </button>
                    {showDropdown.load && showDropdown.option === 'Type' ? (
                        <div className={style.dropdown}>
                            {data.map((val, index) => {

                                return (
                                    <div key={index} style={{ margin: '8px' }} >
                                        <input type="checkbox" onChange={handleCheckbox} value={val.type} style={{ margin: '0 8px 0 5px' }} />
                                        <label htmlFor="vehicle1">{val.type}</label>
                                        <br />
                                    </div>
                                )

                            })}
                        </div>
                    ) : ""}
                </form>
                <hr />
                <form onSubmit={show} name='Country' >
                    <button className={style.btn} type="submit" >
                        <span className={style.spn}>Country</span>
                        <ArrowDropDownIcon />
                    </button>
                    {showDropdown.load && showDropdown.option === 'Country' ? (
                        <div className={style.dropdown}>
                            {data.map((val, index) => {

                                return (
                                    <div key={index} style={{ margin: '8px' }} >
                                        <input type="checkbox" onClick={handleCheckbox} value={val.country} style={{ margin: '0 8px 0 5px' }} />
                                        <label htmlFor="vehicle1">{val.country}</label>
                                        <br />
                                    </div>
                                )

                            })}
                        </div>
                    ) : ""}
                </form>
                <hr />
                <form onSubmit={show} name='Status'>
                    <button className={style.btn} type="submit" >
                        <span className={style.spn}>Status</span>
                        <ArrowDropDownIcon />
                    </button>
                    {showDropdown.load && showDropdown.option === 'Status' ? (
                        <div className={style.dropdown}>
                            {data.map((val, index) => {

                                return (
                                    <div key={index} style={{ margin: '8px' }} >
                                        <input type="checkbox" onClick={handleCheckbox} value={val.designStatus} style={{ margin: '0 8px 0 5px' }} />
                                        <label htmlFor="vehicle1">{val.designStatus}</label>
                                        <br />
                                    </div>
                                )

                            })}
                        </div>
                    ) : ""}
                </form>
                <hr />
                <button className={style.btn}>
                    <span className={style.spn}>More Filters</span>
                </button>

            </div>
        </>
    )
}

export default Filters;
