import React, { Component } from 'react';
import ApisList from './Components/ApisList';
import Navbar from './Components/Navbar';
import './css/bootstrap.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="padding-10">
          <ApisList />
        </div>
      </div>
    );
  }
}

export default App;
