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
            <nav className='navigation-bar'>

                <a href='/' id='header-namer' className='sticker header-span'>Lacy D. Holleman</a>

                    {/* <a href="#" data-target="mobile-demo" class="sidenav-trigger" onClick={()=> toggleMenu()}><i class="material-icons">menu</i></a> */}
                <div className='header-list'>
                    
                    {pages.map((page) => (
                    
                    <a href={'#' + page} className='navigation-links' key={page} onClick={() => handlePageChange(page)}>
                    <img src={require(`../../assets/media/bubble${page}.png`)} className='bubble-button' />
                    </a>

                    ))}
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
        <div className='section-div transp-25'></div> 
        <div className='section-div transp-15'></div>
        <main>
        {currentPage === 'about' && <About />}
        {currentPage === 'resume' && <Resume />}
        {currentPage === 'projects' && <Projects />}
        </main>
      
        <div className='section-div transp-15'></div>
        <div className='section-div transp-25'></div>
        <div className='section-div transp-35'></div>        
        </div>
    )
}

export default Nav;