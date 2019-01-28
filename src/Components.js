import React from 'react';

function Header(props) {
    return (
        <nav className="navbar navbar-dark bg-dark p-0">
            <div className="container">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{props.name}</a>
            </div>
        </nav>
    );
};

function Sidebar(props) {
    return (
        <nav className="d-none d-md-block sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <h4 className="flight">Aviacompanies</h4>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.menu_1}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.menu_2}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.menu_3}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.menu_4}</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};


function Card(props) {
    return (
        <div className="col-md-4 my-3">
            <div className="card">
                <div className="card-header text-white bg-danger">From {props.from} to {props.to}</div>
                <div className="card-body">
                    <p className="card-text"><span className="flight">Flight №:</span> {props.number}</p>
                    <p className="card-text"><span className="flight">Date:</span> {props.date}</p>
                    <p className="card-text"><span className="flight">Price:</span> $ {props.price}</p>
                    <a className="btn btn-dark" href="#">Buy ticket</a>
                </div>
            </div>
        </div>
    );
};

function Footer(props) {
    return (
        <footer className="footer text-white bg-dark ">
            <p className="text-center">{props.company}. Contacts: {props.contacts}</p>
        </footer>
    );
};

export {Header}
export {Sidebar}
export {Card}
export {Footer}