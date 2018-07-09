import React from 'react';
import { Link } from "react-router-dom";

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
                <div className="row" style={{height: '50px'}}>
                    <div className="col-lg-6 col-sm-6 col-8">
                        <form action="" method="POST" className="form form--search">
                            <div className="form__field">
                                <input className="outline_0" type="search" placeholder="Outfit or Player Name" value = {this.state.term} onChange = {event => this.setState({term : event.target.value})}/>
                                <input type="submit" value="Search" />
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-4">
                        <Link to={{
                           pathname: '/searchPlayerPage', 
                           state:{
                               term: this.state.term
                           }
                        }

                        }>
                            <button type="button" className="btn btn-warning searchBtn hidden-bg text-white">Search</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}