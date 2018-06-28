import React, { Component } from 'react';
import '../css/bootstrap.css';


export default class Navbar extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand font-style">Fortnite APIs</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link font-style">Refresh <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-style">API</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link font-style">User ID</a>
                    </li>
                </ul>
            </div>
        </nav>
      );
    }
}