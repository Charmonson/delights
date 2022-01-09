import React, { Component } from 'react';
import { Card, CardImg,  CardTitle, CardBody, CardGroup, CardImgOverlay} from 'reactstrap';
import Picture1 from '../images/Cat1.jpg';
import Picture from '../images/Square.jpg';

class Gallery extends Component {

    render() {
        return (
        <div className='cards__container'>
        <div className='cards__wrapper'>

        <CardGroup>
        <Card>
            <CardImg width="100%" src={Picture1} />
            
        </Card>
        <Card>
            <CardImg width="100%" src={Picture} />
            <CardImgOverlay>
            <CardTitle>{''}</CardTitle>

            </CardImgOverlay>
               
        </Card>
        </CardGroup>
    </div>
</div>
   
        );
    }

}

export default Gallery;