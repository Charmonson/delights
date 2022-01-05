import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delights: [
                {   
                    id:0,
                        name:'Wonderland Bakery',
                        image: require('../images/caramel.jpg'),
                        description: "Life is what you bake it "   
                    },
                    {   
                    id:1,
                        name:'Berry Short Cake',
                        image: require('../images/caramel.jpg'),
                        description: "Small but mighty flavor!"   
                    },
                    {	
                    id:2,
                        name:'Raspberry Dream',
                        image: require('../images/caramel.jpg'),
                        description: "Sweet dreams are made of these."
                    },
                    {	
                    id:3,
                        name:"Glutten Free Options ",
                        image: require('../images/caramel.jpg'),
                        description: "Pure, healthy and yummy."
                    },
                    {	
                    id:4,
                        name:"No Birthday Cupcake",
                        image: require('../images/caramel.jpg'),
                        description: "Red velvet goodness for no birthday days."
                    },
                    {
                    id:5,
                        name:"Vanilla Delight",
                        image: require('../images/caramel.jpg'),
                        description: "Flavorful elegance for every day."},

            ],
        };
    }
    render() {
        const directory = this.state.delights.map(delight => { /*array of elements to render*/
            return (
                <div key={delight.id} className="col">
                    <img src={delight.image} alt={delight.name}/>
                    <h2>{delight.name}</h2>
                    <p>{delight.description}</p>
                </div>
      
            );
        });
        
        return (
            <div className="container">
                <div className='row'>
                    <video autoPlay loop muted>
                    <source src={FoodVideo} type='video/mp4'/>
                    </video>
                </div>
                <div className="row">
                    {directory}
                </div>
            </div>
            
        );
    }
}


export default Menu;