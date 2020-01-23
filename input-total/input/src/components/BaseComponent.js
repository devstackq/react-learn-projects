import React from "react";
import ListCity from "./ListCity";
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
          deleteCity={props.deleteCity}
          inputChange={props.inputChange}
          choiced={props.choiced}
          deleted={props.deleted}
          show={props.show}
          cityToggle={props.cityToggle}
          histListShow={props.histListShow}
        />

        <i
          className="fa fa-search  btn btn-primary btn-search"
          aria-hidden="true"
        ></i>
      </div>
      <div className={props.showList  ? "show" : "hidden"}>
        <HistoryList
          historyCity={props.historyCity}
          choiced={props.choiced}
          deleted={props.deleted}
          showList={props.showList}
          deleteHisCity={props.deleteHisCity}
        />
      </div>
      <div>
        {/* // 1 ch F, arrow -> ch T, -> show, 2 choiceCity(idx) - choiced F  -> hidden*/}
        <div className={props.choiced ? "show " : "hidden"}>
          <ListCity
            cities={props.cities}
            getIndex={props.getIndex}
            choiced={props.choiced}
          />
          {console.log("choice value", props.choiced)}
        </div>
      </div>
    </div>
  );
};

export default BaseComponent;
