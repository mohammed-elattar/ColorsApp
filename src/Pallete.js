import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Pallete.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class Pallete extends Component {
    constructor(props) {
        super(props);
        this.state = {level: 500};
        this.changeLevel= this.changeLevel.bind(this);
    }
    changeLevel(level){
        this.setState({level});
    }
    render() {
        const {colors} = this.props.pallete;
        const {level} = this.state;
        const colorsBoxes = colors[level].map(color => <ColorBox backgroundColor={color.hex} name={color.name}/>);
        return (
            <div className='Pallete'>
                <Slider 
                    defaultValue={level}
                    min={100}
                    max={900}
                    onAfterChange={this.changeLevel}
                    step={100}
                />
                <div className='Pallete-colors'>
                    {colorsBoxes}
                </div>
            </div>
        )
    }
}
