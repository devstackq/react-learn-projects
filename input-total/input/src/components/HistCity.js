import React from "react";

const City = props => {
  return (
    <div>
      <div className="col-sm-2 list-c">
        <ul className="list-group cityList">
          <li
            className={"list-group-item "}
            key={props.index}
          >
            {props.historyCity.name}
          </li>
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
