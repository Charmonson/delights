import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DELIGHTS } from '../shared/delights';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delights: DELIGHTS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home/>
            );
        };


        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' render={() => <Menu delights={this.state.delights} />} />
                    <Route path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Main;