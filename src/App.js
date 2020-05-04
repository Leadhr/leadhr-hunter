// src/App.js

import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import GoogleChart from "./components/GoogleChart";

function App() {
    return (
        <div className>
            {/* Don't forget to include the history module */}
            <Router history={history}>
                <header>
                    <NavBar />
                </header>
                <Switch>
                    <Route path="/" exact />
                    <PrivateRoute path="/profile" component={Profile} />
                </Switch>
            </Router>
            <div>
                <div style={{ marginTop: 80, marginLeft: 474, width: "50%" }}>
                    <h6 style={{marginTop: 10}}>
                        Leadhr is building solutions for organizations to better
                        understand and map their organizational culture using
                        assessment and survey data. 
                    </h6>
                    <h6 style={{marginTop: 10}}>
                        Our first tool is the Work
                        Styles Assessment, which measures an individual’s
                        values, interests, and preferences. It also helps teams
                        understand how they fit together, and in what ways
                        they’re likely to succeed and fail at certain types of
                        tasks.
                    </h6>
                    <h6 style={{marginTop: 10}}>
                        Data collected from this assessment runs through
                        our scoring algorithm and produces X-Y coordinates that
                        can be used to plot where individuals fall on our Work
                        Styles model.
                    </h6>
                </div>
                <GoogleChart />
            </div>
            <footer>
                <div className="wrapper">
                    <div className="inner text-right">
                        <a href="mailto:hello@leadhr.co">hello@leadhr.co</a>
                        <img src="https://leadhr.co/wp-content/themes/leadhr/img/mark.svg" alt="Leadhr"></img>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
