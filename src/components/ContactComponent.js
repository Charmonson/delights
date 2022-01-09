import React, { Component } from 'react';
import { Card, CardImg, CardGroup } from 'reactstrap';
import Picture3 from '../images/Cat3.JPG';
import Picture4 from '../images/order.jpg';

class Contact extends Component {

    render() {
        return (
            <div className='cards__container'>

                <div className='cards__wrapper'>
                <h1 id="Subtitle">I'm delighted you're here! </h1>
                    <div className='cards__items'>

                        <CardGroup>
                            <Card>
                                <CardImg width="100%" src={Picture3} />
                            </Card>
                            <Card>
                                <CardImg width="100%" src={Picture4} />
                            </Card>
                        </CardGroup>
                    </div>
                    <h1 id="Subtitle">Baking some goodness for you... </h1>
                </div>
            </div>
        );
    }
}

export default Contact;