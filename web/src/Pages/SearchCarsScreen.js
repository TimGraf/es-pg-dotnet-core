import React from 'react';
import { useSelector } from 'react-redux';
import CarsSearch from '../components/CarsSearch';
import CarsFilter from '../components/CarsFilter';
import CarsResults from '../components/CarsResults';
import './SearchCarsScreen.css';

export default function SearchCarsScreen() {
    const cars = useSelector(state => state.cars) || [];
    return (
        <div className="wrapper">
            <div className="search">
                <CarsSearch></CarsSearch>
            </div>
            <div className="filter">
                <CarsFilter></CarsFilter>
            </div>
            <div className="results" >
                <CarsResults cars={cars}></CarsResults>
            </div>
        </div>
    )
}
