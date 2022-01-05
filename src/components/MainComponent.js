import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
                <Header/>
                <Menu delights={this.state.delights} onClick={delightId => this.onDelightSelect(delightId)}/>
                <DelightInfo delight={this.state.delights.filter(delight => delight.id === this.state.selectedDelight)[0]}/>
                <Footer/>
            </div>
        );
    }
}

export default Main;