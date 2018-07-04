import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../css/loader.css';

const API = 'http://localhost:8080/news';
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
      if(elem == "4"){
          return " active"
      } else {
          return ""
      }
  }

  function createCarouselContent(elem){
    let outerCarousel = []
    let innerCarousel = []
    for (let i = 0; i < elem.length; i++) {
        innerCarousel.push(<div className="col-lg-6">
                <p className="text-white text-center">{elem[i].title}</p>
                <img src={elem[i].image} />
                </div>)
        if(i != 0 && (i == 3 || i == 8 || i == 12)){
            outerCarousel.push(<div key={i++} className={"carousel-item" + isActive(i)}><div className="container"><div className="row">{innerCarousel}</div></div></div>)
            innerCarousel = []
        }
    }
    return outerCarousel
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <div className="container"><div className="row"><div className='loading override-loading'><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div></div></div></div>;
  }
  
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
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