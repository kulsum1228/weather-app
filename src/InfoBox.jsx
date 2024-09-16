import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    let INIT_URL = "https://images.unsplash.com/photo-1594492215832-a299f28a00c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhemUlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let HOT_URL = "https://cdn.pixabay.com/photo/2017/03/27/21/38/sunset-2180346_640.jpg";
    let COLD_URL = "https://cdn.pixabay.com/photo/2021/12/12/18/04/mountains-6865752_1280.jpg";
    let RAIN_URL = "https://cdn.pixabay.com/photo/2021/08/14/05/33/raindrop-6544618_1280.jpg";
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80? RAIN_URL: info.temp > 15 ? HOT_URL: COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity > 80? <ThunderstormIcon/>: info.temp > 15 ? <WbSunnyIcon/>: <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Humidity: {info.humidity}%</p>
                        <p>Min Temperature: {info.tempMin}&deg;C</p>
                        <p>Max Temperature: {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and it feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}