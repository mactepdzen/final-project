import React from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
                <Link to='/' className='nav-link'>Pokemon App</Link>
                <Link to='/caughtPokemons' className='nav-link'>Caught Pokemons</Link>
            </div>
        )
    }
}