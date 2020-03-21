import React from 'react';
import classes from './carousel.module.css';

const Carousel = (props) => {

    const carouselItems = props.images.map((img, index) => {
        if (index === 0) {
            return (
                <div className="carousel-item active">
                    <img width={props.carousel_item_width} height={props.carousel_item_height} src={img.originalSrc} alt={index}/>
                </div>
            )
        } else {
            return (
                <div className="carousel-item ">
                    <img width={props.carousel_item_width} height={props.carousel_item_height} src={img.originalSrc} alt={index}/>
                </div>
            )
        }
    });

    const carouselThumbnails = props.images.map((img, index) => {
        if (index === 0) {
            return (
                <li data-target="#carousel-thumb" data-slide-to={index} className="active">
                    <img src={img.originalSrc} width="70"/>
                </li>
            )
        } else {
            return (
                <li data-target="#carousel-thumb" data-slide-to={index}>
                    <img src={img.originalSrc} width="70" alt={index}/>
                </li>
            )
        }
    });

    return (
        <div className={classes.Carousel}>
                <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        {carouselItems}
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
                        {carouselThumbnails}
                    </div>
                </div>
            </div>
    );
};

export default Carousel;