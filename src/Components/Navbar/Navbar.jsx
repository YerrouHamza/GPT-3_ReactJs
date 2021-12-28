import React from 'react'

/* Import Icons From React-icons */
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'

/* Get style */
import './navbar.css';

/* Get Logo Image */
import GPT3_logo from '../../assets/GPT-3.svg';

const Navbar = () => {
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src={GPT3_logo} alt='GPT-3 Logo' />
                </div>
                <nav className='gpt3__navbar-links_elements'>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#whatGPT3">What is GPT?</a>
                        </li>
                        <li>
                            <a href="#possibility">Open AI</a>
                        </li>
                        <li>
                            <a href="#features">Case Studies</a>
                        </li>
                        <li>
                            <a href="#blog">Library</a>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}

export default Navbar;