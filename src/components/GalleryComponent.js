import React, { Component } from 'react';
import { Card, CardImg, CardGroup } from 'reactstrap';
import Picture1 from '../images/Cat1.jpg';
import Picture from '../images/Square.jpg';

class Gallery extends Component {

    render() {
        return (
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardGroup>
                            <Card>
                                <CardImg width="100%" src={Picture1} />

                            </Card>
                            <Card>
                                <CardImg width="100%" src={Picture} />

                            </Card>
                        </CardGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;