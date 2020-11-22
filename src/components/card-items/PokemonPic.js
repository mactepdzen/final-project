import React from 'react';

export default class PokemonPic extends React.Component {
    render() {
        return (
            <img className='card-img-top rounded mx-auto d-block'
                 src={ `/pokemons/${this.props.id}.png` }
                 alt={ this.props.id }/>
        )
    }
}