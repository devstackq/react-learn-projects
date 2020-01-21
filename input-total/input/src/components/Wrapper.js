import React, { Component } from 'react'

import BaseComponent from './BaseComponent'


export default class Wrapper extends Component {

    state = {
        cities: [
            {},
            { name: 'Almaty' },
            { name: 'Karganda' },
            { name: 'Pavlodar' },
            { name: 'Jezkazgan' },
            { name: 'Taraz' },
            { name: 'Astana' }
        ],
        idx: 0,
        choiced: false
    };

    cityToggleParent = () => {
        this.setState({
            choiced: true
        })
    };

    indexCity = (value) => {
        this.setState({
            idx: value,
            choiced: false
        })
    };

    // deleteCityParent = (i) => {
    //     let nCities = [...this.state.cities];
    //    nCities =  nCities[i]
    //     this.setState({
    //      nCities : null
    //     })
    
    //     console.log('delete')
    // }
    deleteCityParent(e, idx){
           e.preventDefault();
        let newCity = [...this.state.cities]
        newCity = newCity[idx]
    
       this.setState({
        newCity : null
       })
        // this.refs.form.reset();
    }
    //delete, need index element, when event, -> delete -> delete this city
  
    render() {
        return (
            <div>  <label > Destination</label>
                <div className="wrapper">
                    <BaseComponent
                        cityToggle={this.cityToggleParent}
                        city={this.state.cities}
                        getIndex={this.indexCity}
                        idx={this.state.idx}
                        choiced={this.state.choiced}
                        deleteItem={this.deleteCityParent}
                     
                    />

                </div>
                <button> search</button>
            </div>
        )
    }
}
// input, and dropdown -> one storage get data, when click -> Delete, delete city, when chenge value input - get city name

//last elements, history