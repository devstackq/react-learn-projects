import React, { Component } from "react";
import BaseComponent from "./BaseComponent";
import ReactDOM from "react-dom";

class Wrapper extends Component {
  state = {
    cities: [
      {},
      { name: "Almaty" },
      { name: "Astana" },
      { name: "Jezkazgan" },
      { name: "Pavlodar" },
      { name: "Shymkent" },
      { name: "Taraz" },
      { name: "Uralsk" }
    ],
    historyCity: [],
    index: 0,
    choiced: false,
    show: false,
    showList: false,
    lenCity: false
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        showList: false,
        choiced: false
      });
    }
  };

  //city choice - Dropdown -> choice city -> flag true
  choicedCityParent = () => {
    this.setState({
      choiced: !this.state.choiced,
      showList: false
    });
  };

  //1 unshift value from cities to histCity,
  // 2 show value by index - take -> ListCity, and update-> in Input component
  //3 change choiced flag, true, false, - ListCity hidden
  // 4 show flag true, -> for button delete inside Input component
  //5 filter unique value
  indexCityParent = idx => {
    // let cities = [...this.state.cities];
    // let takecity = cities.find((city, index) => index == idx);
    // console.log(takecity, "take find");

    //if such a city is repeated, it will return only 1 of the same city
    //  filter out each repetitive value using
    //  filter function and pass the unique callback to each array item.
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };

    let citiesHistory = [...this.state.historyCity];
    citiesHistory.unshift(this.state.cities[idx]);
    let city = citiesHistory.filter(unique);
    //console.log(city, "unique city");
    this.setState({
      historyCity: city,
      index: idx,
      choiced: false,
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
  deleteHistoryCityParent = id => {
    let deletedCity = [...this.state.historyCity];
    deletedCity.splice(id, 1);
    this.setState({ historyCity: deletedCity });
    console.log("delete city id", id, "deleted city value ", deletedCity);
  };

  //value input - onChange
  setInputValueParent = value => {
    this.setState({
      input: value
    });
  };

  // show or close  history cities
  showHistoryListParent = () => {
    this.setState({
      showList: !this.state.showList,
      choiced: false
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
            inputChange={this.setInputValueParent}
            cities={this.state.cities}
            index={this.state.index}
            choiced={this.state.choiced}
            show={this.state.show}
            historyCity={this.state.historyCity}
            histListShow={this.showHistoryListParent}
            showList={this.state.showList}
            deleteHisCity={this.deleteHistoryCityParent}
          />
        </div>
      </div>
    );
  }
}

export default Wrapper;
