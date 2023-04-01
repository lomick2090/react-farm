import React from 'react';

export class FarmHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
                <h2>TVL: {this.props.tvl} </h2>
            </div>
        )
    }
}