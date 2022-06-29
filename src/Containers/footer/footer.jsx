import React from 'react'

/* Get style */
import './footer.css'

/* Get logo */
import Logo from '../../assets/GPT-3.svg'


const Footer = () => {
    return (
        <div className='gpt3__footer'>
            <div className="gpt3__footer-continer">
                <div className='gpt3__footer-continer__first-content'>
                    <h2 className='gradient__text'>Do you want to step in to the future before others</h2>
                    <div className='gpt3__footer-continer__first-content__button'>
                        <button>Request Early Access</button>
                    </div>
                </div>

                <div className='gpt3__footer-continer__secound-content'>
                    <div className="gpt3__footer-continer__secound-content__left-column">
                        <img src={Logo} alt="GPT-3" />
                        <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                    </div>

                    <div className="gpt3__footer-continer__secound-content__right-column">
                        <div className="gpt3__footer-continer__secound-content__right-column-A">
                            <nav>
                                <h4>Links</h4>
                                <ul>
                                    <li>
                                        <a href="#">Overons</a>
                                    </li>
                                    <li>
                                        <a href="#">Social Media</a>
                                    </li>
                                    <li>
                                        <a href="#">Counters</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="gpt3__footer-continer__secound-content__right-column-B">
                            <nav>
                                <h4>Company</h4>
                                <ul>
                                    <li>
                                        <a href="#">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="gpt3__footer-continer__secound-content__right-column-C">
                            <nav>
                                <h4>Get in touch</h4>
                                <ul>
                                    <li>
                                        <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
                                    </li>
                                    <li>
                                        <a href="#">085-132567</a>
                                    </li>
                                    <li>
                                        <a href="#">info@payme.net</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="gpt3__footer-continer__last-content">
                    <p>© 2021 GPT-3 by Hamza Yerrou. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
