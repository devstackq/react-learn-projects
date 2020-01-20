import React from "react";

export default props => (

    <div>
        {/* {props.flag ? <p>trues</p> : "false"} */}
        <h3>Сar name: {props.name}</h3>
        <p>
            Year: <strong>{props.year}</strong>
        </p>
        <button onClick={props.onChangeTitle}>Click</button>
        <button onClick={props.onChangeStyle}>Style</button>
        <button onClick={props.onChangeTest}> test</button>
    </div >
    
);


