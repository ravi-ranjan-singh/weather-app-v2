import React from 'react';
import Header from './Header';
import Form from './Form';
import Weather from './Weather';
import Time from './Time';
import Data from './Data';
import Choice from './Choice';

const Main = (props) => {
  return (
    <React.Fragment>
      <Choice onUnitChange={props.onUnitChange} unit={props.unit} />
      <div className="container">
        <Header />
        <Form onLocation={props.onLocation} />
        <Data
          city={props.city}
          country={props.country}
          unit={props.unit}
          Temp={Math.round(props.weather.the_temp) || '  '}
          stateName={props.weather.weather_state_name || ' '}
        />
        <Weather
          minTemp={Math.round(props.weather.min_temp) || '  '}
          maxTemp={Math.round(props.weather.max_temp) || '  '}
          wind={Math.round(props.weather.wind_speed) || '  '}
          humidity={props.weather.humidity}
          unit={props.unit}
        />
        <Time rise={props.rise || ''} set={props.set || ''} />
      </div>
    </React.Fragment>
  );
};

export default Main;
