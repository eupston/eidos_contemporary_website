import React from 'react';
import classes from './logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{"fontSize":props.size +"em"}}>
            <h4 >eidos</h4>
            {props.subtitle ? <h6>Contemporary Jewelry</h6> : null}
        </div>
    );
};

export default Logo;
