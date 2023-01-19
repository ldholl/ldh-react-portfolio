import React, {useState} from 'react';
import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';
import Resume from '../Resume';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(){
    const pages= ['about', 'projects', 'resume']
    const [currentPage, setCurrentPage] = useState('about');


    function handlePageChange(newPage){
        setCurrentPage(newPage);
        console.log(currentPage);
    }


    
    return (
        <div>

       <header>
            <nav>
                <div className='header'>
                    <div className='nav-name'>
                    <a href='#' id=''>Lacy D. Holleman</a>
                    </div>
                    {/* <a href="#" data-target="mobile-demo" class="sidenav-trigger" onClick={()=> toggleMenu()}><i class="material-icons">menu</i></a> */}
                    <ul id='navigation-bar' className=''>
                        {pages.map((page) => (
                            <li>
                                <a href={'#' + page} className='navigation-links' key={page} onClick={() => handlePageChange(page)}>{capitalizeFirstLetter(page)}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav> 
    {/* <div id='sidenav-container'>
    <ul className='sidenav' id='mobile-demo'>

        {isMenuOpen && <MobileMenu />
    }
    </ul>
    </div> */}

        </header>
        <div className='section-div transp-35'></div>
        <div className='section-div transp-15'></div>
        <div className='section-div z-depth-5'></div> 
        <main>
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact/>}
        {currentPage === 'resume' && <Resume />}
        {currentPage === 'projects' && <Projects />}
        </main>
        <div className='section-div'></div>
        <div className='section-div transp-15'></div>
        <div className='section-div transp-35'></div>        
        </div>
    )
}

export default Nav;