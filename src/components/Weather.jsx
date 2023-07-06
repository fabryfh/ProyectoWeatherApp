import { useState, useEffect } from "react";
import axios from "axios";
import DarkMode from "./DarkMode";


const Weather = () => {

    const [info, setInfo] = useState({});
    const [inputValue, setInputValue] = useState("")
    const [metric, setMetric] = useState(true)
    const tempToCelcius = Math.round(info.main?.temp - 273.15)


    const icons = {
      "01d": "/img/01d.svg",
      "02d": "/img/02d.svg",
      "03d": "/img/03d.svg",
      "04d": "/img/04d.svg",
      "09d": "/img/09d.svg",
      "10d": "/img/10d.svg",
      "11d": "/img/11d.svg",
      "13d": "/img/13d.svg",
      "50d": "/img/50d.svg",
      "01n": "/img/01n.svg",
      "02n": "/img/02n.svg",
      "03n": "/img/03n.svg",
      "04n": "/img/04n.svg",
      "09n": "/img/09n.svg",
      "10n": "/img/10n.svg",
      "11n": "/img/11n.svg",
      "13n": "/img/13n.svg",
      "50n": "/img/50n.svg"
    }
    
    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     console.log({city})
    //     if(city === "" || !city)}
    
    useEffect( () => {


    navigator.geolocation.getCurrentPosition((position) => {

     
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=ea557e48710175d4995928275dc628fb&lang=sp`)

      .then( resp => setInfo(resp.data))
      
      .catch( error => console.error(error))

        console.log(info.name)

      // axios
      // .get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=ea557e48710175d4995928275dc628fb&lang=sp`)
      // .then( resp => setInfo(resp.data))
      // .catch( error => console.error(error))

      // // || info.name 
      }, )
      
  }, [inputValue])

  console.log(info)


  return (
    
    

    <section className="father-container">

        <div className="weather-title">

            <h1 className="child1">Weather app</h1>


            <input type="Search" className="child2" placeholder="Busca una ciudad"onChange={(e) => setInputValue(e.target.value)} />
            

            <button className="child3" onClick={ () => DarkMode()}><i class='bx bx-sun bx-md'></i> </button>
        </div>

        <article className="card-container">
          
          <p className="temp-card">{metric ? `${tempToCelcius}°C`: `${Math.round(tempToCelcius * 9/5 + 32)}°F`}</p>
          {/* (info.main?.temp - 273.15).toFixed(0)}° */}
          <div className="header-card">
          <img src={icons[info.weather?.[0].icon]} alt="" className="icon-responsive"/>
          </div>
       

        <div className="main-card">
          <p>Viento: {info.wind?.speed}m/s</p>
          <p>Nubes: {info.clouds?.all}%</p>
          <p className="temp-lists">
             {/* <p>Temperaturas:</p> */}
            <ul className="temp-list-2">
            <li>
            Temp max:{metric ? `${tempToCelcius}°C`: `${Math.round(tempToCelcius * 9/5 + 32)}°F`}
            </li>
            <li>
          Temp min:{metric ? `${tempToCelcius}°C`: `${Math.round(tempToCelcius * 9/5 + 32)}°F`}
            </li>
            </ul>
          </p>
        <div className="footer-card">
          <p>{info.name}, {info.sys?.country}</p>
        </div>
        </div>
        <div className="footer-card-2">
          <p>{info.weather?.[0].description}</p>
        </div>
        </article>

        <div className="footer">
        <button className="footer-button" onClick={() => setMetric(!metric)}>{metric ? 'Cambiar grados °F' : 'Cambiar grados °C'}</button>
        </div>
        <br />
        <div>
          <p className="author">
            - Fabrizzio Heredia -
          </p>
        </div>
    </section>
        
   
  )


}

export default Weather
