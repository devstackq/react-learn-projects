import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "d9e3288f4db41de03dd27fb945e95977";

// (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

// api.openweathermap.org/data/2.5/weather?q=Almaty,kz&APPID=d9e3288f4db41de03dd27fb945e95977
class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  // 1 form input values, 2 send api, 3 take json data and setState values, 4 send values state and render Weather comp
  // Form, input enter value, city and country, when onSubmit, data -> come
  // Parent component take value, and start getWeather func, -> send city, country API server
  // then, get json Data() -> new Data, about city, save setState,
  //then state data -> send Weather component and render


  //when are functions used, Parent and Child function?
  getWeatherP = async (e) => {
    e.preventDefault();
    // input data, child comp, when onSubmit
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);

    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Form
          getWeather={this.getWeatherP}
        />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;