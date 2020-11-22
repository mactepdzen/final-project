import React from 'react';
import axios from 'axios';
import Card from "./Card";

export default class ListCards extends React.Component {
    state = {
        pokemon: null,
        visible: 3
    };

    async componentDidMount() {
        const result = await axios.get('http://localhost:3001/pokemons');
        this.setState({pokemon: result.data});
    };

    loadMore() {
        this.setState({visible: this.state.visible + 3});
    };

    render() {
        return (
            <div>
                <div className='card-deck row'>
                    {this.state.pokemon ?
                        this.state.pokemon.slice(0, this.state.visible).map(pokemon => <Card key={pokemon.id}
                                                                                             id={pokemon.id}
                                                                                             name={pokemon.name}
                                                                                             isCaught={pokemon.isCaught}/>)
                        :
                        <div className="spinner-border text-danger" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    }
                </div>
                <div className='btn-container'>
                    <button type='button' onClick={this.loadMore.bind(this)} className='btn-loadmore'>Load more
                    </button>
                </div>
            </div>
        );
    };
}