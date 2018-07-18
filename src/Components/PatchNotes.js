import React, { Component } from 'react';

import '../css/loader.css';

const API = process.env.REACT_APP_API_HOST + 'patchNotes';
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

const patchNotes = ({ data, isLoading, error }) => {
  const hits = data.blogList || [];

  function createText(elem) {
      let text = []
      let customKey = 0;

      for(let i = 0; i < elem.length; i++) {
        let fixed = elem[i].short;
        fixed = fixed.replace("<p>", "");
        fixed = fixed.replace(" <p>", "");
        fixed = fixed.replace("</p>", "");
        fixed = fixed.replace(" </p>", "");
        text.push(<b key={customKey++} style={{color: 'orange'}}>{elem[i].title}: </b>, fixed);
      }
      return text
  }

  if (error) {
    return <div className="container margin-top-30 margin-bottom-30 text-center">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="text-center text-white font-style">Newest Patch Notes from Lama</h1>
        <button className="btn btn-warning font-style margin-bottom-30" data-toggle="collapse" data-target="#demo">Opps!</button>
      </div>
    </div>
    <div id="demo" className="collapse newsBorder">
    <div className="row">
        <div className="col-lg-12" style={{height: '50px'}}>
            <div className='loading'><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div></div>;
        </div>
    </div>
    </div>
    </div>;
  }

  if (isLoading) {
    return <div className="container margin-top-30 margin-bottom-30 text-center">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="text-center text-white font-style">Newest Patch Notes from Lama</h1>
        <button className="btn btn-warning font-style margin-bottom-30" data-toggle="collapse" data-target="#demo">Loading..</button>
      </div>
    </div>
    <div id="demo" className="collapse newsBorder">
    <div className="row">
        <div className="col-lg-12" style={{height: '50px'}}>
            <div className='loading'><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div></div>;
        </div>
    </div>
    </div>
    </div>;
  }
  
  return (

    <div className="container margin-top-30 margin-bottom-30 text-center">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="text-center text-white font-style">Newest Patch Notes from Lama</h1>
        <button className="btn btn-warning font-style margin-bottom-30" data-toggle="collapse" data-target="#demo">Show Me</button>
      </div>
    </div>
      <div id="demo" className="collapse newsBorder">
          <div className="row">
              <div className="col-lg-3">
                  <a target="_blank" href="https://www.epicgames.com/fortnite/en-US/patch-notes">
                      <p className="extLink font-style text-white newsLineHeight font-size-25 margin-auto letter-spacing-4">Patch Notes</p>
                  </a>
              </div>
              <div className="col-lg-9">
                  <div className="scroll-left">
                      <p className="text-white font-size-20">{createText(hits)}</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(patchNotes);