import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../App.css';
import Top10 from '../Apis/top10';


class top10Page extends Component {
  render() {
    return (
      <div>
        <Top10 />
      </div>
    );
  }
}

export default top10Page;