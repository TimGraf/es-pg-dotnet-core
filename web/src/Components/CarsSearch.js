import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './CarsSearch.css';
import carsActions from '../redux/actions';

export default function CarsSearch() {
    // Initializing dispatch
    const dispatch = useDispatch();

    // Setting up local state using the useState hook
    const [search, setSearch] = useState();

    const onChange = event => {
        setSearch(event.target.value);
    }

    const applySearch = e => {
        e.preventDefault();
        dispatch(carsActions.filterSearchCars({ query: search }));
    }

    return (
        <div className="search-wrapper">
            <input 
                className="search" 
                type="text" 
                name="search" 
                placeholder="Search"
                value={search}
                onChange={onChange}
            >
            </input>
            <input 
                className="search-button"
                type="button"
                onClick={applySearch}
                value="Apply Search"
            >
            </input>
        </div>
    )
}
