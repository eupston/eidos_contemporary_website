import React from 'react';
import classes from './ourstory.module.css';
import PageHeader from "../../UI/PageHeader/PageHeader";

const OurStory = () => {
    return (
        <React.Fragment>
            <PageHeader title="Our Story"/>
                <div className={classes.OurStory}>
                    <div className={classes.OurStoryItem}>
                         <div className={classes.OurStoryText}>
                            <h5>Deborah Alexander</h5>
                            <p>
                                Deborah Alexander studied comparative religions at Victoria University in Wellington, New Zealand and jewelry making at West Dean College in Sussex, England.
                                <br/><br/>
                                She makes jewelry that expresses her interest in Indian, Hindu and Buddhist culture using silver and high karat gold . These pieces comment on and reference cultural belief systems which are beginning to be abandoned in that continent’s rush into modernity and western-ism. The multi-layered poetic world-view expressed in East Indian thought and ornamentation in everyday life fascinate her. She sensitively combines elaborate ornament with a moderistic simplicity of form holding these two apparent contradictions in balance.
                            </p>
                         </div>
                        <img src="https://cdn.shopify.com/s/files/1/0190/6632/3044/files/alexander.jpg?v=1585210722" alt="" width='350' height='350'/>
                    </div>
                    <div className={classes.OurStoryItem}>
                        <div className={classes.OurStoryText}>
                            <h5>Gordon Lawrie</h5>
                            <p>
                                Gordon Lawrie was trained at Sir John Cass College and the Royal College of Art in London: he obtained a MA in Metal arts from the University of Texas at El Paso and a MFA from New Mexico State University. His work has been widely exhibited in Europe and America and has been recently published in Metalsmith and Jewelry Moves.Among many awards are a scholarship from the Society of North American Goldsmiths for outstanding artistic ability and a first prize in the Diamonds Today Competition organized by De Beers.His work is in several important collections including the National Museum of Scotland and the Royal Mint.
                                <br/><br/>
                                Process is central to his work, which is fabricated and architectonic in form. The minimal lines of his work understate the complex interplay between its personal and universal references. He is very drawn to myth,history and symbolism,and many pieces have a conceptual element that references a personal experience. This narrative is not exclusive but draws on the universality of human feeling, engaging the viewer in a dialogue.
                            </p>
                        </div>
                        <img src="https://cdn.shopify.com/s/files/1/0190/6632/3044/files/lawrie.jpg?v=1585210722" alt="" width='350' height='350'/>
                    </div>
                </div>
        </React.Fragment>
    );
};

export default OurStory;
