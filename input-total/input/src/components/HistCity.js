import React from "react";

const City = props => {
  return (
    <div>
      <div className="col-sm-2 list-c">
        <ul className="list-group cityList">
          <span className={"pseudo-list act "} key={props.index}>
            {props.historyCity.name}
          </span>
        </ul>
      </div>

      <button
        className={"show btn-del-cityDelList"}
        onClick={() => props.deleteHisCity(props.id)}
      >
        x
      </button>
    </div>
  );
};

export default City;
