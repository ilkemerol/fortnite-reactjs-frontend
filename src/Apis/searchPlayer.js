import React from 'react';
import '../css/bootstrap.css';
import '../App.css';
import '../css/loader.css';
import playerImg from '../images/player.png';

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
        const hits = this.state.data.stats || [];
    
        if (this.state.error) {
          return <p>{this.state.error.message}</p>;
        }
      
        if (this.state.isLoading) {
            return <div className='loading'><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div><div className='bullet'></div></div>;
        }
        return (
          <div>
          <p>Your URL is, {API + this.state.user}</p>
          <div>
            <div className = "emreCenter">
              <img src={playerImg} className = "responsive"/>
            </div>
            <p className = "text-white">{this.state.data.name}</p>
            <p className = "text-white">{this.state.data.platform}</p>
            <p className = "text-white">{this.state.data.window}</p>
            <p className = "text-white">{hits.kills_solo}</p>
            <p className = "text-white">{hits.placetop1_solo}</p>
          </div>
        </div>
        );
      }
}
export default(searchPlayer);