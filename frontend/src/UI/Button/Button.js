import React from 'react';
import classes  from './button.module.css';



const Button = (props) => {
    const buttonStyling = props.Inverted ? classes.InvertedButton : classes.Button;
    const buttonType = props.type ? props.type : "button";
    return (
            <button
                className={buttonStyling}
                type={buttonType}
                onClick={props.onClick}
            >
                {props.title}
            </button>
    );
};


export default Button;
