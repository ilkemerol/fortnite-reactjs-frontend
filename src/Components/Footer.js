import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../css/serverStatus.css';

const API = 'http://localhost:8080/serverStatus';
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
  const hits = data || [];

  function createStatusBar(elem) {
    let statusBar = []
    let i = 0;
    if(elem == "UP") {
        statusBar.push(<div key={i++} className="demo-up">
        <span className="server-status" type="up"></span>
        <span>Server is running without issues.</span>
        </div>)
    } else if (elem == "DOWN") {
        statusBar.push(<div key={i++} className="demo-down">
        <span className="server-status" type="down"></span>
        <span>Server is not responding, down.</span>
        </div>)
    }

    return statusBar
  }

  if (error) {
    return <p>error</p>;
  }

  if (isLoading) {
    return <p>loading</p>;
  }
  
  return (
    <div className="footer">
        <div className="demos">
            {createStatusBar(hits.status)}
        </div>
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(news);