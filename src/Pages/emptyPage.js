import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import '../css/bootstrap.css';
import '../App.css';


class emptyPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="padding-10">
        </div>
      </div>
    );
  }
}

export default emptyPage;