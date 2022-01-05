import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DelightInfo from "./DelightInfoComponent";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDelight:null
        };
    }

    onDelightSelect(delight) {
        this.setState({selectedDelight: delight});
    }


    render() {
        const menu = this.props.delights.map(delight => { /*array of elements to render*/
            return (
                <div key={delight.id} className="col-md-4 m-1">
                    <Card onClick={() => this.onDelightSelect(delight)}>
                        <CardImg width="100%" src={delight.image} alt={delight.name} />
                        <CardImgOverlay>
                            <CardTitle>{delight.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
      
            );
        })        
        return (
            <div className="container">   
                <div className="row">
                    {menu}
                </div>
                <DelightInfo delight={this.state.selectedDelight}/>
            </div>
            
        );
    }
}


export default Menu;