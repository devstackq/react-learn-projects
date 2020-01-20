import React, { Component } from 'react'
import List from './List'


export default class Wrapper extends Component {

    state = { 
        cities : [
            {name : 'Astana'},
            {name : 'Almaty'},
            {name : 'Karganda'},
            {name : 'Pavladar'}
        ]
    }

    render() {
        return (
            <div>
                <label > Destination</label>
                <List city={this.state.cities} />
               
                <button> search</button>
            </div>
        )
    }
}
// input, and dropdown -> one storage get data, when click -> Delete, delete city, when chenge value input - get city name