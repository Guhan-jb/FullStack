import { useLocation } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useState } from "react";
function Result()
{
    const loc=useLocation();
    const model=loc.state.car
    const baseURL="http://localhost:8080/api/Vehicles"
  const [cars,setCars]=useState('')
  React.useEffect(() => {
    axios.get(`${baseURL}/bymodel`,(model)).then((response) => {
      setCars(response.data);
    });
  }, []);
  console.log(cars);
    return(
        <div className="container">
    <ul className="list-group">
      {cars.map((obj)=>(
          <li key={obj.vehicleid} className="list-group-item">
             model:{obj. model}<br />
            manufacturer:{obj.manufacturer}<br />
            launchdate:{obj.launchdate}<br />
            price:{obj.price}<br />
          </li>
        ))
      }
    </ul>
    </div>
    )

}
export default Result;