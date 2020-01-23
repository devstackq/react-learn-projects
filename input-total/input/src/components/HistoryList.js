import React from "react";
import City from "./City";

const HistoryList = props => {
  return (
    <div>
      {props.historyCity.map((c, index) => (
        <City
          key={index}
          id={index}
          historyCity={c}
           //  getIndex={props.getIndex}
          //   choiced={props.choiced}
          showList={props.showList}
          deleteHisCity={props.deleteHisCity}
          cityClose={props.cityClose}
          // changeChoice={()=>props.changeChoice()}
          //remove click func
        />
      ))}
           {/* <button
        className={props.cityClose ? "show btn-del-cityDelList" : "hidden"}
        onClick={() => props.deleteHisCity( props.id)}
      >
        x
      </button> */}
    </div>
  );
};

export default HistoryList;
