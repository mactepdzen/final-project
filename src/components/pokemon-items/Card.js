import React from 'react';
import {Link} from "react-router-dom";
import PokemonPic from "../card-items/PokemonPic";
import PokemonTitle from "../card-items/PokemonTitle";
import CatchButton from "../card-items/CatchButton";
import axios from "axios";


export default class Card extends React.Component {
    state = {
        id: this.props.id,
        name: this.props.name,
        isCaught: this.props.isCaught
    }

    handleClick = e => {
        this.setState({isCaught: true});
        const currentDate = new Date(Date.now());
        const editedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`
        axios({
            method: 'put',
            url: `http://localhost:3001/pokemons/${this.state.id}`,
            data: {
                name: this.state.name,
                id: this.state.id,
                isCaught: true,
                caughtDate: editedDate,
            }
        })
    }

    render() {
        return (
            <div className='col-md-4 col-sm-5 mb-5 p-1'>
                <div className='card text-center'>
                    <Link to={`/pokemons/${this.state.id}`} className='card-link'>
                        <PokemonPic id={this.state.id}/>
                        <div className='card-body'>
                            <PokemonTitle name={this.state.name}/>
                        </div>
                    </Link>
                    <div onClick={this.handleClick} className='card-footer'>
                        <CatchButton isCaught={this.state.isCaught}/>
                    </div>
                </div>
            </div>
        )
    }
}