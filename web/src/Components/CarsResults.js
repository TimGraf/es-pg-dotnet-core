import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './CarsResults.css'

export default function CarsResults({cars}) {

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
