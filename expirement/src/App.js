import React, { Component } from "react";
import CarList from './CarList'
//import Car from "./Car";
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
    flag: true,
    inputData: ""
  };

  //   changeCarsValueP = (value) => {
  //     this.setState(prevState => ({
  //         cars: {
  //             ...prevState.cars,
  //             [prevState.cars[1].name]: value,
  //         },
  //     }));
  // };

  changeCarsValueP = (value, i) => {
    let carsN = [...this.state.cars];
    carsN[i].name = value;
    this.setState({
      cars: carsN
    })
  }

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



  handleInput = value => {
    this.setState({
      inputData: value
    });
  }
  changeSomethingParent = () => {
    this.setState({
      flag: !this.state.flag
    })
  }

  render() {
    const styleNew = {
      fontSize: "30px"
    }
    // take value from state
    //  const carz = this.state.cars;
if (this.state.classStyle === "") {
  this.setState({
    classStyle : "header2"
  })
}

    return (
      <div>
        <button onClick={() => this.changeSomethingParent(false)}>   {this.state.flag ? "true" : "false"} </button>
        {/* //show */}

        <h2 className={this.state.classStyle}> {this.state.pageTitle}</h2>


        <br />
        {/* <input onChange={(e) => this.handleInput(e.target.value)} /> */}

        <input onChange={(e) => this.changeCarsValueP(e.target.value, 1)} />

        {/* <p>{this.state.inputData}</p> */}

        <p className={styleNew}>{this.state.cars[1].name}</p>
        {this.state.flag ?
          <CarList
            carsC={this.state.cars}
            onChangeTitle={ ()=>this.changeTitleParent("new title")}
            onChangeStyle={() => this.changeStyleParent("header")}
            onChangeTest={() => this.changeSomethingParent(false)}
          //changeInputData= {() => this.changeInputParen(value)}
          />
          : "close magaz"}

      </div>
    );
  }
}

export default App;
