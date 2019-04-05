import React, { Component } from 'react';
import '../css/App.css';

import Header from './Header';
import WeatherDashboard from './WeatherDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <WeatherDashboard />

      </div>
    );
  }
}

export default App;
