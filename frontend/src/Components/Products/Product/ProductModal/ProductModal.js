import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Carousel from "../../../../UI/Carousel/Carousel";
import Modal from '../../../../UI/Modal/Modal';

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
        return (
            <Modal title={this.props.productInfo.title} {...this.props}>
                    <h6>{this.state.price}</h6>
                    <Carousel
                        images={this.props.productInfo.images}
                        carousel_item_width={"300"}
                        carousel_item_height={"300"}
                    />
                    <Link to={this.props.productIdURL} onClick={this.props.handleModalHide} ><p >See Product Details</p></Link>
            </Modal>
        );
    }
}

export default ProductModal;