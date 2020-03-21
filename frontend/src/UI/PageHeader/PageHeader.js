import React, {Component} from 'react';
import classes from './pageheader.module.css';

class PageHeader extends Component {
    render() {
        return (
            <div className={classes.PageHeader}>
                <h5>{this.props.title}</h5>
            </div>
        );
    }
}

export default PageHeader;