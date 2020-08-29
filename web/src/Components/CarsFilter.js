import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import './CarsFilter.css'
import carsActions from '../redux/actions';

export default function CarsFilter() {
    // Initializing dispatch
    const dispatch = useDispatch();
    const filterSearch = useSelector(state => state.filterSearch);
    const years = useSelector(state => state.years);
    const makes = useSelector(state => state.makes);

    // Setting up local state using the useState hook
    const [filters, setFilters] = useState({
        year: 2010,
        make: '',
        model: '',
        color: ''
    });

    const onChange = event => {
        setFilters({ ...filters, [event.target.name]: event.target.value });
    }

    const applyFilter = e => {
        e.preventDefault();
        dispatch(carsActions.filterSearchCars({ ...filters, query: filterSearch.query }));
    }

    useEffect(() => {
        dispatch(carsActions.getYears());
        years.sort((a, b) => { return parseInt(a) - parseInt(b); });
        dispatch(carsActions.getMakes());
        makes.sort();
    }, []); // unly run once

    return (
        <div className="filter-wrapper">
            <FormControl variant="outlined">
                <InputLabel>Year</InputLabel>
                <Select
                    value={filters.year}
                    name="year"
                    onChange={onChange}
                    label="Year"
                >
                    {years.map((year, index) => (
                        <MenuItem key={index} value={year}>{year}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel>Make</InputLabel>
                <Select
                    value={filters.make}
                    name="make"
                    onChange={onChange}
                    label="Make"
                >
                    {makes.map((make, index) => (
                        <MenuItem key={index} value={make}>{make}</MenuItem>
                    ))}
                </Select>
            </FormControl>
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
