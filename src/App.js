import React, { Component } from 'react';
import ApisList from './Components/ApisList';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './css/bootstrap.css';
import './App.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Luckiest+Guy:300,400,700', 'sans-serif']
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="padding-10 bg-dimgray">
          <ApisList />{/*ApiList means main page controller*/}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
