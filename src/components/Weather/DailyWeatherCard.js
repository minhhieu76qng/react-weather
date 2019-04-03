import React, { Component } from 'react';
import env from '../../config';

class DailyWeatherCard extends Component {
    render() {
        let data = this.props.data;
        return (
            <div className='col-3'>
                <div className="date">{data.dt}</div>
                <div className="weather-image">
                    <img src={env.IMAGE_WEATHER_LINK + data.weather[0].icon + '.png'} alt={data.weather[0].icon}/>
                </div>

                <div className="temperature">
                    <strong>{data.temp.max}&deg;</strong> &nbsp; {data.temp.min}&deg;
                </div>
                <div className="weather-status">{data.weather[0].main}</div>
            </div>
        );
    }
}

export default DailyWeatherCard;