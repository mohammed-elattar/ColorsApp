import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Pallete.css';

export default class Pallete extends Component {
    render() {
        const colors = this.props.colors.map(c => <ColorBox backgroundColor={c.color} name={c.name}/>);
        return (
            <div className='Pallete'>
                <div className='Pallete-colors'>
                    {colors}
                </div>
            </div>
        )
    }
}
