import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classes from './productmodal.module.css';
import Carousel from "../../../../UI/Carousel/Carousel";
import Modal from 'react-bootstrap/Modal';

class ProductModal extends Component {

    state ={
        amount : this.props.productInfo.priceRange.maxVariantPrice.amount,
        price: ""
    };

    componentWillMount() {
        if(this.state.amount === "0.0"){
            this.setState({price:"Price on Request"});
        }
        else if(this.state.amount.split(".")[1].length < 2){
            this.setState({price:"$"+this.state.amount + "0" + " USD"});
        }
        else {
            this.setState({price:"$"+this.state.amount + " USD"});
        }
    }

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
            <Modal
                {...this.props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={classes.ProductModal}
            >
                <Modal.Body className={classes.ProductModalBody}>
                    <button id="modalclosebutton" type="button" className="close" onClick={this.props.onHide} aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                     </button>
                    <h4>{this.props.productInfo.title}</h4>
                    <h6>{this.state.price}</h6>

                    <Carousel carouselThumbnails={carouselThumbnails} carouselItems={carouselItems}/>
                    <Link to={this.props.productIdURL} onClick={this.props.handleModalHide} ><p >See Product Details</p></Link>

                </Modal.Body>
            </Modal>
        );
    }
}

export default ProductModal;