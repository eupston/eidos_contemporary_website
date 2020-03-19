import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classes from './productmodal.module.css';
import Carousel from "../../../../UI/Carousel/Carousel";

class ProductModal extends Component {
    render() {

        const carouselItems = this.props.productInfo.images.map((img, index) => {
            if (index === 0) {
                return (
                    <div className="carousel-item active">
                        <img width="300" height="300"  src={img.originalSrc} alt={index}/>
                    </div>
                )
            } else {
                return (
                    <div className="carousel-item ">
                        <img width="300" height="300" src={img.originalSrc} alt={index}/>
                    </div>
                )
            }
        });

        const carouselThumbnails = this.props.productInfo.images.map((img, index) => {
            if (index === 0) {
                return (
                    <li data-target="#carousel-thumb" data-slide-to={index} className="active">
                        <img src={img.originalSrc} width="70" alt={index}/>
                    </li>
                )
            } else {
                return (
                    <li data-target="#carousel-thumb" data-slide-to={index}>
                        <img src={img.originalSrc} width="70"  alt={index}/>
                    </li>
                )
            }
        });


        return (
                <div className="modal fade" id={this.props.productInfo.title} tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className={classes.CloseButton} >
                                <button id="modalclosebutton" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className={classes.ProductModal}>
                                <h5>{this.props.productInfo.title}</h5>
                            </div>
                            <Carousel carouselThumbnails={carouselThumbnails} carouselItems={carouselItems}/>
                            <div className={classes.FullDetails}>
                                <Link to={this.props.productIdURL} onClick={this.props.handleModalHide} ><p >See Full Product Details</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ProductModal;