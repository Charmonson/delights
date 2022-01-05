import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component {





    render() {
        const menu = this.props.delights.map(delight => { /*array of elements to render*/
            return (
                <div key={delight.id} className="col-md-4 m-1">
                    <Card>
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

            </div>
            
        );
    }
}


export default Menu;