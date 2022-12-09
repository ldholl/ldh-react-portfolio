import React, {useState} from 'react';
import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';
import Resume from '../Resume';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(){
    const pages= ['about', 'contact', 'projects', 'resume']
    
    const [currentPage, setCurrentPage] = useState('about');

    function handlePageChange(newPage){
        setCurrentPage(newPage);
        console.log(currentPage);
    }



    return (
        <div>

       <header>
            <nav>
                <div className='nav-wrapper'>
                    <a href='#' id='header-name'>Lacy D. Holleman</a>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        {pages.map((page) => (
                            <li>
                                <a href={'#' + page} className='nav-links' key={page} onClick={() => handlePageChange(page)}>{capitalizeFirstLetter(page)}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav> 
        </header>
        <main>
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact/>}
        {currentPage === 'resume' && <Resume />}
        {currentPage === 'projects' && <Projects />}
        </main>       
        </div>
    )
}

export default Nav;