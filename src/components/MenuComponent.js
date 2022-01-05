import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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

    renderSelectedDelight(delight) {
        if (delight) {
            return (
                <Card>
                    <CardImg top src={delight.image} alt={delight.name} />
                    <CardBody>
                        <CardTitle>{delight.name}</CardTitle>
                        <CardText>{delight.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.delights.map(delight => { /*array of elements to render*/
            return (
                <div key={delight.id} className="col-md-6 m-1">
                    <Card onClick={() => this.onDelightSelect(delight)}>
                        <CardImg width="100%" src={delight.image} alt={delight.name} />
                        <CardImgOverlay>
                            <CardTitle>{delight.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
      
            );
        });
        
        return (
            <div className="container">   
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-6 m-1">
                        {this.renderSelectedDelight(this.state.selectedDelight)}
                    </div>
                </div>
            </div>
            
        );
    }
}


export default Menu;