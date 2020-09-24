import React from 'react';
import CarsSearch from '../components/CarsSearch';
import CarsFilter from '../components/CarsFilter';
import CarsResults from '../components/CarsResults';
import { CarsContextProvider } from '../contexts/CarsContext';
import './SearchCarsScreen.css';

export default function SearchCarsScreen() {
    return (
        <CarsContextProvider>
            <div className="wrapper">
                <div className="search">
                    <CarsSearch></CarsSearch>
                </div>
                <div className="filter">
                    <CarsFilter></CarsFilter>
                </div>
                <div className="results" >
                    <CarsResults></CarsResults>
                </div>
            </div>
        </CarsContextProvider>
    )
}
