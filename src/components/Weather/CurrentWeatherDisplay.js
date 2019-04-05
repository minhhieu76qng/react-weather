import React, { Component } from 'react';

import update from '../../image/update.png'

class CurrentWeatherDisplay extends Component {
    render() {
        let data = this.props.dataWeather;
        return (
            <div className="current-weather row pt-3 pb-3">
                <div className="col-12">
                    <div className="city-name mb-2">
                        {data.name}
                    </div>
                    <div className="min-max-temperature">{data.min_temp}&deg;&nbsp;|&nbsp;{data.max_temp}&deg;</div>
                    <div className="current-temperature">{data.temp}&deg;<sup>C</sup></div>

                    <div className="weather-status">
                        <img src={data.icon} alt={data.icon} />
                        <div className="weather-text">{data.status}</div>
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