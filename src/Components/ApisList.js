import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import brDailyStorePage from "../Pages/brDailyStorePage";

class ApisList extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={ApiListView} />
                    <Route exact path="/brDailyStorePage" component={brDailyStorePage} />
                </Switch>
            </div>
        );
    }
}

const ApiListView = () => (
    <div className="container">
        <div className="row">
            <div className="col-lg-4 text-center">
                <Link className="text-decoration-none" to="/brDailyStorePage">
                    <div className="padding-50 legendary splash">
                        <p className="text-center text-white font-style font-size-25">Daily Item Shop</p>
                    </div>
                </Link>
            </div>
            <div className="col-lg-4 text-center">
                <Link className="text-decoration-none" to="/brDailyStorePage">
                    <div className="padding-50 epic splash">
                        <p className="text-center text-white font-style font-size-25">Daily Item Shop</p>
                    </div>
                </Link>
            </div>
            <div className="col-lg-4 text-center">
                <Link className="text-decoration-none" to="/brDailyStorePage">
                    <div className="padding-50 rare splash">
                        <p className="text-center text-white font-style font-size-25">Daily Item Shop</p>
                    </div>
                </Link>
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