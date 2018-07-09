import React, { Component } from 'react';

import '../css/loader.css';
import firstPlaceImg from '../images/leaderboard_1.png';

const API = process.env.REACT_APP_API_HOST + 'topTen';
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

const top10 = ({ data, isLoading, error }) => {
  const hits = data.entries || [];

  function firstPlace(elem) {
    let board = []

    elem = elem.slice(0, 1);

    {elem.map(e=>
      board.push(<div className="col-lg-4">
      <div className="margin-left-right-5 top10Border first">
        <img className="padding-20" src={firstPlaceImg} style={{width: '100%'}}/>
        <h1 className="font-style text-center text-white">{e.username}</h1>
        <hr className="hr margin-bottom-30" />
        <h4 className="font-style text-center text-white">Kills: {e.kills}</h4>
        <h4 className="font-style text-center text-white">Wins: {e.wins}</h4>
        <h4 className="font-style text-center text-white">K/D: {e.kd}</h4>
        <h4 className="font-style text-center text-white">Matches: {e.matches}</h4>
        <h4 className="font-style text-center text-white">TTP: {e.minutes/60} H</h4>
      </div>
      </div>
      )
    )}

    return board
  }

  function secondPlace(elem) {
    let board = []

    elem = elem.slice(1, 2);

    {elem.map(e=>
      board.push(<div className="col-lg-4">
        <div className="margin-left-right-5 top10Border second">
        <img className="padding-20" src={firstPlaceImg} style={{width: '100%'}}/>
        <h1 className="font-style text-center text-white">{e.username}</h1>
        <hr className="hr margin-bottom-30" />
        <h4 className="font-style text-center text-white">Kills: {e.kills}</h4>
        <h4 className="font-style text-center text-white">Wins: {e.wins}</h4>
        <h4 className="font-style text-center text-white">K/D: {e.kd}</h4>
        <h4 className="font-style text-center text-white">Matches: {e.matches}</h4>
        <h4 className="font-style text-center text-white">TTP: {e.minutes/60} H</h4>
      </div>
      </div>
      )
    )}

    return board

  }

  function thirdPlace(elem) {
    let board = []

    elem = elem.slice(2, 3);

    {elem.map(e=>
      board.push(<div className="col-lg-4">
        <div className="margin-left-right-5 top10Border third">
        <img className="padding-20" src={firstPlaceImg} style={{width: '100%'}}/>
        <h1 className="font-style text-center text-white">{e.username}</h1>
        <hr className="hr margin-bottom-30" />
        <h4 className="font-style text-center text-white">Kills: {e.kills}</h4>
        <h4 className="font-style text-center text-white">Wins: {e.wins}</h4>
        <h4 className="font-style text-center text-white">K/D: {e.kd}</h4>
        <h4 className="font-style text-center text-white">Matches: {e.matches}</h4>
        <h4 className="font-style text-center text-white">TTP: {e.minutes/60} H</h4>
      </div>
      </div>
      )
    )}

    return board

  }

  function otherPlayer(elem) {
    let table = []
    let innerTable = []

    elem = elem.slice(3, elem.length);

    {elem.map(e =>
      innerTable.push(<tbody>
        <tr>
            <th className="font-style letter-spacing-2 text-white text-center" scope="row"><p>{e.rank}</p></th>
            <td className="font-style letter-spacing-2 text-white text-center">{e.username}</td>
            <td className="font-style letter-spacing-2 text-white text-center">{e.kills}</td>
            <td className="font-style letter-spacing-2 text-white text-center">{e.wins}</td>
            <td className="font-style letter-spacing-2 text-white text-center">{e.kd}</td>
            <td className="font-style letter-spacing-2 text-white text-center">{e.platform}</td>
        </tr>
    </tbody>)
    )}

    table.push(<div className="row margin-bottom-30">
    <table className="table table-hover">
        <thead>
            <tr>
                <th className="font-style letter-spacing-2 text-white text-center font-size-25" scope="col">Rank</th>
                <th className="font-style letter-spacing-2 text-white text-center font-size-25" scope="col">Username</th>
                <th className="font-style letter-spacing-2 text-white text-center font-size-25" scope="col">Kills</th>
                <th className="font-style letter-spacing-2 text-white text-center font-size-25" scope="col">Wins</th>
                <th className="font-style letter-spacing-2 text-white text-center font-size-25" scope="col">K/D</th>
                <th className="font-style letter-spacing-2 text-white text-center font-size-25" scope="col">Platform</th>
            </tr>
        </thead>
        {innerTable}
    </table>
    </div>)

    return table
  }

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
      </div>
      <div className="row margin-bottom-30">
      {firstPlace(hits)}
      {secondPlace(hits)}
      {thirdPlace(hits)}
      </div>
      {otherPlayer(hits)}
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(top10);