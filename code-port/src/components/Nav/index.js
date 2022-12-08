import React, {useEffect} from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers'

function Nav(){

    return (
        <header>
            <nav>
                <div className='nav-wrapper'>
                    <a href='#' id='header-name'>Lacy D. Holleman</a>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li><a href='#about' className='nav-links'>About</a></li>
                        <li><a href='#contact' className='nav-links'>About</a></li>
                        <li><a href='#resume' className='nav-links'>About</a></li>
                    </ul>
                </div>
            </nav> 
        </header>
    )
}

export default Nav;