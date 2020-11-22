import React from 'react';
import axios from 'axios';
import PokemonPic from "../card-items/PokemonPic";

export default class PokemonPage extends React.Component {
    state = {
        id: '',
        name: '',
        isCaught: false,
        caughtDate: ''
    }

    async componentDidMount() {
        const allPokemons = await axios.get('http://localhost:3001/pokemons');
        const id = this.props.match.params.id;
        this.setState({
            id: id,
            name: allPokemons.data[id - 1].name,
            isCaught: allPokemons.data[id - 1].isCaught ? 'caught' : 'nope, it isn\'t',
            caughtDate: allPokemons.data[id - 1].caughtDate ? `${allPokemons.data[id - 1].caughtDate}` : null,
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='col-md-5 col-sm-6 mb-5'>
                    <div className='card pokepage'>
                        <PokemonPic id={this.state.id}/>
                            <div>ID: {this.state.id}</div>
                            <div>NAME: {this.state.name}</div>
                            <div>STATUS: {this.state.isCaught}</div>
                            {this.state.caughtDate ? <div>DATE: {this.state.caughtDate}</div> : null}
                    </div>
                </div>
            </div>
        )
    }
}