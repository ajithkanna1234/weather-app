import React, { useState, useEffect } from "react";
import "./Output.css";
import clouds from "../assets/clouds.mp4";
import { Button } from "primereact/button";

function Output({ Temp, Desc, Icon, setTemp }) {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  function getCurrentTime() {
    const date = new Date();
    return `${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()}:${date.getSeconds()}`;
  }

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()}`;
  };

  const getCurrentDay = () => {
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
  };

  return (
    <div className="o">
      <video src={clouds} loop autoPlay muted />
      <div className="ob">
        <h1>Weather Report</h1>
        <h3>{getCurrentDay()}</h3>
        <h5 style={{ color: "white" }}>Date : <span>{getCurrentDate()}</span> | Time : <span>{currentTime}</span></h5>
        <table className="table">
          <tr>
            <th>Temperature</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>
              {Temp} <i className="fa-solid fa-temperature-full"></i>
            </td>
            <td>
              {Desc} <i className="fa-solid fa-cloud"></i>
            </td>
          </tr>
        </table>
        <Button
          icon="pi pi-backward"
          outlined
          raised
          onClick={() => {
            setTemp("");
          }}
        />
      </div>
    </div>
  );
}

export default Output;
