import React,{useState,useEffect} from "react";
import axios from "axios";
import "./Body.css"

export default function Body(){
    const[city,setCity]=useState();
    const[weather,setWeather]=useState(null);
    const[loading,setLoading]=useState(true);

        useEffect(()=>
        {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=543df1d5f4f30617cd0ec04ebf263bc7`;
            fetch(url)
            .then((res)=>res.json())
            .then(
            (data)=>{
            setWeather(data);
            setLoading(false);
            })
            .catch((err)=>
            {
                console.log("Error in weather api");
                setLoading(false);
            }
            );
        },[city]);


        if(loading)
        {
            return(<p>Loading...</p>); 
        }


    return(
        <>
        <div  id="search">
            <input id="ip"
            className="text-primary-emphasis"
            type="text"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            placeholder="Enter City Name"
         />
        </div>
        <div>
            {
                weather && weather.main && city?
                (
                    <div className="container">
                        <div className="content">
                            <p className="text-light">Weather: {weather.weather[0].main}</p>
                            <p className="text-light">Description: {weather.weather[0].description}</p>
                            <p className="text-light">Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C</p>
                            <p className="text-light">Feels Like: {(weather.main.feels_like - 273.15).toFixed(2)} °C</p>
                            <p className="text-light">Humidity: {weather.main.humidity}%</p>
                        </div>

                        <div className="right">
                            <p id="city">{weather.name}</p>
                        </div>
                    </div>
                ):(
                    <p className="content text-light first">Data can't be accessed or Invalid input</p>
                )
            }
        </div>
        </>
    );
}