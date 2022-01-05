import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DelightInfo from './DelightInfoComponent';
import { DELIGHTS } from '../shared/delights';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delights: DELIGHTS,
            selectedDelight:null
        };
    }

    onDelightSelect(delightId) {
        this.setState({selectedDelight: delightId});
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">S&S Delights by Catherine</NavbarBrand>
                </div>
                </Navbar>
                <Menu delights={this.state.delights} onClick={delightId => this.onDelightSelect(delightId)}/>
                <DelightInfo delight={this.state.delights.filter(delight => delight.id === this.state.selectedDelight)[0]}/>
            </div>
        );
    }
}

export default Main;