import { useState,useEffect } from "react";
import "./weather.css"
export const CityComponent=()=>{
    const [current,setcurrent]=useState([]);
    const [temp,settemp]=useState([]);
    const [forecast,setforecast]=useState([])
    useEffect(()=>{
        getData()
      },[])
    
      const getData=async ()=>{
        const res=await fetch("http://localhost:8000/query");
        const result=await res.json();
        setcurrent(result.results.channel.item)
        settemp(result.results.channel.item.condition)
        setforecast(result.results.channel.item.forecast[0])
        console.log(result.results.channel)
    
      }
    return (
        <div style={{width:"60%",height:"400px",margin:"auto",border:"2px solid black",
        margintop:"20px",textAlign:"center",backgroundColor:"#083d69",color:"white"}}>
            <h2>{current.title}</h2>
            <h4>Today Temperature : {temp.temp}</h4>
            <h4>{temp.text}</h4>
            <h4>Day : {forecast.high}  , Night:{forecast.low}</h4>
        </div>
    )
}