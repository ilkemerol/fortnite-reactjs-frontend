import React, { Component } from 'react';
import UserId from './Apis/UserIdApi';
import BrDailyStore from './Apis/brDailyStore';
import Navbar from './Components/Navbar';
import './css/bootstrap.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="padding-10">
          {/*<UserId />*/}
          <BrDailyStore />
        </div>
      </div>
    );
  }
}

export default App;
