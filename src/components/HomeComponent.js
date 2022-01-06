import React from 'react';
import FoodVideo from './video/bread.mp4';
import {Button} from './Button';


function Home () {

    return (
        <div className='full-screen-video-container'>
            <video autoPlay loop muted>
                <source src={FoodVideo} type='video/mp4'/>
            </video>
            <div class= 'full-screen-video-content'>
               

            <div>
                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    GET MENU 
                </Button>
            </div>
        
        </div>
           
       </div>
       
    );
}
export default Home;