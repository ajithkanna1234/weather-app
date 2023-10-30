import React,{useState} from "react";
import "./App.css";
import Home from "./Components/Home";
import Output from "./Components/Output";
import axios from "axios"
function App() {
  const [db, setDb] = useState("");
  const [Temp, setTemp] = useState("");
  const [Desc, setDesc] = useState("");
  const [Icon, setIcon] = useState("");
  const [time,setTime] = useState("")
  const Weather = async () => {
    try {
      const apikey = "20464ac5abd01983db7b27019575f34c";
      const unit = "metric";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${db}&appid=${apikey}&units=${unit}`;
      const response = await axios.get(url);
      // console.log(response)
      const tempurature = await response.data.main.temp;
      const time = await response.data.timezone;
      const weatherDetails = await response.data.weather[0].description;
      // const icon = await response.data.weather[0].icon;
      // const imgUrl = `https://api.openweathermap.org/img/wn/${icon}@2x.png`;
      setTemp(tempurature);
      setDesc(weatherDetails);
      // setIcon(imgUrl);
      setTime(time)
      setDb("")
    } catch (err) {
      alert("Please Enter the City Name Correctly");
    }
  };
  return( <>
  {Temp === "" ? <Home db={db} setDb={setDb} Weather={Weather} /> : (<Output Temp={Temp} Desc={Desc} Icon={Icon} setTemp={setTemp} time={time} />)}
  </>)
}

export default App;
