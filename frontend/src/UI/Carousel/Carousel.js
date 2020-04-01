import React from 'react';
import classes from './carousel.module.css';
import { GlassMagnifier} from "react-image-magnifiers";

const Carousel = (props) => {

    const carouselItems = props.images.map((img, index) => {
        if (index === 0) {
            return (
                <div className="carousel-item active" onClick={props.clickHandler ? () => props.clickHandler(img.originalSrc) : null} >
                    <GlassMagnifier
                        style={{width:props.carousel_item_width +"px", height:props.carousel_item_height + "px", margin: "0 auto"}}
                        alt={index}
                        imageSrc={img.originalSrc}
                        imageAlt={img.id}
                        allowOverflow={true}
                        magnifierBorderColor={"rgba(255,255,255,.5)"}
                        magnifierSize={"60%"}
                        magnifierBorderSize={0}
                    />

                </div>
            )
        } else {
            return (
                <div className="carousel-item " onClick={() => props.clickHandler(img.originalSrc)}>
                    <GlassMagnifier
                        style={{width:props.carousel_item_width +"px", height:props.carousel_item_height + "px", margin: "0 auto"}}
                        alt={index}
                        imageSrc={img.originalSrc}
                        imageAlt={img.id}
                        allowOverflow={true}
                        magnifierBorderColor={"rgba(255,255,255,.5)"}
                        magnifierSize={"60%"}
                        magnifierBorderSize={0}

                    />
                </div>
            )
        }
    });

    const carouselThumbnails = props.images.map((img, index) => {
        if (index === 0) {
            return (
                <li data-target="#carousel-thumb" data-slide-to={index} className="active">
                    <img src={img.originalSrc} width="70" />
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
                    <div className="carousel-inner" role="listbox" >

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