import React from "react";
import City from "./City";

const ListCity = props => {
  return (
    <div>
      {props.cities.map((city, index) => (
        <City
          key={index}
          id={index}
          city={city}
          getIndex={props.getIndex}
          choiced={props.choiced}
        />
      ))}
    </div>
  );
};

export default ListCity;
