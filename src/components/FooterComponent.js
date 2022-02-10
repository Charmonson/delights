import React from 'react';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-message'>
        <p className='footer-subscription-heading'>
          Let me know which delights I can make for you!
        </p>
       {/* 
        <Button buttonStyle='btn--outline'>
            <NavLink className="nav-link2" to={"/contact"}>
                Contact
            </NavLink>
       </Button>*/}
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Get Social</h2>
            <a role="button" className="btn btn-link" href="https://www.facebook.com/PastryChefCatherine">
              Facebook</a>
          </div>
          <div class='footer-link-items'>
            <h2> Text Your Order</h2>
            <a role="button" className="btn btn-link" href="tel:+18305702215">
               830-570-2215</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Email</h2>
            <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co">
              catherinessweetandsavory@gmail.com</a>
         </div>
        </div>
      </div>
      <div>
        <small class='website-rights'> <i className='fa fa-birthday-cake fa-fw' />
          <span class="ml-2">S&S Delights by Catherine © 2022</span></small>
      </div>

    </div>
  );
}

export default Footer;