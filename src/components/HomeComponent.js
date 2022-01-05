import React from 'react';
import FoodVideo from './video/croissant.mp4';


const Home =()=> {
    return (
        <div className='full-screen-video-container'>
            <video autoPlay loop muted>
                <source src={FoodVideo} type='video/mp4'/>
            </video>
            <div class= 'full-screen-video-content'>
                Sweet & Savory Delights by Catherine

            </div>

        </div>
    )
}
export default Home;