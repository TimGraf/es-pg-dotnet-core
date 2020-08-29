import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import './CarsSearch.css';
import carsActions from '../redux/actions';

export default function CarsSearch() {
    // Initializing dispatch
    const dispatch = useDispatch();
    const filterSearch = useSelector(state => state.filterSearch);

    // Setting up local state using the useState hook
    const [search, setSearch] = useState();

    const onChange = event => {
        setSearch(event.target.value);
    }

    const applySearch = e => {
        e.preventDefault();
        dispatch(carsActions.filterSearchCars({ ...filterSearch, query: search }));
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
            <Button 
                className="search-button"
                type="button"
                onClick={applySearch}
                variant="contained" 
                color="primary"
            >
                Apply Search
            </Button>
        </div>
    )
}
