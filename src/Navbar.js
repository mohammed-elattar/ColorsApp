import React, { Component } from 'react'
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {format: "hex", open: false};
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }
    handleFormatChange(event) {
        const format = event.target.value;
        this.setState({format, open:true});
        this.props.changeFormat(format);
    }
    closeSnackbar() {
        this.setState({...this.state, open: false});
    }
    render() {
        const {level, changeLevel} = this.props;
        const {format, open} = this.state;
        return (
            <header className='Navbar'>
            <div className='logo'>
                <Link to='/'>ColorPicker</Link>
            </div>
            <div className='slider-container'>
                <span>Level {level}</span>
                <div className='slider'>
                <Slider 
                    defaultValue={level}
                    min={100}
                    max={900}
                    onAfterChange={changeLevel}
                    step={100}
                />
            </div>            
            
            </div>
            <div className='select-cotnainer'>
                <Select 
                value={format}
                onChange={this.handleFormatChange}
                >
                    <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={3000}
                onClose={this.closeSnackbar}
                message= {`Format changed to ${format.toUpperCase()}`}
                action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={this.closeSnackbar}>
                    <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
      />
            </header>
        )
    }
}
