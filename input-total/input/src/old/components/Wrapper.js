import React, { Component } from 'react'
import BaseComponent from './BaseComponent'

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="form-row">
                    <label className="l">Destination</label>
                    <div> <BaseComponent /></div>
                </div>
            </div>
        )
    }
}
export default Wrapper