import React from 'react';
import thumbResume from '../../assets/media/resume-thumbnail.png';

function Resume(){
  
return(  
  <div>
        <div>
           <a className='modal-trigger' onClick={toggleModal}>
            <img src={thumbResume} />
           </a>
        </div>
    </div>
  )
}

export default Resume;