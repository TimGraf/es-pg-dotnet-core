import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import './CarsFilter.css'
import carsActions from '../redux/actions';

export default function CarsFilter() {
    // Initializing dispatch
    const dispatch = useDispatch();

    // Setting up local state using the useState hook
    const [filters, setFilters] = useState({
        year: null,
        make: '',
        model: '',
        color: ''
    });
    const [search] = useState();

    const onChange = event => {
        setFilters({ ...filters, [event.target.name]: event.target.value });
    }

    const applyFilter = e => {
        e.preventDefault();
        dispatch(carsActions.filterSearchCars({ ...filters, query: search }));
    }

    return (
        <div className="filter-wrapper">
            <TextField 
                type="text" 
                name="year" 
                placeholder="Year" 
                value={filters.year || ""}
                onChange={onChange}
                variant="outlined"
            >
            </TextField>
            <TextField 
                type="text" 
                name="make" 
                placeholder="Make" 
                value={filters.make}
                onChange={onChange}
                variant="outlined"
            >
            </TextField>
            <TextField 
                type="text" 
                name="model" 
                placeholder="Model" 
                value={filters.model}
                onChange={onChange}
                variant="outlined"
            >
            </TextField>
            <TextField 
                type="text" 
                name="color" 
                placeholder="Color" 
                value={filters.color}
                onChange={onChange}
                variant="outlined"
            >
            </TextField>
            <Button
                type="button"
                onClick={applyFilter}
                variant="contained" 
                color="primary"
            >
                Apply Filter
            </Button>
        </div>
    )
}
