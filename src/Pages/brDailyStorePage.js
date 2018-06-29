import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import '../css/bootstrap.css';
import '../App.css';
import BrDailyStore from '../Apis/brDailyStore';


class brDailyStorePage extends Component {
  render() {
    return (
      <div>
        <BrDailyStore />
      </div>
    );
  }
}

export default brDailyStorePage;