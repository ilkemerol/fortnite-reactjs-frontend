import React, { Component } from 'react';

import '../css/searchBar.css';

export default class SearchBar extends React.Component {
    render() {
      return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <form action="" method="POST" className="form form--search">
                            <div className="form__field">
                                <input className="outline_0" type="search" placeholder="Outfit or Player Name" />
                                <input type="submit" value="Search" />
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-2">
                        <Link to="/brDailyStorePage">
                            <button type="button" className="btn btn-warning searchBtn text-white">Search</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}