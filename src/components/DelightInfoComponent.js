import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DelightInfo extends Component {

    renderInformation(information) {
        if (information) {
            return (<div className="col-md-5 m-1">
                <h4>More Info</h4>
                {information.map(information => <div key={information.id}>
                    <p>{information.text}</p>
                    <p>{information.author}</p>
                    <p>{information.allergens}</p>
                </div>)}
            </div>)
        }
    }
    
    renderDelight(delight){
        return (<div className="col-md-7 m-1">
            <Card>
                <CardImg top src={delight.image} alt={delight.name} />
                <CardBody>
                    <CardTitle>{delight.name}</CardTitle>
                    <CardText>{delight.description}</CardText>
                </CardBody>
            </Card>
        </div>);
    }

    render() {
        const delight = this.props.delight;
        if (delight){
            return <div className="row">
                {this.renderDelight(delight)}
                {this.renderInformation(delight.information)}
            </div>;
        }
        return <div/>;
    }
}

export default DelightInfo;