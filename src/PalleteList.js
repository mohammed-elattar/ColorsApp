import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PalleteList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {}
    }
    render() {
        const {palletes} = this.props;
        return (
            <div>
                <h1>Pallete Colors</h1>
               {palletes.map(pallete => (
               <p>
                   <Link to={`/pallete/${pallete.id}`}>{pallete.paletteName}</Link>
               </p>    
               ))} 
            </div>
        )
    }
}
