import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { TABLE_DATA } from "table-data";
import { datacontext } from '../../../Context/data-context'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '1px solid #eef3f8',
    marginLeft: '-6px',
    height: '100%',
    width: '20em',
    padding: '4px'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1, 1, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '18em',
    },
}));


function SearchFiled() {

    const [searchValue, setsearchValue] = React.useState("");
    const CTX = React.useContext(datacontext);
    

    const Handlechange = (e) => {
        setsearchValue(e.target.value)
        const filteredData = TABLE_DATA.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
        })
        CTX.setvalues(filteredData)
    }


    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchValue}
                    onChange={Handlechange}
                />
            </Search>
        </>
    )
}

export default SearchFiled;
