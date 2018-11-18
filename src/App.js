import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import dropdown1 from "./components/DropdownMenu/dropdownMenu1";
import dropdown2 from "./components/DropdownMenu/dropdownMenu2";
import Publishing from "./components/Publishing/Publishing";
import About from "./components/About/About";

import Highcharts from 'highcharts';
import {
  withHighcharts
} from 'react-jsx-highcharts';

import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <Route exact path="/" component={dropdown1} />
        <Route path="/experiment1" component={dropdown2} />
        <Route path="/about" component={About} />
        <Route path="/publishing" component={Publishing} />
        <Footer/>
      </div>
    );
  }
}

export default withHighcharts (App, Highcharts);