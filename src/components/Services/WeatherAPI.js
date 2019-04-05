import env from '../../config';
import axios from 'axios';

export default class WeatherAPI{
    WeatherAPI(){}

    getCurrentWeatherByPosition(pos)
    {
        return new Promise((resolve, reject) => {
            axios.get(`${env.WEATHER_API}weather?lat=${pos.lat}&lon=${pos.long}&appid=${env.OPEN_WEATHER_MAP_API_KEY}&units=metric`)
            .then(data => {
                
                let dataWeather = data.data;

                let result = {
                    name : dataWeather.name,
                    temp : dataWeather.main.temp,
                    min_temp : dataWeather.main.temp_min,
                    max_temp : dataWeather.main.temp_max,
                    icon : `${env.IMAGE_WEATHER_LINK}${dataWeather.weather[0].icon}.png`,
                    status : dataWeather.weather[0].main
                }

                resolve(result);
            })
            .catch(err => reject(err));
        })
    }
    getDailyWeatherByPosition(pos)
    {
        return new Promise((resolve, reject) => {
            axios.get(`${env.WEATHER_API}forecast?lat=${pos.lat}&lon=${pos.long}&appid=${env.OPEN_WEATHER_MAP_API_KEY}&units=metric`)
            .then(data => {
                let weatherData = data.data.list;

                let arrayData = [];
                weatherData.map((value ,key) => {
                    // convert time
                    let date = new Date(value.dt * 1000);

                    if (date.getUTCHours() === 12)
                    {
                        let item = {
                            date : value.dt,
                            temp_min : value.main.temp_min,
                            temp_max : value.main.temp_max,
                            icon : value.weather[0].icon,
                            status : value.weather[0].status
                        }
    
                        arrayData.push(item);
                    }
                })

                resolve(arrayData);
            })
            .catch(err => reject(err));
        })
    }

    getHourlyWeatherByPosition(pos)
    {
        return new Promise((resolve, reject) => {
            axios.get(`${env.WEATHER_API}forecast?lat=${pos.lat}&lon=${pos.long}&appid=${env.OPEN_WEATHER_MAP_API_KEY}&cnt=7&units=metric`)
            .then(data => {
                let weatherData = data.data.list;

                let arrayData = [];
                weatherData.map((value ,key) => {
                    let item = {
                        date : value.dt,
                        temp_min : value.main.temp_min,
                        temp_max : value.main.temp_max,
                        icon : value.weather[0].icon,
                        status : value.weather[0].status
                    }

                    arrayData.push(item);
                })

                resolve(arrayData);
            })
            .catch(err => reject(err));
        })
    }
}