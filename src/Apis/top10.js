import React, { Component } from 'react';

import '../css/loader.css';
import firstPlace from '../images/leaderboard_1.png';

const API = 'http://localhost:8080/topTen';
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
  const hits = data.entries || [];

  function isTopThree(elem){
      if(elem == "1"){
          return "first";
      } else if(elem == "2"){
          return "second";
      } else if(elem == "3"){
          return "third";
      } else {
          return "defaultLeaderboard";
      }
  }

  function allowDisplayImg(elem){
    if(elem == "1"){
        return "allowDisplay";
    } else {
        return "notAllowDisplay";
    }
   }

   function allowDisplayTxt(elem){
    if(elem == "1"){
        return "notAllowDisplay";
    } else {
        return "allowDisplay";
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
          <h1 className="font-style text-center text-white">Leaderboard</h1>
          <hr className="hr margin-bottom-30" />
        </div>
        <div className="col-lg-12">
          <p className="font-style font-size-20 text-white" style={{float: 'right'}}>Top 10</p>
        </div>
      </div>
      <div className="row margin-bottom-30">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th className="font-style text-white text-center" scope="col">#</th>
                    <th className="font-style text-white text-center" scope="col">Username</th>
                    <th className="font-style text-white text-center" scope="col">Kills</th>
                    <th className="font-style text-white text-center" scope="col">Wins</th>
                </tr>
            </thead>
        {hits.map(hit =>
            <tbody>
                <tr className={isTopThree(hit.rank)}>
                    <th className="font-style text-center" scope="row"><p className={allowDisplayTxt(hit.rank)}>{hit.rank}</p><img className={allowDisplayImg(hit.rank)} src={firstPlace} style={{width: '90px'}}/></th>
                    <td className="font-style text-center">{hit.username}</td>
                    <td className="font-style text-center">{hit.kills}</td>
                    <td className="font-style text-center">{hit.wins}</td>
                </tr>
            </tbody>
        )}
        </table>
      </div>
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(BrDailyStore);