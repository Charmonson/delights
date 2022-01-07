import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,CardGroup } from 'reactstrap';
import FoodPicture from '../images/caramel.jpg';
import './Cards.css';

class CardComponent extends Component {

    render() {

        return (
            <div className='cards__container'>

                <div className='cards__wrapper'>
                <CardGroup>
                        <Card>
                            <CardTitle>{'Hello'}</CardTitle>
                            <CardImg width="100%" src={FoodPicture} />
                            <CardText>{'You are Amazing'}</CardText>
                            <CardBody>{'This is aweosme'}</CardBody>
     
                        </Card>
                        <Card>
                            <CardTitle>{'Hello'}</CardTitle>
                            <CardImg width="100%" src={FoodPicture} />
                            <CardText>{'You are Amazing'}</CardText>
                            <CardBody>{'This is aweosme'}</CardBody>
     
                        </Card>
                        <Card>
                            <CardTitle>{'Hello'}</CardTitle>
                            <CardImg width="100%" src={FoodPicture} />
                            <CardText>{'You are Amazing'}</CardText>
                            <CardBody>{'This is aweosme'}</CardBody>
     
                        </Card>
                </CardGroup>
                </div>

            </div>
           
        );
    }

}

export default CardComponent;