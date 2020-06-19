import React from 'react';

let location;

const Form = (props) => {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPlace, showError);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        alert('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        alert('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        alert('An unknown error occurred.');
        break;
      default:
        break;
    }
  }

  async function getPlace(position) {
    var api_url = `https://api.opencagedata.com/geocode/v1/json?key=1655167da4db46dca7c1dad70eb55fe7&q=${position.coords.latitude},${position.coords.longitude}&pretty=1&no_annotations=1`;
    let res = await fetch(api_url);
    let result = await res.json();
    console.log(result);
    location = result.results[0].components.state;
    props.onLocation(location);
  }
  function sendLocation() {
    getLocation();
  }
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <form className="form-inline">
            <label htmlFor="location">Enter City</label>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              id="location"
              placeholder="City"
            />
            <button
              type="button"
              className="btn btn-warning mb-2 mx-3"
              onClick={() => {
                props.onLocation(document.querySelector('input').value);
              }}
            >
              Submit
            </button>
            <span>or</span>
            <button
              type="button"
              className="btn btn-warning mb-2 ml-3"
              onClick={sendLocation}
            >
              Use My Location <ion-icon name="pin"></ion-icon>
            </button>
          </form>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </React.Fragment>
  );
};

export default Form;
