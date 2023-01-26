import React from 'react';
import profileImage from '../../assets/media/profile-cropped-2.jpg'

function About(){

    return (     
        <section className='page-section' >
         <div className='mobile-namer'><p>Lacy D. Holleman</p></div>   
        <div className='container'id='about-section'>
            <div className='skill-section'>
                <div className='skillset glass-shadow'>
                    <h2 className='bold-title'>Skillset</h2>
                    <p className='skill-text'>Front-end web developer with a background in law and the humanities. Recently earned a certificate in Full-Stack Web Development from George Washington University’s Coding Bootcamp. Able to leverage experiences to resolve problems that require detailed analysis, creative solutions, or strong communication skills.</p>
                    <div className='skill-list'>
                    <ul><h4>General</h4>
                        <li>JavaScript ES6+</li>
                        <li>HTML/CSS</li>
                        <li>Git</li>
                        <li>Node</li>
                        <li>First & Third-Party APIs</li>
                    </ul>
                    <ul><h4>Databases</h4>
                        <li>SQL & MYSQL2</li>
                        <li>MongoDB/Mongoose</li>
                        <li>NoSQL</li>
                        <li>GraphQL</li>
                        <li>REST</li>
                    </ul>
                    <ul><h4>Frameworks</h4>
                        <li>Express</li>
                        <li>React</li>
                        <li>Handlebars</li>
                        <li>jQuery</li>
                    </ul>
                    <div className='ongoing'>
                    <h4>Currently Pursuing:</h4>
                    <p>Python, Anglular, Sass</p>
                    </div>
                    </div>
                </div>

            </div>

            <div className='bio-section glass-shadow'>
                
                <div className='profile-div'></div>
                    
                <p className='profile-title' id='about'>About</p>
                <p className='profile-title' id='me'>Me</p>   
                <div className='bio-text'>
                    
                    <p >After receiving my law degree and working in field for some time, I realized that while my need for analytical work was being satisfied, there were no real opportunities for creative or unorthodox problem-solving. After a period of self-reflection, I determined that a change in career paths was probably in order. <br></br><br></br>Web development was an attractive option, considering the wide-ranging skills it requires, as well as its constantly-evolving nature. I earned a certificate in Full-Stack Web Development from a George Washington University coding bootcamp.</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default About;