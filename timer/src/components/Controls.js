import React from 'react'

const Controls = props => (

    <div>
        {
            props.status !== 'started' && 
            <button
            disabled = {!props.canStart}
            onClick = {props.startTimer} >
                start
            </button>
        }
        {
            props.status === 'started' &&
            <button
            onClick={props.stopTimer} >
                stop
            </button>
        }
        {
            <button onClick={props.resetTimer}>
                reset
            </button>
        }
    </div>
)

export default Controls