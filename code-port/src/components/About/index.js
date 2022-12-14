import React from 'react';
import profileImage from '../../assets/media/profile-cropped-2.jpg'

function About(){

    return (     
        <section className='page-section' id='about-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col s12 m4 card z-depth-3' id='profile-card'>
                        <div className='card-image circle responsive-img'>
                        <img src={profileImage} id='profile-img' className=''/>
                        </div>
                        <div className='card-content'>
                            <p className=''>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                        </div>
                    </div>
                    <div className='col s12 m1'></div>
                        <div className='col s12 m7'>
                            <div className="card horizontal z-depth-3">
                                <div className="card-stacked">
                                 <div className="card-content">
                                 <h5>About Me</h5>
                                    <p>"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="card horizontal z-depth-3">
                                <div className="card-stacked">
                                 <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                                    <div>
                                    <ul>
                                        <li>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
                                        <li> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</li> 
                                        <li>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                                </div>
                            </div>
                         </div>
                         </div>
                         </div>
        </section>
    )
}

export default About;