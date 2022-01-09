import React from 'react';
import CardComponent from './CardComponent';
import HeroComponent from './HeroComponent';
import GalleryComponent from './GalleryComponent';



/*change this component like the tutorial*/

function Home() {
    return (
      <>
        <HeroComponent />
        <CardComponent/>
        <GalleryComponent/>

      </>
    );
  }
  

export default Home;