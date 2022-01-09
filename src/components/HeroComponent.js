import React from 'react';
import FoodVideo from './video/bread.mp4';
import {Button} from './Button';


function HeroComponent() {
    return (
        <div className='full-screen-video-container'>
            <video autoPlay loop muted>
                <source src={FoodVideo} type='video/mp4'/>     
            </video> 

            <div class= 'full-screen-video-content'>

            <h1>Make your Day</h1>
            <h1>More Delightful!</h1>
            <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('I want to Open Menu Tab')}>
                    GET MENU 
            </Button>
            </div>
        </div> 
        );
}



export default HeroComponent;