import React from 'react';
import ListCards from "../pokemon-items/ListCards";

export default class Board extends React.Component {
    render() {
        return (
            <div className='container board'>
                <ListCards />
            </div>
        )
    }
}