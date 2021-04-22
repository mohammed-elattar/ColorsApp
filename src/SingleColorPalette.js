import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

export default class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = {format: 'hex'};
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.changeFormat = this.changeFormat.bind(this);
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

    changeFormat(format){
        this.setState({format});
    }

    render() {
        const{format} = this.state;
        const colorsBoxes = this._shades.map(
            color => <ColorBox backgroundColor={color[format]} name={color.name} key={color.id} hasLink={false}/>
        );
        const { paletteName, emoji } = this.props.palette;
        return (
            <div className='Pallete'>
            <Navbar changeFormat={this.changeFormat} showingAllColors={false}/>
                <div className='Pallete-colors'>
                    {colorsBoxes}
                </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}
