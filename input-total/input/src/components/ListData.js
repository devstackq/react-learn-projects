import React from "react";


const ListData = props => {
  return (
    <div className="col-sm-2 list-c">
      <ul className="list-group ">
        <li
          className={!props.choiced ? "" : "list-group-item act"}
          key={props.index}
          onClick={() => props.getIndex(props.id)}
        >
          {props.city.name}
        </li>
      </ul>
    </div>
  );
};

export default ListData;
