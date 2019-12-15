import React, { Component } from 'react';
import MainComponent from './Components/MainComponent'

class App extends Component {

  state={
    weather_resp:"",
    country:"",
    city:"",
    unit: '℃'
  }


async handleLocation(location){
  console.log(location);
  
    let response = await (await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`)).json()
    let woeid = response[0].woeid
    let result = await (await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)).json()
    let weather_resp=result.consolidated_weather[0]
    let country=result.parent.title
    let city=result.title;
    let riseTime=result.sun_rise 
    let setTime=result.sun_set 
   await this.setState({
      weather_resp,
      country,
      city,
      riseTime,
      setTime
    }) 
  console.log(this.state)
}

handleUnit=(unit)=>{
  this.setState({
    unit
  })
}


  render() {
    return (
      <div className="App">
       <MainComponent onLocation={this.handleLocation.bind(this)}
       onUnitChange={this.handleUnit}
       city={this.state.city}
       country={this.state.country}
       unit={this.state.unit}
       weather={this.state.weather_resp}
       rise={this.state.riseTime}
       set={this.state.setTime}
       />
      </div>
    );
  }
}

export default App;
