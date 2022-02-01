
import React from 'react';
import style from '../../../styles/TableHeader.module.css';

function Dropdown({ data }) {
    return (



        <div className={style.dropdown}>
            {data.map((val,index) => {

                return (
                    <div key={index} style={{margin:'8px'}} >
                        <input type="checkbox" value={val} style={{margin:'0 8px 0 5px'}} />
                        <label htmlFor="vehicle1">{val}</label>
                        <br />
                    </div>
                )

            })}
        </div>

    );
}

export default Dropdown;
