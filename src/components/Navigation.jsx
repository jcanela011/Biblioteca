import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="nav">
            <a className="nav-link active" href="#"><NavLink to="/">Home</NavLink></a>
            <a className="nav-link" ><NavLink to="/formRegLibro">Registrar Libro</NavLink></a>
        </nav>
    );
};

export default Navigation;