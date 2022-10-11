import { useEffect, useState } from "react";

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = '';
const API_KEY = 'f0391453678794555a9b18d7c6edf947';

export default function Weather({lat,lng}) {
    const [temp, setTemp] =useState(0);
    const [speed, setSpeed] = useState(0);
    const [direction, setDirection] = useState(0);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    
    return(
        <>
        <h3>Weather on your location</h3>
        <p>{temp} c </p>
        <p>{speed} m/s {direction} degrees</p>
        <img src={icon} alt=""/>
        </>

    ) 
        useEffect()) => {
            const address = API_URL +
            'lat=' + lat
            '&lon=' + lng + 
            '&units=metric' + 
            '&appid=' + API_KEY
            
        }
    }


