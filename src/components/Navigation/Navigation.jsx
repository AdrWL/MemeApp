import * as React from 'react';
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import './Navigation.css';

export default function Navigation() {
    return (
        <nav>
            <div className='nav-container'>
                <ul>
                    <li>
                        <NavLink to="/regular">
                            <Button variant="contained">Regular</Button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/hot">
                            <Button variant="contained">Hot</Button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/form">
                            <Button variant="contained">ADD</Button>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
