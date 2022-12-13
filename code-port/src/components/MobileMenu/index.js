import React from 'react';

function MobileMenu({}){

    return(
<div>
        <li><a onClick={() => handlePageChange('about')}>About</a></li>
        <li><a onClick={() => handlePageChange('contact')}>Contact</a></li>
        <li><a onclick={() => handlePageChange('projects')}>Projects</a></li>
        <li><a onClick={() => handlePageChange('resume')}>Resume</a></li>
 
        </div>
    )

}
export default MobileMenu;