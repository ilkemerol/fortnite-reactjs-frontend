import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../App.css';
import UpComingItems from '../Apis/upComingItems';


class upComingItemsPage extends Component {
  render() {
    return (
      <div>
        <UpComingItems />
      </div>
    );
  }
}

export default upComingItemsPage;