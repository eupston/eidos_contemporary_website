import React, {Component} from 'react';

class ProductDetails extends Component {
    render() {
        const images = this.props.productInfo.images.map(img => {
            return <img src={img.originalSrc} alt="" height={400} width={400}/>
        });
        return (
            <div>
                <h1>{this.props.productInfo.title}</h1>
                {images}
            </div>
        );
    }
}

export default ProductDetails;