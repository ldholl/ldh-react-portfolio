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

const handleDL = () => {
  fetch('ldh-resume.pdf').then(response => {
    response.blob().then(blob => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement('a');
      alink.href= fileURL;
      alink.download = 'ldh-resume.pdf';
      alink.click()
    })
  })
}

return(  
  <section id='resume-section' className='page-section'>
    <h2>Resume</h2>
    {isModalOpen && <Modal onClose={toggleButton}/>}
       {!isModalOpen && 
       <div id='resume-container'>
           <a className='resume-trigger' onClick={toggleButton}>
            <img id='resume-thumbnail' className='z-depth-5' src={thumbResume} alt="A thumbnail of Lacy's resume" />
           </a>
           <i id='magnifying' className="fa-solid fa-magnifying-glass"></i>
        </div>}
        <a href='/resume/dl' onClick={handleDL}><i className="fa-solid fa-file-arrow-down blue-text"></i></a>
    </section>
  )
}

export default Resume;