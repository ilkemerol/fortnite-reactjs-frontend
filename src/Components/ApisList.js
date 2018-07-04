import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import brDailyStorePage from "../Pages/brDailyStorePage";
import upComingItemsPage from "../Pages/upComingItemsPage";
import searchPlayerPage from "../Pages/searchPlayerPage";
import newsPage from "../Pages/newsPage";

import SearchBar from './SearchBar';
import BrNews from "./brNews";

class ApisList extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={ApiListView} />
                    <Route exact path="/brDailyStorePage" component={brDailyStorePage} />
                    <Route exact path="/upComingItemsPage" component={upComingItemsPage} />
                    <Route exact path="/searchPlayerPage" component={searchPlayerPage} />
                    <Route exact path="/newsPage" component={newsPage} />
                </Switch>
            </div>
        );
    }
}

const ApiListView = () => (
    <div>
        <SearchBar />
        <h1 className="font-style text-center text-white"><u>Breaking News</u></h1>
        <BrNews />
        <h1 className="font-style text-center text-white"><u>Awesome Tools</u></h1>
        <div className="container margin-top-30">
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