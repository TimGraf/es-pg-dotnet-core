import React, { useState, useContext } from 'react';
import { TextField } from '@material-ui/core';
import { CarsContext } from '../contexts/CarsContext';
import './CarsSearch.css';

export default function CarsSearch() {
    const [search, setSearch] = useState('');
    const [{ filterSearch, setFilterSearch }] = useContext(CarsContext);

    const onChange = event => {
        const searchValue = event.target.value;
        setSearch(searchValue);
        setFilterSearch({ ...filterSearch, query: searchValue });
    }

    return (
        <div className="search-wrapper">
            <TextField 
                className="search" 
                type="text" 
                name="search" 
                placeholder="Search"
                value={search}
                onChange={onChange}
                variant="outlined"
            >
            </TextField>
        </div>
    )
}
