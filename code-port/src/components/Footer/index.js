import React from 'react';

function Footer(){

    return (
        <footer id='footer-section' className='page-footer'>
            <div className='container'>
                <div id='footer-div'>
                <a className='footer-links' href="https://github.com/ldholl"><i className="fa-brands fa-github "></i></a>
                <a className='footer-links' href='www.linkedin.com/in/lacy-holleman-a7429512'><i className="fa-brands fa-linkedin" ></i></a>
                <a className='footer-links' href='https://stackoverflow.com/users/20770941/ldholl'><i className="fa-brands fa-stack-overflow"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer