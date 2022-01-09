import React, { Component } from 'react';import { Card, CardImg, CardImgOverlay, 
    CardText, CardBody, CardTitle, CardGroup } from 'reactstrap';
import DelightInfo from "./DelightInfoComponent";
import Event from '../images/events.jpg';
import Event2 from '../images/events3.jpg';
import Event3 from '../images/events4.jpg';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {       
            selectedDelight: null
        };
    }

    render() {
       
        const menu = this.props.delights.map(delight => {
            return (
                
                <div key={delight.id} className= "col-md-5 m-4">              
                    <Card>
                        <CardImg width= "100%" src={delight.image} alt={delight.name}/>
                        <CardImgOverlay>
                            <CardTitle>{delight.name}</CardTitle> 
                        </CardImgOverlay>
                        <CardText>{delight.description}</CardText>
                    </Card>
                </div>           
            )
        })
        return (
            <div className= "container">
                 <h1 id="Subtitle">Delightful Menu </h1>
                <div className= "row">
                    {menu}
                </div>
                <DelightInfo delight={this.state.selectedDelight}/>

                <div className='cards__wrapper'>
                <h1 id="Subtitle">Contact me for Catering and Special Events </h1>
                <CardGroup>
                        <Card>
                            <CardImg width="100%" src={Event} />
                        </Card>
                        <Card>
                            <CardImg width="100%" src={Event2} />                        
                        </Card>
                        <Card>
                            <CardImg width="100%" src={Event3} />                   
                        </Card>
                </CardGroup>
                </div>
            </div>

        );
    }
}

export default Menu;