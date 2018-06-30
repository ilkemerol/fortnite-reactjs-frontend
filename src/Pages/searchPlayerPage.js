import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../Components/Navbar';
import '../css/bootstrap.css';
import '../App.css';
import SearchPlayer from '../Apis/searchPlayer';



class searchPlayerPage extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <SearchPlayer term = {this.props.location.state.term}/>
      </div>
    );
  }
}

export default searchPlayerPage;