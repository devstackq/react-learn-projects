import React from "react";

const ListData = props => {
  return (
    <div className=" col-sm-2  list-c">
      <ul className="list-group cityList">
        <span
          className={"pseudo-list act"}
          key={props.index}
          onClick={() => props.getIndex(props.id)}
        >
          {props.city.name}
        </span>
      </ul>
    </div>
  );
};

export default ListData;
