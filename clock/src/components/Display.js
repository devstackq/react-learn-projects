import React, { Component } from 'react'
import DateTime from '../libs/DateTime'

const Display = (props) => (
    // time component - show time
    //object style property
// class, method  toTimeString, toDateString, getDate, getTime
    <div>
        <div>
        <span>Simple clock</span>
        <div>{DateTime.toTimeString(props.time)}</div>
            {<div>{DateTime.toDateString(props.time)}</div>}
        </div>
    </div>
)

export default Display