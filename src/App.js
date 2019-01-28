import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Components";
import {Footer} from "./Components";
import {Content} from "./Content";

class App extends Component {
    render() {
        return (
            <div>
                <Header name={'Booking'}/>
                <Content/>
                <Footer company={'(c) Copyright'} contacts={'2 Wall Street, New York'}/>
            </div>
        );
    };
};

export default App;
