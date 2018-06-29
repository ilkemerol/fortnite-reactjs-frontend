import React, { Component } from 'react';
import ApisList from './Components/ApisList';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import './css/bootstrap.css';
import  SearchArea from './Components/SearchArea';
import './App.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Luckiest+Guy:300,400,700', 'sans-serif']
  }
});

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="padding-10 bg-dimgray">
          <ApisList />{/*ApiList means main page controller*/}
        </div>
      </div>
    );
  }
}

export default App;
