import React, {Component} from 'react';
import classes from './home.module.css';
import InstagramQuery from "../../Utils/InstagramQuery";
import PageHeader from "../../UI/PageHeader/PageHeader";
class Home extends Component {

    state = {
        instagramImages : []
    }

    async componentWillMount() {
    const instaPosts = await InstagramQuery(5);
    console.log(instaPosts);
    const imageURLs = instaPosts.map(post => {
        return [post.node.display_url, post.node.shortcode]
    })
      this.setState({instagramImages:imageURLs});
    }
    render() {
        const instaImageURLs = this.state.instagramImages.map( img => {
            return (
                <a key={img} href={"https://www.instagram.com/p/" + img[1] } target="_blank" alt={""}>
                    <img src={img[0]} alt=""/>
                    <div className={classes.InstagramOverlay} >
                        <i className="fa fa-instagram"></i>
                    </div>
                </a>
             );
        })
        return (
            <div className={classes.Home}>
                <div id="carouselControls" className="carousel slide" data-ride="carousel" data-interval="4000">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselControls" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselControls" data-slide-to="1"></li>
                        <li data-target="#carouselControls" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/0190/6632/3044/files/lawrie-07.jpg?v=1584607120" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/0190/6632/3044/files/996CEC75-F89A-498A-A329-285261DE81AB.jpeg?v=1547676948" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/0190/6632/3044/files/78249136-7994-4D92-9A10-5DD7F473C166.jpeg?v=1547622724" alt="Third slide"/>
                        </div>
                    </div>
                </div>
                {instaImageURLs ? <PageHeader title="Follow Us On Instagram"/> : null}
                <div className={classes.InstagramImages}>
                    {instaImageURLs}
                </div>

            </div>
        );
    }
}

export default Home;