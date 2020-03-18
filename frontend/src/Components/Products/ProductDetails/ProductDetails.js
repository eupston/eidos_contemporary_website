import React, {Component} from 'react';
import classes from './productdetails.module.css';

class ProductDetails extends Component {

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
        const images = this.props.productInfo.images.map(img => {
            return <img src={img.originalSrc} alt="" height={200} width={200}/>
        });

        const carouselItems = this.props.productInfo.images.map((img, index) => {
            if (index == 0) {
                return (
                    <div className="carousel-item active">
                        <img width="400" height="400"  src={img.originalSrc} alt={index}/>
                    </div>
                )
            } else {
                return (
                    <div className="carousel-item ">
                        <img width="400" height="400" src={img.originalSrc} alt={index}/>
                    </div>
                )
            }
        });

        const carouselThumbnails = this.props.productInfo.images.map((img, index) => {
            if (index == 0) {
                return (
                    <li data-target="#carousel-thumb" data-slide-to={index} className="active">
                        <img src={img.originalSrc} width="70"/>
                    </li>
                )
            } else {
                return (
                    <li data-target="#carousel-thumb" data-slide-to={index}>
                        <img src={img.originalSrc} width="70"/>
                    </li>
                )
            }
        });

        const currencyCode = this.props.productInfo.priceRange.maxVariantPrice.currencyCode;
        // const price = new Intl.NumberFormat(locale, {
        //                     style: 'currency',
        //                     currency: currencyCode
        //                 }).format(amount);

        return (
            <div className={classes.ProductDetails}>
                <div className={classes.Carousel}>
                    <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
                        <div class="carousel-inner" role="listbox">
                            {carouselItems}
                        </div>
                        <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        <div className={classes.CarouselThumbnails}>
                            {carouselThumbnails}
                        </div>
                    </div>
                </div>
                <div className={classes.ProductInfo}>
                    <h4>{this.props.productInfo.title}</h4>
                    <h6>{this.state.price}</h6>
                    <hr></hr>
                    <p>{this.props.productInfo.description}</p>
                    <button type="button" className="btn btn-outline-dark">Make Request</button>
                    <hr></hr>
                    <div className={classes.SocialMedia}>
                        <p>Contact Us</p>
                        <a href="https://www.facebook.com/eidosjewelry/" className="fa fa-facebook"/>
                        <a href="https://www.instagram.com/eidoscontemporary/" className="fa fa-instagram"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductDetails;