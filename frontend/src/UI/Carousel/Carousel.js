import React from 'react';
import classes from './carousel.module.css';

const Carousel = (props) => {
    return (
        <div className={classes.Carousel}>
            <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    {props.carouselItems}
                </div>
                <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                <div className={classes.CarouselThumbnails}>
                    {props.carouselThumbnails}
                </div>
            </div>
        </div>
    );
};

export default Carousel;