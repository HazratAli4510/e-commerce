import { Container } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav">
            <Container>
            <nav>
            <ul>
                <li>
                    <NavLink exact className='nav-link' activeClassName='active' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' activeClassName='active' to='/review'>Review</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' activeClassName='active'  to='/inventory'>Inventory</NavLink>
                </li>
            </ul>
            </nav>
        </Container>
        </div>
    );
};

export default Navbar;