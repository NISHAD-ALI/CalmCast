import React, { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios';
import AnimatedIcon from '../AnimatedIcon';
import AnimatedIconCloud from '../AnimatedIconCloud';


const Main = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [search, setSearch] = useState('');
    const api = {
        key: "d430440716babfdf10812291f567bb9f",
        base: "https://api.openweathermap.org/data/2.5/",
    };

    useEffect(() => {
     
        const defaultCities = ['New York', 'New Delhi', 'Dubai'];
       
        Promise.all(defaultCities.map(city =>
            axios.get(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        ))
            .then(responses => {
               
                const weatherData = responses.map(response => response.data);
                setWeatherData(weatherData);
            })
            .catch(error => {
                console.error('Error :', error);
            });
    }, []);

    const handleSearch = () => {
        axios.get(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then(response => {
                console.log(weatherData);
                setWeatherData([response.data]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div className='maindiv'>
            <div className='mainCard'>

                {weatherData.map((data, index) => (
                    
                    <div className='card' key={index}>
                        {data.main.temp > 10?<AnimatedIcon />: <AnimatedIconCloud />}
                        <h1>{data.name}</h1>
                        <p className='temp'>{data.main.temp}°C</p>
                        <p className='wind'>WS:{data.wind.speed}km/h</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center">
                <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="Enter City"
                    className="rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button onClick={handleSearch} className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-600">Search</button>
            </div>

        </div>
    );
};

export default Main;
