import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./assets/css/style.css";

import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Projects" component={Projects} />
                <Route path="/Contacts" component={Contacts} />
            </Switch>
        </BrowserRouter>
    );
}