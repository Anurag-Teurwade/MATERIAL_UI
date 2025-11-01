import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox ({updateInfo}) {

 let [city,setCity] = useState("");
 let [error,setError] = useState(false);

 const API_URL = "https://api.openweathermap.org/data/2.5/weather";
 const API_KEY = "83940863ec02d54f298a53be926008bd";

 let getWeatherInfo = async () => {
   try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
   
      let result = {
       city : city,
       temp : jsonResponse.main.temp,
       tempMin :jsonResponse.main.temp_min,
       tempMax :jsonResponse.main.temp_max,
       humidity : jsonResponse.main.humidity,
       feelsLike : jsonResponse.main.feels_like,
       weather : jsonResponse.weather[0].description,
      }
      
      return result;
   }
   catch (err) {
      throw err;
   }

 }

 let handleChange = (event) => {
    setCity(event.target.value);
 }

 let handleSubmit = async(event) => {
   event.preventDefault();
   setError(false);

   try {
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo); 
      
   } catch (err) {
     setError(true);
   }
    
 }
 
    return(
        <div className='city'>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
             <br></br><br></br>
             <Button variant="contained" type='submit'>Search</Button>
            </form>
            {error && <p style={{color :"#dc1b0f"}}>No such place in our API</p>}
        </div>
    );
}