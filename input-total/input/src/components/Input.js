import React from "react";

//class Input extends React.Component {
const Input = props => {
  return (
    <div className=" input-group">
      <div className="input-group-prepend">
        <input
          className=" form-control inp"
          name="city"
          type="text"
          defaultValue={props.city[props.idxD].name}
          //onChange={e => props.inputChange(e.target.value)}
          onClick={() => props.histListShow()}
        />
        <button
          onClick={() => props.cityToggle()}
          type="button"
          className="btn btn-outline dropdown-toggle"
        ></button>
      </div>
      <button
        className={props.show ? "show btn-del" : "hidden"}
        onClick={e => props.deleteCity(e)}
        //onClick={e => props.deleteCity(e, props.idxD, null)}
      >
        x
      </button>
      {console.log(props.idxD, "index choiced city")}
    </div>
  );
};

export default Input;
