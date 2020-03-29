import React, {Component} from 'react';
import classes from './product.module.css';
import {Link} from "react-router-dom";
import ProductModal from './ProductModal/ProductModal';
import Button from "../../../UI/Button/Button";

class Product extends Component {
    state = {
        showModal: false,
    };

    handleModalShow = () => {
        this.setState({showModal:true});
    };

    handleModalHide = () => {
        this.setState({showModal:false});

    };

    render() {
        const productURL = this.props.productInfo.productType.toLowerCase().replace(" ", "-");
        const productIdURL = productURL + "/" + this.props.productInfo.id;

        return (
            <div>
                <div className={classes.Product}>
                    <h4>{this.props.productInfo.title}</h4>
                    <Link  to={productIdURL}>
                        <img src={this.props.productInfo.images[0].originalSrc} alt="Not Available" />
                    </Link>
                    {/*<button type="button"*/}
                    {/*        onClick={this.handleModalShow}*/}
                    {/*        className="btn btn-dark">Quick View</button>*/}

                    <Button Inverted={false} title={'Quick View'} onClick={this.handleModalShow} />
                </div>
                {this.state.showModal ?
                    <ProductModal
                        show={this.state.showModal}
                        onHide={this.handleModalHide}
                        productIdURL={productIdURL}
                        productInfo={this.props.productInfo}/>
                        : null}
            </div>
        );
    }
}

export default Product;