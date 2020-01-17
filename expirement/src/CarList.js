import React from 'react';
import Car from './Car'

const CarList = props => {

    return (
     
        <div>
            
            <button onClick={props.onChangeTitle("New title")}>Click</button>
            <button onClick={props.onChangeStyle}>Style</button>
            <button onClick={props.onChangeTest}> test</button>
            
            {/* <button onClick = {props.onChangeCars} > car val change </button> */}
            {props.carsC.map(   (carL, index) => <Car key={index} car={carL}
            
            />)}
        </div>

    )
}
export default CarList