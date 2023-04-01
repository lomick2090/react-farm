import React from 'react';
import { FarmHeader }from './FarmHeader';
import '../react-farm.css'

export class FarmUnit extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='farmunit'>
                <img src={require('../imgs/farmuniticon.png')}></img>
                <FarmHeader title={this.props.title} tvl={this.props.tvl}/>
                <button>Stake LP tokens</button>
            </div>
        )
    }
}