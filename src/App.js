import React, { Component } from 'react';
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/homepage/homePage";
import HatPage from "./Pages/hatPage";
import Navbar from "./components/Navbar/navbar";
import './App.css';

export default class App extends Component
{

    render()
    {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/hatpage" component={HatPage} />
                </Switch>
            </Router>

        )
    }

}

