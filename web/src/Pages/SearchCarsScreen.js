import React from 'react'
import { useSelector } from 'react-redux';
import CarsSearch from '../components/CarsSearch'
import CarsFilter from '../components/CarsFilter'
import CarsResults from '../components/CarsResults'

export default function SearchCarsScreen() {
    const cars = useSelector(state => state.cars) || [];
    return (
        <div>
            <CarsSearch></CarsSearch>
            <CarsFilter></CarsFilter>
            <CarsResults cars={cars}></CarsResults>
        </div>
    )
}
