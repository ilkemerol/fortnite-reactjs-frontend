import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import brDailyStorePage from "../Pages/brDailyStorePage";
import upComingItemsPage from "../Pages/upComingItemsPage";

import SearchBar from './SearchBar';

class ApisList extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={ApiListView} />
                    <Route exact path="/brDailyStorePage" component={brDailyStorePage} />
                    <Route exact path="/upComingItemsPage" component={upComingItemsPage} />
                </Switch>
            </div>
        );
    }
}

const ApiListView = () => (
    <div>
        <SearchBar />
        <div className="container">
            <div className="row">
                <div className="col-lg-6 text-center">
                    <Link className="text-decoration-none" to="/brDailyStorePage">
                        <div className="customMainPageCard mainPagedailyStore splash">
                            <p className="text-center text-white font-style font-size-25 customMainPageCardtext">Daily Item Shop</p>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-6 text-center">
                    <Link className="text-decoration-none" to="/upComingItemsPage">
                        <div className="customMainPageCard mainPagedailyStore splash">
                            <p className="text-center text-white font-style font-size-25 customMainPageCardtext">Upcoming Items</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
  </div>
);

const PageView = () => (
    <Router>
      <Route component={ApisList} />
    </Router>
);

export default PageView;