import React, {useState} from 'react';
import thumbResume from '../../assets/media/resume-thumbnail.png';
import Modal from '../Modal';

function Resume(){

const [isModalOpen, setState] = useState(false);

const toggleButton = () => {
    if(!isModalOpen){
        setState(true);
    }
    else{
        setState(false);
    }
}


return(  
  <div id='resume-section'>
    {isModalOpen && <Modal onClose={toggleButton}/>}
       {!isModalOpen && <div>
           <a className='resume-trigger' onClick={() => toggleButton()}>
            <img src={thumbResume} />
           </a>
           <i class="fa-solid fa-file-arrow-down"></i>
        </div>}
    </div>
  )
}

export default Resume;