import React, { Component } from "react";
import BaseComponent from "./BaseComponent";

class Wrapper extends Component {
  state = {
    cities: [
      { name: "" },
      { name: "Almaty" },
      { name: "Karganda" },
      { name: "Pavlodar" },
      { name: "Jezkazgan" },
      { name: "Taraz" },
      { name: "Astana" }
    ],
    historyCity: [],
    index: 0,
    choiced: false,
    show: false,
    showList: false
  };

  //city choice - Dropdown -> choice city -> flag true
  choicedCityParent = () => {
    this.setState({
      choiced: !this.state.choiced
    });
  };

  //1 unshift value from cities to histCity,
  // 2 show value by idx -> in Input component
  //3change choiced flag, true, false, - ListCity hidden
  // 4show flag true, -> for button delete inside Input component
  //
  indexCityParent = idx => {
    let citiesHis = [...this.state.historyCity];
    citiesHis.unshift(this.state.cities[idx]);
    this.setState({
      historyCity: citiesHis,
      index: idx,
      choiced: !this.state.choiced,
      show: true
    });
    // console.log("history", this.state.citiesHis);
  };

  // delete city, Input component,  btn delete hidden, change index obj -> put 0 index obj cities[]
  deleteCityParent = e => {
    e.preventDefault();
    this.setState({
      index: 0,
      show: false
    });
  };

  //delete history each city by Id,
  deleteHisCityParent = id => {
    let deletedCity = [...this.state.historyCity];
    deletedCity.splice(id, 1);
    this.setState({ historyCity: deletedCity });
    console.log("delete city id", id, "deleted city value ", deletedCity);
  };

  //value input - onChange
  inputValueParent = value => {
    this.setState({
      input: value
    });
  };

  // show or close  history cities
  showHistoryListParent = () => {
    this.setState({
      showList: !this.state.showList
    });
  };

  render() {
    return (
      <div>
        <div>
          <BaseComponent
            cityToggle={this.choicedCityParent}
            getIndex={this.indexCityParent}
            deleteCity={this.deleteCityParent}
            inputChange={this.inputValueParent}
            cities={this.state.cities}
            idxD={this.state.index}
            choiced={this.state.choiced}
            show={this.state.show}
            historyCity={this.state.historyCity}
            histListShow={this.showHistoryListParent}
            showList={this.state.showList}
            deleteHisCity={this.deleteHisCityParent}
          />
        </div>
      </div>
    );
  }
}

export default Wrapper;
