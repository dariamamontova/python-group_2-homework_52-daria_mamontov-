import React, {Component} from 'react';
import './App.css';
import {Sidebar} from "./Components";
import {Card} from "./Components";

function Content(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 py-5 abv">
                    <Sidebar menu_1={'Avia Traffic'} menu_2={'Turkish Airlines'} menu_3={'S7'} menu_4={'Air Manas'}/>
                </div>
                <div className="col-md-9">
                    <h1 className="my-4 flight">Popular destinations</h1>
                    <hr/>
                    <div className="row my-5">
                        <Card from={"Dublin"} to={"Paris"} number={"34567"} date={"20/12/2019"} price={"356"}/>
                        <Card from={"Dublin"} to={"Paris"} number={"34567"} date={"20/12/2019"} price={"356"}/>
                        <Card from={"Dublin"} to={"Paris"} number={"34567"} date={"20/12/2019"} price={"356"}/>
                        <Card from={"Dublin"} to={"Paris"} number={"34567"} date={"20/12/2019"} price={"356"}/>
                        <Card from={"Dublin"} to={"Paris"} number={"34567"} date={"20/12/2019"} price={"356"}/>
                        <Card from={"Dublin"} to={"Paris"} number={"34567"} date={"20/12/2019"} price={"356"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Content}