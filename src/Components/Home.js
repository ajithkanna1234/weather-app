import React from "react";
import "./Home.css";
import { Card } from "primereact/card";
import clouds from "../assets/clouds.mp4";
import image from "../images/globe.gif";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
function Home({ db, setDb,Weather }) {
//----------getting input value------------
  const getInput = (e) => {
    setDb(e.target.value);
  };
//----------search btn click --------------
  const handleClick = (e) => {
    e.preventDefault();
    Weather()
  }
  return (
    <div className="bg">
      <div className="card flex justify-content-center align-items-center gap-2">
        <video src={clouds} loop autoPlay muted />
        <Card id="card" title="My Weather App" subTitle="primeReact">
          <img src={image} alt="icon" />
          <form>
            <span className="p-float-label">
              <InputText id="In" onChange={getInput} value={db} />
              <Button icon="pi pi-search" type="submit" onClick={handleClick} outlined/>
              <label>Enter City Name</label>
            </span>
          </form>
        </Card>
      </div>
    </div>

    
  );
}

export default Home;
