import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DELIGHTS } from './shared/delights';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delights: DELIGHTS
        };
    }
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">S&S Delights by Catherine</NavbarBrand>
                </div>
                </Navbar>
                <Menu delights={this.state.delights} />
            </div>
        );
    }
}

export default App;
