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

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <div className="container"><div className="row"><div className='loading override-loading'><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div></div></div></div>;
  }
  
  var i = 0;
  return (
    <div className="container">
      <div className="row">
        {hits.map(hit =>
          <div key={i++} className="col-lg-3">
            <p className="text-white text-center">{hit.title}</p>
            <Link to="/newsPage">
                <img src={hit.image} className="img-fluid" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(news);