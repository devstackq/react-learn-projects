import React from "react";
import List from "./List";
import Input from "./Input";
import HistoryList from "./HistoryList";

const BaseComponent = props => {
  return (
    <div className="pos">
      <div className="form-inline">
        <label className="col-sm-3 col-form-label"> Destination</label>
        <Input
          city={props.cities}
          idxD={props.idxD}
          deleteItem={props.deleteItem}
          inputChange={props.inputChange}
          choiced={props.choiced}
          deleted={props.deleted}
          show={props.show}
          cityToggle={props.cityToggle}
          inputClick={props.inputClick}
        />

        <i
          className="fa fa-search  btn btn-primary btn-search"
          aria-hidden="true"
        ></i>

        {/* <span className="arrow" onClick={() => props.cityToggle()}>V</span> */}
      </div>
      <div className={props.showList ? "show" : "hidden"}>
        <HistoryList
          historyCity={props.historyCity}
          choiced={props.choiced}
          deleteItem={props.deleteItem}
          deleted={props.deleted}
          showList={props.showList}
          cityClose={props.cityClose}
          deleteHisCity={props.deleteHisCity}
        />
        {console.log("work")}
      </div>
      <div>
        {/* // 1 ch F, arrow -> ch T, -> show, 2 choiceCity(idx) - choiced F  -> hidden*/}
        <div className={props.choiced ? "show" : "hidden"}>
          <List
            cities={props.cities}
            getIndex={props.getIndex}
            choiced={props.choiced}
          />

          {console.log("index", props.idxD)}
          {console.log("choice", props.choiced)}
        </div>
      </div>
    </div>
  );
};

export default BaseComponent;
