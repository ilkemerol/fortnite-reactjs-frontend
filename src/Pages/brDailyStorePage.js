import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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