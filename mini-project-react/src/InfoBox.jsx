import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function InfoBox ({info}) {


   const HOT_URL = "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.jpg?s=612x612&w=0&k=20&c=LZ7sfm389_hzzeZJw2IOh3lcIgEKcs9hQm8M1suJbGg=";
   const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const RAIN_URL = "https://images.unsplash.com/photo-1511634829096-045a111727eb?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.temp < 15 ? COLD_URL: (info.humidity > 50) ? HOT_URL : RAIN_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} {info.temp < 15 ? < AcUnitIcon/>: (info.humidity > 50) ? <WbSunnyIcon/> : <BeachAccessIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Tempature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp  = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather} and feels like {info.feelsLike}</i></p>

        </Typography>
      </CardContent>
      
    </Card>
        </div>
        </div>
    );
}