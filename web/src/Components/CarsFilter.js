import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './CarsFilter.css'
import filterCarsActions from '../redux/actions';

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

    const onChange = event => {
        setFilters({ ...filters, [event.target.name]: event.target.value });
    }

    const applyFilter = e => {
        e.preventDefault();
        dispatch(filterCarsActions.filterCars(filters));
    }

    return (
        <div className="filter-wrapper">
            <input 
                type="text" 
                name="year" 
                placeholder="Year" 
                value={filters.year}
                onChange={onChange}
            >
            </input>
            <input 
                type="text" 
                name="make" 
                placeholder="Make" 
                value={filters.make}
                onChange={onChange}
            >
            </input>
            <input 
                type="text" 
                name="model" 
                placeholder="Model" 
                value={filters.model}
                onChange={onChange}
            >
            </input>
            <input 
                type="text" 
                name="color" 
                placeholder="Color" 
                value={filters.color}
                onChange={onChange}
            >
            </input>
            <input 
                type="button"
                onClick={applyFilter}
                value="Apply Filter"
            >
            </input>
        </div>
    )
}
