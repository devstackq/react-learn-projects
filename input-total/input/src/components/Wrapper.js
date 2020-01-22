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
    idx: 0,
    choiced: false,
    deleted: false,
    show: false
  };

  cityToggleParent = () => {
    this.setState({
      choiced: !this.state.choiced
    });
  };
  // let newCity = [...this.state.cities]
  // newCity[0].name = value
  // let nf = this.state.fakeInput
  // nf[0].name = value
  indexCityParent = value => {
    let citiesHis = this.state.historyCity;
    citiesHis.push(this.state.cities[value]);
    this.setState({
      historyCity: citiesHis,
      idx: value,
      choiced: !this.state.choiced,
      show: true
    });

    console.log("history", this.state.historyCity);
  };

  deleteCityParent = e => {
    e.preventDefault();
    this.setState({
      idx: 0,
      deleted: true,
      show: false
    });
  };

  inputChangeParent = value => {
    this.setState({
      input: value
    });
  };


  //delete, need index element, when event, -> delete -> delete this city

  render() {
    return (
      <div>
        <div>
          <BaseComponent
            cityToggle={this.cityToggleParent}
            getIndex={this.indexCityParent}
            deleteItem={this.deleteCityParent}
            inputChange={this.inputChangeParent}
            city={this.state.cities}
            idx={this.state.idx}
            choiced={this.state.choiced}
            deleted={this.state.deleted}
            show={this.state.show}
       
          />
        </div>
        <div className="input-group-append"></div>
      </div>
    );
  }
}
// input, and dropdown -> one storage get data, when click -> Delete, delete city, when chenge value input - get city name
//last elements, history

export default Wrapper;
