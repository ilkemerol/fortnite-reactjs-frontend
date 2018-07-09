import React from 'react';
import '../css/bootstrap.css';

import logo from '../images/logo.png';


export default class Navbar extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
            <a href="../" className="navbar-brand font-style text-white"><img src={logo} alt="logo" style={{width: '40px'}}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a href="../" className="nav-link font-style text-white">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/brDailyStorePage" className="nav-link font-style text-white">Daily Store</a>
                    </li>
                    <li className="nav-item">
                        <a href="/upComingItemsPage" className="nav-link font-style text-white">Upcoming Items</a>
                    </li>
                    <li className="nav-item">
                        <a href="/top10Page" className="nav-link font-style text-white">TOP 10</a>
                    </li>
                </ul>
            </div>
        </nav>
      );
    }
}