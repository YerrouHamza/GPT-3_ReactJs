import React from 'react'


import { Feature } from '../../Components/index.js';


/* Get style */
import './features.css'


const Features = () => {

    /* creat content for features container. */
    const one_FeatureTitle = 'Improving end distrusts instantly ';
    const one_FeatureText = 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.';

    const tow_FeatureTitle = 'Become the tended active';
    const tow_FeatureText = 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.';

    const true_FeatureTitle = 'Message or am nothing';
    const true_FeatureText = 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.';

    const fore_FeatureTitle = 'Really boy law county';
    const fore_FeatureText = 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.';



    return (
        <div className='gpt3__features section-margin' id='features'>
            <div className='gpt3__features-section__container'>
                <div className='gpt3__features-section__container__title'>
                    <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                    <p>Request Early Access to Get Started</p>
                </div>
                <div className='gpt3__features-section__container__feature'>
                    <div className='gpt3__features-section__container__feature-content'>
                        <Feature title={one_FeatureTitle} text={one_FeatureText}/>
                    </div>
                    <div className='gpt3__features-section__container__feature-content'>
                        <Feature title={tow_FeatureTitle} text={tow_FeatureText}/>
                    </div>
                    <div className='gpt3__features-section__container__feature-content'>
                        <Feature title={true_FeatureTitle} text={true_FeatureText}/>    
                    </div>
                    <div className='gpt3__features-section__container__feature-content'>
                        <Feature title={fore_FeatureTitle} text={fore_FeatureText}/>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
