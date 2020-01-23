import React from "react";

const City = props => {
  return (
    <div>
      <div className="col-sm-2 list-c">
        <ul className="list-group cityList">
          <li
            className={"list-group-item "}
            key={props.index}
            //  onClick={() => props.getIndex(props.id)}
          >
            {props.historyCity.name}
          </li>
        </ul>
      </div>

      <button
        className={props.cityClose ? "show btn-del-cityDelList" : "hidden"}
        onClick={() => props.deleteHisCity(props.id)}
      >
        x
      </button>
    </div>
  );
};

export default City;
