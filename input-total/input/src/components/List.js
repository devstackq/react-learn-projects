import React from 'react';
import Input from './Input'
import Dropdown from './DropDown'

const List = props => {
    return (
        <div>
            <Input city = {props.city} />
            <Dropdown city = {props.city} />
        </div>
    )
}

export default List