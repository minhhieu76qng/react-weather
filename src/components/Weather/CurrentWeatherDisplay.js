import React, { Component } from 'react';

import update from '../../image/update.png'

import env from '../../config';

class CurrentWeatherDisplay extends Component {
    render() {
        let data = this.props.dataWeather;
        return (
            <div className="current-weather row pt-3 pb-3">
                <div className="col-12">
                    <div className="city-name mb-2">
                        {data.name}
                    </div>
                    <div className="min-max-temperature">{data.main.temp_min}&deg;&nbsp;|&nbsp;{data.main.temp_max}&deg;</div>
                    <div className="current-temperature">{data.main.temp}&deg;<sup>C</sup></div>

                    <div className="weather-status">
                        <img src={env.IMAGE_WEATHER_LINK + data.weather[0].icon + '.png'} alt={data.weather[0].icon} />
                        <div className="weather-text">{data.weather[0].main}</div>
                    </div>

                    <div className="last-update">
                        Update at of {this.props.last_update}
                        <button className="btn-update-weather">
                            <img src={update} alt="Update weather" title="Update weather now" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentWeatherDisplay;