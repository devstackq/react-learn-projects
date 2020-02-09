import React  from 'react'

 const  Question = props => {


    return (
    <div>
            <h2>Audio player</h2>
         <audio src= {props.random} controls autoPlay/>
    </div>
    )
}

export default Question