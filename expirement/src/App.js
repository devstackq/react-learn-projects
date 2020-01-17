import React, { Component } from "react";

import Car from "./Car";
import "./App.css";
class App extends Component {
  
  state = {
    cars: [
      { name: "Jiguli", year: 1987 },
      { name: "Mazda", year: 2090 },
      { name: "Opel", year: 1783 }
    ],
    pageTitle: "Hello People",
    classStyle: "",
    flag: false
  };


  changeTitleParent = value => {
    this.setState({
      pageTitle: value
    });
  };
  changeStyleParent = value => {
    this.setState({
      classStyle: value
    });
  };
  // changeSomethingParent = value => {
  //   this.setState({
  //     flag : value
  //   })
  // }
  changeSomethingParent = () => {
    this.setState({
      flag: !this.state.flag
    })
  }

  render() {
    // take value from state
    //  const carz = this.state.cars;
    return (
      <div>
        {/* //show */}
        <h2 className={this.state.classStyle}> {this.state.pageTitle}</h2>
        {this.state.flag ? "flag true" : "false"}
        {/*<button onClick={this.changeTitleHandler}>knopka blya</button>
        <p>год производтсва : {this.state.cars[0].year}</p>
        <p>модель : {this.state.cars[0].name}</p> */}

        <Car
          name={this.state.cars[0].name}
          year={this.state.cars[0].year}
          onChangeTitle={() => this.changeTitleParent("Changed Title Value")}
          onChangeStyle={() => this.changeStyleParent("header")}
          onChangeTest={() => this.changeSomethingParent(true)}
        />
      </div>
    );
  }
}

export default App;
