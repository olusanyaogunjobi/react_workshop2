import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams, useLocation, Redirect } from 'react-router-dom';





const DemoRouter = () => {
    return (
        <div className = "container">
            <Router>
                <Header/>
                    <Switch>
                        <Route exact path = "/" component = {Welcome} />
                        <Route  path = "/home" component = {Home} />
                        <Route  path = "/person" component = {Person} />
                        <Route  path = "/about" component = {About} />
                        <Route  component = {NotFound} />

                    </Switch>
            </Router>
        </div>
    );
};


const Header = ()=> {
    return(

       < Fragment>
             <ul className = "nav nav-pills nav-fill bg-dark text-white">
                    <li className = "nav-item">
                        <Link className ="nav-link" to = "/">Welcome</Link>

                    </li>
                    <li className = "nav-item">
                        <Link className ="nav-link" to = "/home">Home</Link>

                    </li>
                    <li className = "nav-item">
                        <Link className ="nav-link" to = "/person">Person</Link>

                    </li>
                    <li className = "nav-item">
                        <Link className ="nav-link" to = "/about">AboutPerson</Link>

                    </li>
                    
             </ul>
       
       </Fragment>

    );

};

const Welcome = () => {
    // useHistory allows developer access to the React Routers history object

    return (
        <Fragment>
            Welcome Page
            <br/>
           
        </Fragment>
    );
};

const Home = () => {
    return (
        <Fragment>
            Home Page
        </Fragment>
    );
};

const Person = () => {
    return (
        <Fragment>
            Person Page
        </Fragment>
    );
};

const About = () =>{

    return(
        <Fragment>

            About Person Page
        </Fragment>
    );
};

const NotFound = () => {
    return (
        <Fragment>
            Page Noy Found
        </Fragment>
    );
};
export default DemoRouter;