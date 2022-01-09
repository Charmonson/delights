import React from 'react';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']; //array of css classes 

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle : STYLES[0];
    //if not it will chose the first item of button styles array

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize : SIZES [0];
    //class Name return below allows you check 
    return (
        <Link to= '/sign-up' className='btn-mobile'> 
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            > 
            {children}
            </button>
        </Link>
    );
};