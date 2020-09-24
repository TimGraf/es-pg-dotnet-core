import React, { useState, useContext, useEffect } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { CarsContext } from '../contexts/CarsContext';
import './CarsFilter.css'

export default function CarsFilter() {
    const [years, setYears] = useState([]);
    const [makes, setMakes] = useState([]);
    const [{ filterSearch, setFilterSearch }] = useContext(CarsContext);

    const getYears = () => {
        const ADDRESS_URL = new URL('http://localhost:5000/Cars/Years');
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        fetch(ADDRESS_URL, config)
            .then(r => r.json())
            .then(data => {
                let yearsRes = data.years;
                yearsRes.sort((a, b) => { return parseInt(a) - parseInt(b); });
                setYears(yearsRes);
            });
    };
    
    const getMakes = () => {
        const ADDRESS_URL = new URL('http://localhost:5000/Cars/Makes');
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        fetch(ADDRESS_URL, config)
            .then(r => r.json())
            .then(data => {
                let makesRes = data.makes;
                makesRes.sort();
                setMakes(makesRes);
            });
    };

    useEffect(() => {
        getYears();
        getMakes();
    }, []);

    const onChange = event => {
        setFilterSearch({ ...filterSearch, [event.target.name]: event.target.value });
    }

    return (
        <div className="filter-wrapper">
            <FormControl variant="outlined">
                <InputLabel>Year</InputLabel>
                <Select
                    value={filterSearch.year}
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
                    value={filterSearch.make}
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
                value={filterSearch.model}
                onChange={onChange}
                variant="outlined"
            >
            </TextField>
            <TextField 
                type="text" 
                name="color" 
                placeholder="Color" 
                value={filterSearch.color}
                onChange={onChange}
                variant="outlined"
            >
            </TextField>
        </div>
    )
}
