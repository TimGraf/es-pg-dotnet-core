import React from 'react'
import './CarsResults.css'

export default function CarsResults({cars}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(car => {
                        return (
                            <tr>
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
