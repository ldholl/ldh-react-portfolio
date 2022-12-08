import React from 'react';
import profileImage from '../../assets/media/profile-cropped-2.jpg'

function About(){

    return (
       <div>   
        <div className='section-div'></div>  
        <section id='about-section'>
            <h2 className='section-header'>About</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col s6'>
                        <img src={profileImage} />
                    </div>
                    <div className='col s6'>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
            </div>
        
        </section>
        </div>
    )
}

export default About;