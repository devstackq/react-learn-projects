import React from "react";

const ListData = props => {
  return (
    <div className=" list-c">
      <ul className="list-group scroll">
        <li
          className={"list-group-item act"}
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
