import React from "react";
import ListData from "./ListData";

const List = props => {
  return (
    <div>
      {props.city.map((c, index) => (
        <ListData
          key={index}
          id={index}
          city={c}
          getIndex={props.getIndex}
          choiced={props.choiced}
          // changeChoice={()=>props.changeChoice()}
          //remove click func
        />
      ))}
    </div>
  );
};

export default List;
