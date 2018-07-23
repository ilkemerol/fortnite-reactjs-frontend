import React, { Component } from 'react';

import '../css/loader.css';
import '../css/hrAnimation.css';

const API = process.env.REACT_APP_API_HOST + 'brDailyStore?storeDate=';
const DEFAULT_QUERY = '';

const withFetching = (url) => (Comp) =>
  class WithFetching extends Component {
    constructor(props) {
      super(props);
      function getMonth(date) {
        var month = date.getMonth() + 1;
        return month < 10 ? '0' + month : '' + month;
      }

      var todayDate = new Date().getDate() + '-' + getMonth(new Date()) + '-' + new Date().getFullYear();

      this.state = {
        tempValue: "",
        storeDate: todayDate,
        data: {},
        isLoading: false,
        error: null,
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      console.log("getStore backend URL ### " + url + this.state.storeDate);
      
      fetch(url + this.state.storeDate)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    changeState = () => {
      this.setState({storeDate: this.state.tempValue}, function(){
        this.setState({ isLoading: true });
        
        console.log("getStore backend URL ### " + url + this.state.storeDate);
        
        fetch(url + this.state.storeDate)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong ...');
            }
          })
          .then(data => this.setState({ data, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
      });
    };

    render() {
      return (
        <div>
        <div className="container">
          <div className="row padding-10">
            <div className="col-lg-6">
              <h1 className="font-style text-white">Item Shop</h1>
            </div>
            <div className="col-lg-6 text-right">
              <input className="outline_0 item-shop-search font-style text-center text-white" type="search" placeholder="DD-MM-YYYY" value = {this.state.tempValue} onChange = {event => this.setState({tempValue : event.target.value})}/>
              <a href="#" className="item-shop-search-button font-style" onClick={this.changeState}>Get Store</a>
            </div>
            <div className="col-lg-12">
              <div className="wm-preloader">
                <div className="wm-loading-line"></div>
                <div className="wm-loading-line wm-loading-line-clone"></div>
              </div>
            </div>
          </div>
        </div>
        <Comp { ...this.props } { ...this.state } />
        </div>
      )
    }
  }

const BrDailyStore = ({ data, isLoading, error }) => {
  const hits = data.items || [];
  const vbucks = data;

  function setBackgroundClazz(elem) {
    if(elem == "legendary") {
      return "legendary"
    } else if (elem == "epic") {
      return "epic"
    } else if (elem == "rare") {
      return "rare"
    } else if (elem == "uncommon") {
      return "uncommon"
    } else {
      return "noClazz"
    }
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <div className='loading'><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div></div>;
  }
  
  var i = 0;
  return (
    <div className="container">
      <div className="row padding-10">
        <div className="col-lg-12">
          <p className="font-style font-size-30 text-white" style={{float: 'right'}}>Shop Date: {vbucks.date}</p>
        </div>
      </div>
      <div className="row padding-10 margin-bottom-30">
        {hits.map(hit =>
          <div key={i++} className="col-lg-3">
            <div key={i++} className={"card splash-card splash " + setBackgroundClazz(hit.item.rarity)}>
              <img src={hit.item.image} alt="img" className="img-fluid splash card-img-top outfit"/>
              <div className="card-img-overlay">
                <div className="card-body itemdesc">
                  <h4 className="card-title itemname text-white"><span>{hit.name}</span></h4>
                  <p className="card-text itemprice text-white">
                    <img style={{ width: '25px' }} src={vbucks.vbucks} />
                    {hit.cost}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(BrDailyStore);