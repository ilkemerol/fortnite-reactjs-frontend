import React from 'react';
import '../css/bootstrap.css';
import '../App.css';
import '../css/loader.css';
import playerImg from '../images/player.png';
import timeIcon from '../images/time-icon.ico';
import killIcon from '../images/kill-icon.ico';
import winIcon from '../images/win-icon.ico';
import battlePassIcon from '../images/battle-pass-icon.ico';

const API = process.env.REACT_APP_API_HOST + 'playerStats?name=';

class searchPlayer extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
          user : props.term,
          data : [],
          isLoading: true,
          error: null
        }
      }
      componentDidMount() {
        fetch(API + this.state.user)
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
        console.log(this.state.data);
    
        if (this.state.error) {
          return <p>{this.state.error.message}</p>;
        }
      
        if (this.state.isLoading) {
            return <div className='loading'><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div></div>;
        }
        return (
          <div>
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
                  <h5 className = "p-white font-style col-md-4 h5-alltime"><img src={timeIcon} className = "time-icon"/> {totals.hoursplayed} Hours</h5>
                  <h5 className = "p-white font-style col-md-4 h5-alltime"><img src={killIcon} className = "time-icon"/> {totals.kills}</h5>
                  <h5 className = "p-white font-style col-md-4 h5-alltime"><img src={winIcon} className = "time-icon"/> {totals.wins}</h5>
                </div>
                <div className = "row" style={{marginTop: "20px"}}>
                  <h5 className = "p-white font-style col-md-4 h5-alltime">Winrate: {totals.winrate}</h5>
                  <h5 className = "p-white font-style col-md-4 h5-alltime">Score: {totals.score}</h5>
                  <h5 className = "p-white font-style col-md-4 h5-alltime">K/D: {totals.kd}</h5>
                </div>
              </div>
            </div>
            <div>
              <div className = "container-fluid" style={{marginLeft:"5%",marginRight:"5%"}}>
                <div className = "row">
                  <div className = "col-lg-4 div-solo">
                  <div className = "row row-solo">
                    <h4 className = "p-white-center font-style" style={{marginTop:"10px",marginLeft: "5px",textAlign:"center"}}>Solo</h4>
                  </div>
                  <h5 className = "p-white font-style h5-alltime"><img src={timeIcon} className = "time-icon"/> {totals.hoursplayed} Hours</h5>
                  <h5 className = "p-white font-style h5-alltime"><img src={killIcon} className = "time-icon"/> {totals.kills}</h5>
                  <h5 className = "p-white font-style h5-alltime"><img src={winIcon} className = "time-icon"/> {totals.wins}</h5>
                  </div>
                  <div className = "col-lg-4 div-solo">
                  <h4 className = "p-green font-style" style={{marginTop:"10px"}}>All Time Stats</h4>
                  <hr className = "hr" style={{width:'200px'}}></hr>
                  <h5 className = "p-white font-style h5-alltime"><img src={timeIcon} className = "time-icon"/> {totals.hoursplayed} Hours</h5>
                  <h5 className = "p-white font-style h5-alltime"><img src={killIcon} className = "time-icon"/> {totals.kills}</h5>
                  <h5 className = "p-white font-style h5-alltime"><img src={winIcon} className = "time-icon"/> {totals.wins}</h5>
                  </div>
                  <div className = "col-lg-4 div-solo">
                  <h4 className = "p-green font-style" style={{marginTop:"10px"}}>All Time Stats</h4>
                  <hr className = "hr" style={{width:'200px'}}></hr>
                  <h5 className = "p-white font-style h5-alltime"><img src={timeIcon} className = "time-icon"/> {totals.hoursplayed} Hours</h5>
                  <h5 className = "p-white font-style h5-alltime"><img src={killIcon} className = "time-icon"/> {totals.kills}</h5>
                  <h5 className = "p-white font-style h5-alltime"><img src={winIcon} className = "time-icon"/> {totals.wins}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}
export default(searchPlayer);