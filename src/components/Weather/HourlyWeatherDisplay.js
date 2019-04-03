import React, { Component } from 'react';
import HourlyWeatherCard from './HourlyWeatherCard';

class HourlyWeatherDisplay extends Component {
    render() {
        let data = this.props.data;
        return (
            <div className="hourly-weather row pt-3 pb-3">
                <div className="col">
                    <div className="row">
                        <div className='col'>
                            <h4>Hourly</h4>
                        </div>
                    </div>
                    <div className="row">
                        {
                            data.list.map((value, key) => {
                                return (
                                    <HourlyWeatherCard key={key} data={value} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default HourlyWeatherDisplay;