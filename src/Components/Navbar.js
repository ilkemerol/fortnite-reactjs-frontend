import React, { Component } from 'react';
import '../css/bootstrap.css';


export default class Navbar extends React.Component {
    render() {
      let brand = <a href='#'>Project Name</a>;
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Refresh <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">API</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">User ID</a>
                    </li>
                </ul>
            </div>
        </nav>
      );
    }
}