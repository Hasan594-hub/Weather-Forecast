import React, { useEffect, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const[city, setCity] = useState("Hyderabad");
  const[weather, setWeather] = useState();

  const API_KEY = "3c22c796e1e97bbf0bddc5a941d1123c";

  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    setWeather(data);
  };

  useEffect(() => {getWeather()},[]);

  return (
    <div className="container-fluid text-center main-bg ">
      <div className="heading h1 p-5 text-danger"> Weather Report</div>
      <div className="text ">   
        <label><b>Enter your City : </b></label>
        <input className="int ms-3 text-secondery bg-info" type="text" value={city} placeholder="Enter your City" onChange={(e) => {setCity(e.target.value)}}></input>
        <button className="btn btn-light rounded-pill ms-3 " type="submit" onClick={getWeather}>Search</button>
      </div>  <br/>

      {
        weather && (
          <div className="weather-box mt-3">
            <h2> {weather.name}</h2>

            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />

          <h2> Temparature : {weather.main.temp} °C</h2>
          <h4> Humidity : {weather.main.humidity} %</h4>
          <h4>   {weather.weather[0].description}</h4>

          </div>
        )
      }
    </div>
  );

}
export default App;