import React, {useState} from 'react';
import thumbResume from '../../assets/media/resume-thumbnail.png';

function Resume(){


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
    <div>
      <img src='' ></img>
    </div>
  </section>
  )
}

export default Resume;