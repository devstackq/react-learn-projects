import React, { Component } from 'react'

 
const Dropdown = props => {
   //onChange={this.handleChange}
        return (
            <div>
                <label>
                    Destintaion
          <select  value={props.city} >
                        <option value={props.city}>{props.city}</option>
                        {/* <option value="Almaty">Almaty</option>
                        <option value="Karaganda">Karaganda</option>
                        <option value="Shymkent">Shymkent</option>
                        <option value="Shymkent">Aktau</option> */}
                    </select>
                </label>
                <button onClick >x</button>


      
            </div>
        )
    
}
export default Dropdown