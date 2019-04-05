import React, { Component } from 'react';
import DailyWeatherCard from './DailyWeatherCard';

class DailyWeatherDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { data } = this.props;
        console.log(data);
        return (
            <div className="daily-weather row pt-3 pb-3">
                <div className="col">
                    <div className="row">
                        <div className='col'>
                            <h4>Daily</h4>
                        </div>
                    </div>
                    <div className="row">
                        {
                            data.list.map((value, key) => {
                                return (
                                    <DailyWeatherCard key={key} data={value} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default DailyWeatherDisplay;