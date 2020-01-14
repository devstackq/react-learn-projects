import React from 'react'
import Time from '../components/TimeLibs'

const Display = props => {

//get method libs timeLibs, and then use him methods
    const timeL = new Time()

    //change value, inside input data, type number
    const onChange = e => {
        props.onSecondChanged(e.target.value)
      
    }

  
    return (
        <div>
         
        {
            props.status === 'started'
            && <div>
                {/* take args, from Timer, and send value -> libs, method getTime */}
                {timeL.getTime(props.time)}
               
            </div>
        }
        {
            props.status !== 'started' &&
                <div >
            {/* take value, paren comp, and call func libs, getTime, send val -> libs     */}
                    <div> 
                    {timeL.getTime(props.time)}
                    </div>
                <input
                    maxLength="6" value={props.seconds}
                    // send seconds, and func startTimer call(arg)
                    onChange={onChange} />
            </div>
        }
        <div>
                {props.children}
            </div>
    </div>
    )
    
}

export default Display