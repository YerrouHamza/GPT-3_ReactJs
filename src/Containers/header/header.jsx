import React from 'react'

/* Get style */
import './header.css'

/* get the pictures */
import GPT3_MainPicture from '../../assets/Header Illustration.svg'; // get main header picture.
import GPT3_people from '../../assets/Group 81.svg'; // get the sing pepole picture.

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className='gbt3__header-contaner'>
                <h1 className='gradient__text'>
                    Let’s Build Something amazing with GPT-3 OpenAI
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <form className='gbt3__header-contaner__form'>
                    <input type="email" placeholder='Your Email Address'/>
                    <button type='submit'>Get Started</button>
                </form>
                <div className='gbt3__header-contaner__people'>
                    <img src={GPT3_people} alt="singin pepole" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>

            <div className='gbt3__header-air'>
                <img src={GPT3_MainPicture} alt="" />
            </div>
        </div>
    )
}

export default Header;
