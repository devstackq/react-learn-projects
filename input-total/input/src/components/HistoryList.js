import React from "react";
import HistCity from "./HistCity";

const HistoryList = props => {
  return (
    <div>
      {props.historyCity.map((city, index) => (
        <HistCity
          key={index}
          id={index}
          historyCity={city}
          showList={props.showList}
          deleteHisCity={props.deleteHisCity}
        />
      ))}
    </div>
  );
};

export default HistoryList;
