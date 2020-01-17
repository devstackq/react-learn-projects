import React from "react";

export default props => (

    <div>
        {/* {props.flag ? <p>trues</p> : "false"} */}
        <div key={props._id}>
            <p>Сar name: <strong> {props.car.name} </strong></p>
            <p>
                Year: <strong>{props.car.year}</strong>
            </p>
            <input onChange = {(e)=>props.changeInputData(e.target.value)} /> 
        </div>
    </div >

);


