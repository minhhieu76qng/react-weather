import React, { Component } from 'react';
import env from '../../config';

class HourlyWeatherCard extends Component {
    render() {
        let data = this.props.data;
        return (
            <div className='col-4'>
                <div className="time">{data.dt}</div>
                <div className="weather-image">
                    <img src={env.IMAGE_WEATHER_LINK + data.weather[0].icon + '.png'} alt={data.weather[0].icon}/>
                </div>

                <div className="temperature"><strong>{data.main.temp}&deg;</strong></div>
                <div className="weather-status">{data.weather[0].main}</div>
            </div>
        );
    }
}

export default HourlyWeatherCard;