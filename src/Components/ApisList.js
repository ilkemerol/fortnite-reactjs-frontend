import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';

import brDailyStorePage from "../Pages/brDailyStorePage";
import upComingItemsPage from "../Pages/upComingItemsPage";
import searchPlayerPage from "../Pages/searchPlayerPage";
import newsPage from "../Pages/newsPage";
import top10Page from "../Pages/top10Page";

import SearchBar from './SearchBar';
import BrNews from "./brNews";
import PatchNotes from "./PatchNotes";

import '../css/patchNotes.css';

library.add(faSkull)

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
                    <Route exact path="/top10Page" component={top10Page} />
                </Switch>
            </div>
        );
    }
}

const ApiListView = () => (
    <div>
        <SearchBar />
        <PatchNotes />
        {/*<FontAwesomeIcon className="text-white font-size-25" icon="skull" />*/}
        <h1 className="font-style text-center text-white newsColorChangeClazz">Breaking News</h1>
        <hr className="hr margin-bottom-30" />
        <BrNews />
        <h1 className="font-style text-center text-white margin-bottom-30">Awesome Tools</h1>
        <hr className="hr margin-bottom-30" />
        <div className="container margin-top-30 margin-bottom-100">
            <div className="row">
                <div className="col-lg-6 text-center margin-bottom-30">
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
            <br />
            <div className="row">
                <div className="col-lg-6 text-center">
                    <Link className="text-decoration-none" to="/top10Page">
                        <div className="customMainPageCard mainPagetopTen splash">
                            <p className="text-center text-white font-style font-size-25 customMainPageCardtext">Top 10</p>
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