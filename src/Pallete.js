import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar';
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
        const {colors, paletteName, emoji} = this.props.pallete;
        const {level, format} = this.state;
        const colorsBoxes = colors[level].map(color => <ColorBox backgroundColor={color[format]} name={color.name} key={color.id}/>);
        return (
            <div className='Pallete'>
            <Navbar {...this.state} changeLevel={this.changeLevel} changeFormat={this.changeFormat}/>
                <div className='Pallete-colors'>
                    {colorsBoxes}
                </div>
                <footer className='Pallete-footer'>
                    {paletteName}
                    <span className='emoji'>{emoji}</span>
                </footer>
            </div>
            
        )
    }
}
