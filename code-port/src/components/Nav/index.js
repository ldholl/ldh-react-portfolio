import React, {useState} from 'react';

import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(){
    const pages= ['about', 'contact', 'projects', 'resume']
    
    return (
        <div>
            <p>Text</p>
       <header>
            <nav>
                <div className='nav-wrapper'>
                    <a href='#' id='header-name'>Lacy D. Holleman</a>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        {pages.map((page) => (
                            <li>
                                <a href={'#' + page} className='nav-links' key={capitalizeFirstLetter(page)}>{capitalizeFirstLetter(page)}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav> 
        </header>
                  
        </div>
    )
}

export default Nav;