import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './Pallete.css';
export default class Pallete extends Component {
    constructor(props) {
        super(props);
        this.state = {level: 500, format: 'hex'};
        this.changeLevel= this.changeLevel.bind(this);
        this.changeFormat= this.changeFormat.bind(this);
    }
    changeLevel(level){
        this.setState({level});
    }
    changeFormat(format){
        this.setState({format});
    }
    render() {
        const {colors, paletteName, emoji, id} = this.props.pallete;
        const {level, format} = this.state;
        const colorsBoxes = colors[level].map(
            color => <ColorBox backgroundColor={color[format]} name={color.name} key={color.id} moreUrl={`/palette/${id}/${color.id}`} hasLink/>
            );
        return (
            <div className='Pallete'>
            <Navbar {...this.state} changeLevel={this.changeLevel} changeFormat={this.changeFormat} showingAllColors/>
                <div className='Pallete-colors'>
                    {colorsBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
            
        )
    }
}
