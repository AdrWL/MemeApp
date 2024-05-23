import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import './Navigation.css';

export default function Navigation() {
    return (
        <nav>
            <div className='nav-container'>
                <ul>
                    <li>
                        <Link to="/regular">
                            <Button variant="contained">Regular</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/hot">
                            <Button variant="contained">Hot</Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
