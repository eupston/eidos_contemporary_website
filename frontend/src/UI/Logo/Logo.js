import React from 'react';
import classes from './logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo} >
            <h4 style={{"font-size":props.size +"em"}}>eidos</h4>
            {props.subtitle ? <h6>Jewelry</h6> : null}
        </div>
    );
};

export default Logo;
