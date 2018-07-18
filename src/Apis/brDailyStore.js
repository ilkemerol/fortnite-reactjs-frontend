import React, { Component } from 'react';

import '../css/loader.css';

const API = process.env.REACT_APP_API_HOST + 'brDailyStore';
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
      <div className="row">
        <div className="col-lg-12">
          <h1 className="font-style text-center text-white">Current Item Shop</h1>
          <hr className="hr margin-bottom-30" />
        </div>
        <div className="col-lg-12">
          <p className="font-style font-size-20 text-white" style={{float: 'right'}}>Shop Date: {vbucks.date}</p>
        </div>
      </div>
      <div className="row margin-bottom-30">
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