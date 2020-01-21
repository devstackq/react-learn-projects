import React, { Component } from 'react'

const Dropdown = props => {
    //onChange={this.handleChange}

    return (
        <div>
            <label>
                Destintaion
          <select value={props.city.name}>
                    <option value={props.city.name}>{props.city.name}</option>
                </select>
            </label>
            <ul></ul>
            <button onClick >x</button>
        </div>
    )
}
export default Dropdown