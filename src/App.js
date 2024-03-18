import { useEffect, useState } from "react";
import axios from "axios";
import usePosition from ''


const App = () => {
  const [weather,setWeather] = useState();
  const {latitude,longitude} = usePosition();
  const getWeatherData = async (lat,lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    try{   const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    setWeather(data);}
    catch {alert("veri alinirken sorun olustu")}

  
  }


  useEffect(() => {latitude & longitude & getWeatherData(latitude,longitude)}, [latitude,longitude])
  return <div>Hava Ddurumu</div>
}


export default App;