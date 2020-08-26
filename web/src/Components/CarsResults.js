import React from 'react'
import './CarsResults.css'

export default function CarsResults({cars}) {
    return (
        <div className="cars-results">
            <table>
                <thead>
                    <tr>
                        <th>Line #</th>
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index) => {
                        return (
                            <tr>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {car.year}
                                </td>
                                <td>
                                    {car.make}
                                </td>
                                <td>
                                    {car.model}
                                </td>
                                <td>
                                    {car.color}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
