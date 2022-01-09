import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Let me know which delights I can make for you!
        </p>

        <Button buttonStyle='btn--outline'>Order</Button>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Browse</h2>
            <ul className="list-unstyled">
                <li><a href="/home">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/about">Events</a></li>
              
                </ul>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Call</Link>
            <Link to='/'>Email</Link>
          

          </div>
        </div>
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            <h2>Get Social</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
          </div>
        </div>
      </div>
    
        <div>
          <small class='website-rights'> <i className='fa fa-birthday-cake fa-fw'/>
          <span class="ml-2">S&S Delights by Catherine © 2022</span></small>        
        </div>
     
    </div>
  );
}

export default Footer;