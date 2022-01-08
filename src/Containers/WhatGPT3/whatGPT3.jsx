import React from 'react'
import { Feature } from '../../Components/index.js';

/* Get style */
import './whatGPT3.css'


const WhatGPT3 = () => {

    /* creat content for Head features */
    const headFeatureTitle = 'What is GPT-3';
    const headFeatureText = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.';

    /* creat content for features container. */
    const first_FeatureTitle = 'Chatbots';
    const first_FeatureText = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. ';

    const secound_FeatureTitle = 'Knowledgebase';
    const secound_FeatureText = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b';

    const last_FeatureTitle = 'Education';
    const last_FeatureText = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b';


    return (
        <div className='gpt3__whatgpt3 section__maring' id='whatGPT3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title={headFeatureTitle} text={headFeatureText} />
            </div>

            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <a href="#">Explore The Library</a>
            </div>

            <div className='gpt3__whatgpt3-container'>
                <Feature title={first_FeatureTitle} text={first_FeatureText} />
                <Feature title={secound_FeatureTitle} text={secound_FeatureText} />
                <Feature title={last_FeatureTitle} text={last_FeatureText} />
            </div>
        </div>
    )
}

export default WhatGPT3;
