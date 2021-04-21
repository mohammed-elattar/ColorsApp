import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: 'white',
    border: '1px solid balck',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
        cursor: 'pointer',
    }
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overFlow: 'hidden'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: 0,
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  },
  minicolor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px'
  }
};

function MiniPallete(props) {
  const { classes, paletteName, emoji, colors, handleClick } = props;
  const miniColorBoxes = colors.map(color => (
    <div className={classes.minicolor} style={{backgroundColor: color.color}} key={color.name}></div>
  ));
  return (
  <div className={classes.root} onClick={handleClick}>
    <div className={classes.colors}>{miniColorBoxes}</div>
    <h5 className={classes.title}>
        {paletteName}  <span className={classes.emoji}>{emoji}</span>
    </h5>
  </div>);
}

MiniPallete.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MiniPallete);