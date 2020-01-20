import React, { Component } from 'react'

const Input = props => {

  const   handleChange = (e) => {
        this.setState({ valueInput: e.target.value, changed: true });

    }


    const deleteHandler = value => {
        this.setState({
            valueInput: ''
        })
    }
    return (
        <div>
            <input name="props.cities" />

        </div>
    )
}


export default Input