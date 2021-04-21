import React, { Component } from 'react'
import ColorBox from './ColorBox';

export default class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        console.log(this._shades);
    }

    gatherShades(palette, colorToFilterBy) {
console.log(palette);
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }

        return shades.slice(1);
    }

    render() {
        const colorsBoxes = this._shades.map(
            color => <ColorBox backgroundColor={color.hex} name={color.name} key={color.id} hasLink={false}/>
        );
        return (
            <div className='Pallete'>
                <h1>Single Color Palette</h1>
                <div className='Pallete-colors'>
                    {colorsBoxes}
                </div>
            </div>
        )
    }
}
