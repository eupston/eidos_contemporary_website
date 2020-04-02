import React from 'react';
import classes from './ethicaltrading.module.css';
import PageHeader from "../../UI/PageHeader/PageHeader";

const EthicalTrading = () => {
    return (
        <React.Fragment>
            <PageHeader title="Ethical Sourcing"/>
            <div className={classes.EthicalTrading}>
                <div className={classes.EthicalTradingItem}>
                    <div className={classes.EthicalTradingText}>
                        <h5>Ethical Trading and Materials</h5>
                        <p>
                            For over 40 years, we have worked to source our materials ethically. We use 100% recycled Harmony Metals and fair trade stones in our designs. There are no established guidelines as yet for fair trade metal and gemstone mining. So we have established our own.
                            <br/><br/>
                            We use Australian Argyle diamonds, Canadian diamonds cut in the USA/Canada, and diamonds from Botswana. The first two countries have very tight mining controls and respect indigenous rights as well as having a good record of social services. The export of Botswanan diamonds supports the entire country’s social efforts and is the product of enlightened European investment.
                            <br/><br/>
                            In general, we believe that the best way for us to be true to our ethical intentions is to offer complete transparency to our customers. We pass along to them all of the information we can find about the origins of our diamonds, stone and materials. Most of the other stones we use we buy from individual dealers and miners we know and trust.
                            <br/><br/>
                            All our own work is made in Santa Fe and we stock a huge selection of alternative metals using man-made stones from designers mainly from Europe. As well as 18kt and platinum jewelry from Europe and the USA.
                            <br/><br/>
                            We do not stock products from Chinese/Balinese/Thai sweat shops. Our designers are mainly either individuals or small group workshops.
                        </p>
                        <h5>Our Diamonds – Ecologically Controlled</h5>
                        <p>
                            Our Australian diamonds are not only conflict free but mined and cut by folks that get great pay and medical care, and strict ecological control by the Australian Government. They have GIA certificates and are finely cut stones.
                            <br/><br/>
                            These are the ARGYLE diamonds from Australia which we have cut by a German company. Ranging from pale champagne to red brown cognac, these are unique and truly special. We mount them in Gordon’s signature tulip settings and in 18ct red and palladium white recycled gold. We are more than happy to work on client’s ideas so that they can realize their dreams.
                            <br/><br/>
                            We also have some of the best cut white diamonds anywhere. They are from Botswana and are triple 000 ideal cut with AGS certificates. Rare indeed.
                            <br/><br/>
                            As our customers celebrate miles stones in their life, we feel it important to maintain a traceable and unbroken line to the source of the materials.
                        </p>
                        <h5>Gem Stones</h5>
                        <p>
                            Sapphires are among the world’s most beautiful stones. In recent times some of the stones have been subjected to a mass of treatments, ranging from the dubious to the fraudulent.
                            <br/><br/>
                            Clients need a seasoned guide to avoid buying something that is of no value. Our direct connections with the mines in mean we have extensive knowledge of source and treatment.
                            <br/><br/>
                            Man made stones can be very beautiful (and very inexpensive) and we work happily with the Chatham gems (Sapphires, Emeralds) grown in San Francisco.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EthicalTrading;
