import React from 'react';
import '../css/bootstrap.css';

import '../App.css';
import '../css/searchPage.css';
import '../css/loader.css';
import playerImg from '../images/player.png';
import timeIcon from '../images/time-icon.ico';
import killIcon from '../images/kill-icon.ico';
import winIcon from '../images/win-icon.ico';
import battlePassIcon from '../images/battle-pass-icon.ico';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull,faClock,faTrophy } from '@fortawesome/free-solid-svg-icons';

const API = process.env.REACT_APP_API_HOST + 'playerStats?name=';

library.add(faSkull,faClock,faTrophy)

class searchPlayer extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
          user : props.term,
          season: "alltime",
          data : [],
          isLoading: true,
          error: null
        }
      }
      componentDidMount() {
        this.fetchUrl();
      }

      fetchUrl(){
        this.setState({isLoading: true});
        fetch(API + this.state.user + "&season=" + this.state.season)
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
        const stats = this.state.data.stats || [];
        const totals = this.state.data.totals || [];
        //console.log(this.state.data);
    
        if (this.state.error) {
          return <p>{this.state.error.message}</p>;
        }
      
        if (this.state.isLoading) {
            return <div className='loading'><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div></div>;
        }
        return (
          <div>
            {/*
            <div style = {{textAlign: "right"}}>
              <select value={this.state.season} onChange = {event => this.setState({season: event.target.value},this.fetchUrl)}>
                <option value="alltime">Volvo</option>
                <option value="season5">Saab</option>
                <option value="season4">Mercedes</option>
              </select>
            </div>
            */}
            <div className = "player-icon-div">
              <img src={playerImg} className = "player-icon" style= {{margin: '20px'}}/>
              <h3 className = "p-blue font-style col-sm-12 col-md-12 col-lg-12">{this.state.data.username}  <img src={battlePassIcon}/></h3>
              <hr className = "hr col-sm-12 col-md-12 col-lg-12" style={{width:'200px'}}></hr>
            </div>
            <div className = "div-alltime">
              <div className = "div-border-center">
                <h4 className = "p-orange font-style" style={{marginTop:"10px"}}>All Time Stats</h4>
                <hr className = "hr" style={{width:'200px'}}></hr>
              </div>
              <div className = "container">
                <div className = "row">
                  <h5 className = "p-white font-style col-md-4 h5-alltime"><FontAwesomeIcon className="text-info font-size-20" icon="clock" /> {totals.hoursplayed} Hours</h5>
                  <h5 className = "p-white font-style col-md-4 h5-alltime"><FontAwesomeIcon className="text-info font-size-20" icon="skull" /> {totals.kills}</h5>
                  <h5 className = "p-white font-style col-md-4 h5-alltime"><FontAwesomeIcon className="text-info font-size-20" icon="trophy" /> {totals.wins}</h5>
                </div>
                <div className = "row" style={{marginTop: "20px"}}>
                  <h5 className = "p-white font-style col-md-4 h5-alltime"><span className = "text-info">Matches:</span> {totals.matchesplayed}</h5>
                  <h5 className = "p-white font-style col-md-4 h5-alltime"><span className = "text-info">Winrate:</span> {totals.winrate}</h5>
                  <h5 className = "p-white font-style col-md-4 h5-alltime"><span className = "text-info">K/D:</span> {totals.kd}</h5>
                </div>
              </div>
            </div>
            <div className = "margin-bottom-30">
              <div className = "container-fluid" style={{marginLeft:"5%",marginRight:"5%"}}>
                <div className = "row">
                  <div className = "col-lg-4">
                    <div className = "div-table-border border-radius-10 border-green">
                      <div className = "season-table-header header-green top-left-right-radius-10">
                        <h4 className = "p-white-center font-style" style={{marginLeft: "5px",textAlign:"center"}}>Solo</h4>
                      </div>
                      <h5 className = "p-white font-style h5-alltime"><span className = "text-info">Matches:</span> {stats.matchesplayed_solo}</h5>
                      <h5 className = "p-white font-style h5-alltime"><FontAwesomeIcon className="text-info font-size-20" icon="skull" /> {stats.kills_solo}</h5>
                      <h5 className = "p-white font-style h5-alltime"><FontAwesomeIcon className="text-info font-size-20" icon="trophy" /> {stats.placetop1_solo}</h5>
                      <h5 className = "p-white font-style h5-alltime"><span className = "text-info">Winrate:</span> {stats.winrate_solo}</h5>
                    </div>
                  </div>
                  <div className = "col-lg-4">
                    <div className = "div-table-border border-radius-10 border-purple">
                      <div className = "season-table-header header-purple top-left-right-radius-10">
                        <h4 className = "p-white-center font-style" style={{marginLeft: "5px",textAlign:"center"}}>Duo</h4>
                      </div>
                      <h5 className = "p-white font-style h5-alltime"><span className = "text-info">Matches:</span> {stats.matchesplayed_duo}</h5>
                      <h5 className = "p-white font-style h5-alltime"><FontAwesomeIcon className="text-info font-size-20" icon="skull" /> {stats.kills_duo}</h5>
                      <h5 className = "p-white font-style h5-alltime"><FontAwesomeIcon className="text-info font-size-20" icon="trophy" /> {stats.placetop1_duo}</h5>
                      <h5 className = "p-white font-style h5-alltime"><span className = "text-info">Winrate:</span> {stats.winrate_duo}</h5>
                    </div>
                  </div>
                  <div className = "col-lg-4">
                    <div className = "div-table-border border-radius-10 border-orange">
                      <div className = "season-table-header header-orange top-left-right-radius-10">
                        <h4 className = "p-white-center font-style" style={{marginLeft: "5px",textAlign:"center"}}>Squad</h4>
                      </div>
                      <h5 className = "p-white font-style h5-alltime"><span className = "text-info">Matches:</span> {stats.matchesplayed_squad}</h5>
                      <h5 className = "p-white font-style h5-alltime"><FontAwesomeIcon className="text-info font-size-20" icon="skull" /> {stats.kills_squad}</h5>
                      <h5 className = "p-white font-style h5-alltime"><FontAwesomeIcon className="text-info font-size-20" icon="trophy" /> {stats.placetop1_squad}</h5>
                      <h5 className = "p-white font-style h5-alltime"><span className = "text-info">Winrate:</span> {stats.winrate_squad}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}
export default(searchPlayer);