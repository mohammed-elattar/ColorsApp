import React, { Component } from 'react'
import MiniPallete from './MiniPallete';
import { withStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

const styles = {
    root: {
      backgroundColor: 'blue',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: '100vh',
    },
    container: {
        width: '50%',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        alignContent: 'center'
    },
    palettes: {
        gridTemplateColumns: 'repeat(3, 30%)',
        display: 'grid',
        gridGap: '5%',
    }
  };
class PalleteList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {}
    }
    render() {
        const {palletes,classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <h1>Pallete Colors</h1>
                        <a>Mohammed Elattar</a>
                    </div>
                    <div className={classes.palettes}>
                    {palletes.map(pallete => (
                   <MiniPallete {...pallete}/>
               ))} 
                    </div>
                </div>
            </div>               
        )
    }
}

export default withStyles(styles)(PalleteList);
