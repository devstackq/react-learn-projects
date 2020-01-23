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
    indexDel: 0,
    choiced: false,
    deleted: false,
    show: false,
    showList: false,
    cityClose: false
  };

  cityToggleParent = () => {
    this.setState({
      choiced: !this.state.choiced
    });
  };

  indexCityParent = idx => {
    let citiesHis = [...this.state.historyCity];
    citiesHis.unshift(this.state.cities[idx]);
    this.setState({
      historyCity: citiesHis,
      indexDel: idx,
      choiced: !this.state.choiced,
      show: true,
      showList: false
    });

    console.log("history", this.state.historyCity);
  };

  deleteCityParent = e => {
    e.preventDefault();
    this.setState({
      indexDel: 0,
      deleted: true,
      show: false
    });
  };

  deleteHisCityParent = id => {
    let deletedCity = [...this.state.historyCity];
    deletedCity.splice(id, 1);
    //console.log(deletedCity, "deleted", id, "income id");
    this.setState({ historyCity: deletedCity });
    console.log("delete city", id);
    //  console.log("deleted cities", this.state.historyCity);
  };

  inputChangeParent = value => {
    this.setState({
      input: value
    });
  };

  inputClickParent = () => {
    this.setState({
      showList: !this.state.showList,
      cityClose: true
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
            cities={this.state.cities}
            idxD={this.state.indexDel}
            choiced={this.state.choiced}
            deleted={this.state.deleted}
            show={this.state.show}
            historyCity={this.state.historyCity}
            inputClick={this.inputClickParent}
            showList={this.state.showList}
            cityClose={this.state.cityClose}
            deleteHisCity={this.deleteHisCityParent}
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
