import React from 'react';
const Weather = (props) => {
    let maxTemp,minTemp;
    if(props.unit==='℃')
        {
            maxTemp=props.maxTemp;
            minTemp=props.minTemp;
        }
    else{
        minTemp = Math.round((props.minTemp * 1.8) + 32);
        maxTemp = Math.round((props.maxTemp * 1.8) + 32);
    }

    return (
        <React.Fragment>
            <div className="mainComp mt-4">
                <div className="holders">
                        <span className="maxTemp"><ion-icon name="trending-up"></ion-icon> {maxTemp}°</span>
                        <span className="minTemp"><ion-icon name="trending-down"></ion-icon>{minTemp}°</span>
                </div>
                <div className="holders">
                        <span className="windSpeed"><ion-icon name="flag"></ion-icon>{props.wind}mph</span>  
                </div>
                <div className="holders">
                        <span className="humidity"><ion-icon name="water"></ion-icon>{props.humidity} %</span>  
                </div>
            </div>
        </React.Fragment>
      );
}
 
export default Weather;