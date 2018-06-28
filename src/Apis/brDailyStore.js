import React, { Component } from 'react';

const API = 'http://localhost:8080/brDailyStore';
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

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  var i = 0;
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <p className="float-left border rounded bg-success text-white padding-10">Api Running</p>
        </div>
        <div className="col-lg-6">
          <p className="float-right padding-10">Your URL is, {API + DEFAULT_QUERY}</p>
        </div>
      </div>
      <div className="row">
        {hits.map(hit =>
          <div key={i++} className="col-lg-3">
            <div key={i++}>
              <p>{hit.name}</p>
              {/*<p className="text-center">{hit.item.image}</p>*/}
              <img src={hit.item.image} className={'img-fluid ' + hit.item.rarity}/>
              <p><img src={vbucks.vbucks} style={{ width: '25px' }}/>{hit.cost}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(BrDailyStore);