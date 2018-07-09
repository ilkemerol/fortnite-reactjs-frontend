import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Moment from 'moment';

import '../css/homeLoader.css';
import lama from '../images/lama.png';

const API = process.env.REACT_APP_API_HOST + 'news';
const DEFAULT_QUERY = '';

const withFetching = (url) => (Comp) =>
  class WithFetching extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {},
        isLoading: false,
        error: null,
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      fetch(url)
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

    render() {
      return <Comp { ...this.props } { ...this.state } />
    }
  }

const news = ({ data, isLoading, error }) => {
  const hits = data.entries || [];
  const type = data;

  function isActive(elem) {
      if(elem == "0"){
          return " active"
      } else {
          return ""
      }
  }

  function createCarouselContent(elem){
    let outerCarousel = []
    let innerCarousel = []
    let customArr;
    let i = 0;
    let customKey = 0;
    console.log(elem);
    while(i < elem.length) {
      if((i + 3) < elem.length ){
        customArr = elem.slice(i, i + 4);
        console.log(customArr);
      } else {
        customArr = elem.slice(i, elem.length);
        console.log(customArr);
      }
      for(let j = 0; j < customArr.length; j++){
        innerCarousel.push(<div key={customKey++} className="col-lg-3 mh550 lightUp">
                <Link className="text-decoration-none" to={"/newsPage#" + customArr[j.title]}>
                <p className="text-white text-center font-style font-size-20 mh75">{customArr[j].title}</p>
                <img src={customArr[j].image} className="width100" />
                <p className="text-white text-center">{Moment.unix(customArr[j].time).format('MMMM Do')}</p>
                <hr className="hr" />
                <p className="text-white text-center">{customArr[j].body}</p>
                </Link>
                </div>)
      }
      outerCarousel.push(<div key={customKey++} className={"carousel-item " + isActive(i)}><div className="container"><div className="row">{innerCarousel}</div></div></div>)
      innerCarousel = []
      i = i + 4;
    }
    console.log(Moment.unix(1531009261).format('dddd, MMMM Do, YYYY h:mm:ss A'))
    return outerCarousel
  }

  if (error) {
    return <div className="container">
    <div className="row">
    <img src={lama} style={{width: '150px', height: '200px', margin: 'auto'}}/>
    </div>
    <div className="row">
    <p className="font-style font-size-25 text-white margin-auto">Opps! We missed some Lama</p>
    </div>
    </div>;
  }

  if (isLoading) {
    return <div className="container"><div className="row"><div className="loader">
    <div>
      <div className="c1"></div>
      <div className="c2"></div>
      <div className="c3"></div>
      <div className="c4"></div>
    </div>
    <span className="font-style">Getting News from Lama!</span>
  </div></div></div>;
  }
  
  return (
    <div id="carouselExampleIndicators" className="carousel slide margin-bottom-30" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
            {createCarouselContent(hits)}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(news);