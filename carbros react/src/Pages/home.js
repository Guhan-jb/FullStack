import sample from "../Assets/bgvideo.mp4";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const location = useLocation();

  let location_name;

  useEffect(() => {
      try {
    
          location_name = location.state.name;
      }
      catch(err) {
    
        location_name = "";
        console.log(`Error : ${err}`);
      }
    // if (location_name === null) 
    //     location_name = "";
  }, [location.state]);

  //   let NAme = () => {
  //     return location.state;
  //   };

  return (
    <>
      <>
        <video className="bg-video" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
        <div className="position-absolute col-12 h-100 d-flex align-items-center justify-content-center h3 text-light">
          <div>
            hi.
            { location_name }
          </div>
        </div>
      </>
    </>
  );
};
export default Home;
