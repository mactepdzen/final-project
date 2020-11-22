import React from 'react';
import axios from 'axios';

export default class PokemonTitle extends React.Component {
    render() {
        return (
            <h6 className='card-title'>{this.props.name}</h6>
        )
    }
}