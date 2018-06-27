import React, { Component } from 'react';
import UserId from './UserIdApi';
import BrDailyStore from './brDailyStore';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Api Running
        </p>
        {/*<UserId />*/}
        <BrDailyStore />
      </div>
    );
  }
}

export default App;
