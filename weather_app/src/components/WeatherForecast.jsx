import "./weather.css";
import { useEffect } from 'react';
import { useState } from 'react'

export const WeatherForecast=()=>{

    const [data,setData]=useState([]);
    const [location,setlocation]=useState("");
    const [atmospher,setatmospher]=useState("");
    const [astronomy,setastronomy]=useState("");
    const [condition,setcondition]=useState("")
  useEffect(()=>{
    getData()
  },[])

  const getData=async ()=>{
    const res=await fetch("http://localhost:8000/query");
    const result=await res.json();
    setlocation(result.results.channel.location)
    setatmospher(result.results.channel.atmosphere)
    setastronomy(result.results.channel.astronomy)
    setcondition(result.results.channel.item.condition)
    console.log(result.results.channel)

  }
    return (
        <div >
            <div style={{width:"60%",height:"600px",margin:"auto",border:"2px solid black",
        margintop:"20px",textAlign:"center",backgroundColor:"#083d69",color:"white"}}>
                <div className="location">
                    <h2>Weather today in {location.city} ,{location.country} ,{location.region}</h2>
                </div>
                <div><h3>Temperature :{condition.temp}</h3></div>
                <div className="atmosphere-div" style={{display:"grid",gridtempelatecolumn:"auto auto"}}>
                <div><h3>Humidity:{atmospher.humidity}</h3></div>
                <div><h3>pressure:{atmospher.pressure}</h3></div>
                <div><h3>Visiblity:{atmospher.visibility}</h3></div>
                <div><h3>Sunrise :{astronomy.sunrise}</h3></div>
                <div><h3>Sunset:{astronomy.sunset}</h3></div>
                </div>
                
            </div>
        </div>
    )
}