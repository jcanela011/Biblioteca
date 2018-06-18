import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="nav">
            <a className="nav-link active" href="#"><NavLink to="/">Home</NavLink></a>
            <a className="nav-link" ><NavLink to="/formRegLibro">Registrar Libro</NavLink></a>
            <a className="nav-link" ><NavLink to="/Categoria">Agregar Categoria</NavLink></a>
            <a className="nav-link" ><NavLink to="/Tipo">Agregar Tipo</NavLink></a>
            <a className="nav-link" ><NavLink to="/Estante">Agregar Estantes</NavLink></a>
            <a className="nav-link" ><NavLink to="/formRegLibro">Nuevo Usuario</NavLink></a>
        </nav>
    );
};

export default Navigation;