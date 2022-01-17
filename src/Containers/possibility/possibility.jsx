import React from 'react'

/* Get style */
import './possibility.css'

/* Get Logo Image */
import Possibility_img from '../../assets/possibility_img.svg'

const Content_link = () => {
    return (
        <a href="#">Request Early Access to Get Started</a>
    )
}

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__maring' id='possibility'>
            <div className='gpt3__possibility-container'>
                <div className='gpt3__possibility-container__picture'>
                    <img src={Possibility_img} alt="Possibility image" />
                </div>

                <div className='gpt3__possibility-container-content'>
                    <Content_link />
                    <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <Content_link />
                </div>
            </div>
        </div>
    )
}

export default Possibility;
