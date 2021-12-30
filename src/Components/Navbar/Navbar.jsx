import React, {useState} from 'react'

/* Import Icons From React-icons */
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

/* Get style */
import './navbar.css';

/* Get Logo Image */
import GPT3_logo from '../../assets/GPT-3.svg';


/* Create the small component. */
function Mune() { // Menu
    return <>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#whatGPT3">What is GPT?</a></li>
            <li><a href="#possibility">Open AI</a></li>
            <li><a href="#features">Case Studies</a></li>
            <li><a href="#blog">Library</a></li>
        </ul>
    </>
}


const Navbar = () => {
    /* Create State For open and close menu */
    const [ToggleMenu, SetToggleMenu] = useState(false);

    /* style for close and open menu icons */
    const MenuIconsStyle = {
        color: 'white',
        fontSize: '27px'
    }

    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src={GPT3_logo} alt='GPT-3 Logo' />
                </div>
                <nav className='gpt3__navbar-links_elements'>
                    <Mune />
                </nav>
            </div>

            <div className='gpt3__navbar-sing'>
                <p>Sing in</p>
                <button type='button'>Sing up</button>
            </div>

            <div className='gpt3__navbar-menu'>
                {ToggleMenu
                    ? <RiCloseLine style={MenuIconsStyle} onClick={() => SetToggleMenu(false)} />
                    : <RiMenu3Line style={MenuIconsStyle} onClick={() => SetToggleMenu(true)} />
                }
                {ToggleMenu && (
                    <div className='gpt3__navbar-menu_contaner scale-up-center'>
                        <div className='gpt3__navbar-menu_contaner-links'>
                            <Mune />
                            <div className='gpt3__navbar-menu_contaner-links_sing'>
                                <p>Sing in</p>
                                <button type='button'>Sing up</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Navbar;