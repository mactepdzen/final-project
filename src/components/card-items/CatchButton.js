import React from 'react';

export default class CatchButton extends React.Component {
    render() {
        return (
            <button type='button'
                    className='btn btn-outline-danger'
                    disabled={this.props.isCaught}>{this.props.isCaught ? 'CAUGHT' : 'CATCH'}
            </button>
        )
    }
}