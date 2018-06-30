import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import '../css/bootstrap.css';
import '../App.css';

const API = 'http://localhost:8080/playerStats?name=';
const DEFAULT_QUERY = 'MyChoo';

class searchPlayerPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user : props.location.state.term,
      data : [],
      isLoading: false,
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
    console.log(this.state.data);
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }
  
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
      <p>Your URL is, {API + this.state.user}</p>
      <div>
        <p>{this.state.data.name}</p>
        <p>{this.state.data.platform}</p>
        <p>{this.state.data.window}</p>
      </div>
    </div>
    );
  }
}

export default searchPlayerPage;