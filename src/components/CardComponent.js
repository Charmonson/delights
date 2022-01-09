import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,CardGroup } from 'reactstrap';
import FoodPicture from '../images/banana.JPG';
import FoodPicture2 from '../images/cinnamon.JPG';
import FoodPicture3 from '../images/scone.JPG';
/*import './Cards.css';*/

class CardComponent extends Component {

    render() {

        return (
           
                <div className='cards__wrapper'>
                <h1 id="Subtitle">With treats for every occasion... </h1>
                <CardGroup>
                        <Card>
                            <CardImg width="100%" src={FoodPicture} />
                            <CardBody >
                            <CardText>
                                {'Fresh cupcakes made to please any crowd...'}
                                </CardText>
                            </CardBody>
                           
                        </Card>
                        <Card>
                            <CardImg width="100%" src={FoodPicture2} />
                            <CardBody>
                            <CardText>{'Menus that you can customize for any event.'}</CardText>
                            </CardBody>
                           
                        </Card>
                        <Card>
                            <CardImg width="100%" src={FoodPicture3} />
                            <CardBody>
                            <CardText>{'Freshly baked out of the oven scones. Warning: you might become OBSESSED!'}</CardText>
                            </CardBody>
                           
                        </Card>
                </CardGroup>
                </div>

          
           
        );
    }

}

export default CardComponent;