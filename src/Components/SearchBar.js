import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../css/searchBar.css';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {term: ""}
    }
    render() {
      return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <form action="" method="POST" className="form form--search">
                            <div className="form__field">
                                <input className="outline_0" type="search" placeholder="Outfit or Player Name" value = {this.state.term} onChange = {event => this.setState({term : event.target.value})}/>
                                <input type="submit" value="Search" />
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-2">
                        <Link to={{
                           pathname: '/searchPlayerPage', 
                           state:{
                               term: this.state.term
                           }
                        }

                        }>
                            <button type="button" className="btn btn-warning searchBtn text-white">Search</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}