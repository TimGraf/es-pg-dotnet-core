import React, { useState, useContext, useEffect } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CarsContext } from '../contexts/CarsContext';
import './CarsResults.css'

export default function CarsResults() {
    const [cars, setCars] = useState([]);
    const [{ filterSearch }] = useContext(CarsContext);

    const filterSearchCars = filterSearch => {
        const ADDRESS_URL = new URL('http://localhost:5000/Cars/FilterSearch');
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let params = {};
    
        if (filterSearch.year) {
            params = { ...params, year: filterSearch.year }
        }
    
        if (filterSearch.make) {
            params = { ...params, make: filterSearch.make }
        }
    
        if (filterSearch.model) {
            params = { ...params, model: filterSearch.model }
        }
    
        if (filterSearch.color) {
            params = { ...params, color: filterSearch.color }
        }
    
        if (filterSearch.query) {
            params = { ...params, query: filterSearch.query }
        }
    
        ADDRESS_URL.search = new URLSearchParams(params).toString();
    
        fetch(ADDRESS_URL, config)
            .then(r => r.json())
            .then(data => {
                setCars(data.cars);
            });
    };

    useEffect(() => {
        filterSearchCars(filterSearch);
    }, [filterSearch]);

    return (
        <div className="cars-results">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Line#</TableCell>
                        <TableCell>Year</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>Color</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {cars.map((car, index) => (
                        <TableRow key={index}>
                        <TableCell component="th" scope="row">
                            {index + 1}
                        </TableCell>
                        <TableCell>{car.year}</TableCell>
                        <TableCell>{car.make}</TableCell>
                        <TableCell>{car.model}</TableCell>
                        <TableCell>{car.color}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
