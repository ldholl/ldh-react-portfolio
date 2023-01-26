import React, {useState} from 'react';
// import DocViewer from 'react-doc-viewer';


function Resume(){

const handleDL = () => {
  fetch('campResume.pdf').then(response => {
    response.blob().then(blob => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement('a');
      alink.href= fileURL;
      alink.download = 'campResume.pdf';
      alink.click()
    })
  })
}

return(  

  <section id='resume-section' className='page-section'>
    <div className='glass links-container'>
      <p>Links to full resume:</p>
      <a href='https://docs.google.com/document/d/1F9-CDojqTcyKX9glUnA0GovBfYrSqrz-/edit?usp=sharing&ouid=112105677342921003781&rtpof=true&sd=true'>Google Docs</a><br></br>
      <a href='/resume/dl' onClick={handleDL}>Download PDF</a>
      
    </div>

    <div className='glass resume-container'>
    <h2 className='centered'>Experience and Education</h2>
    <div className='contact-info'>
        <p>2251 Eisenhower Avenue<br></br>Alexandria, VA 22314<br></br>(870) 736-2692 <br></br>lacy.holleman@gmail.com<br></br> <span className='bold'>Socials</span>: <a href='https://github.com/ldholl'>GitHub</a> | <a href='http://bit.ly/3Xveyt0'>LinkedIn</a> </p>
    </div>

    <div className='work-xp'>
      <h3 className='centered'>Work Experience</h3>
      {/* NGFA */}
      <p>
        <span className='bold'>National Grain and Feed Association</span>, Arlington, VA <br></br><span className='italic'>Manager, Legal Affairs and Arbitration</span>, November 2020 - November 2021
      <ul>
        <li>Drafted notices, default judgments, and other documents relevant to the arbitration department.</li>
        <li>Monitored over 50 ongoing arbitration cases, ensured that deadlines were met and parties were aware of case status</li>
        <li>Maintained detailed case records, including all communications and developments.</li>
        <li>Performed cursory research on legal questions relevant to cases or the Association’s conduct.</li>
      </ul>
      </p>
      {/* Dawn & Dusk */}
      <p>
        <span className='bold'>Dawn & Dusk Coffee Bar</span>, Pentagon<br></br><span className='italic'>Manager</span>, September 2019 - Onset of COVID-19
      <ul>
        <li>Oversaw company integration into Pentagon location, including developing Standard Operating Procedures and employee guides, curating a menu of regularly shifting offerings, and adjusting service policies to maximize productivity.</li>
        <li>Developed strong connections with customers, often resulting in daily purchases and visits to a secondary location.</li>
      </ul>
      </p>
      {/* Vet Clinic */}
      <p>
        <span className='bold'>Veterans Legal Clinic</span>, Winston-Salem, NC <br></br><span className='italic'>Student Advocate</span>, August 2018 - January 2019
      <ul>
        <li>Reviewed applications submitted by veterans who were pursuing an upgrade in discharge characterization.</li>
        <li>Interviewed roughly ten potential clients weekly, discussing confidential records and traumatic military experiences. Analyzed military, governmental, medical, and legal documents for relevant information.</li>
        <li>Drafted memos summarizing candidate situations for review by supervising attorney.</li>
        <li>Wrote upgrade petitions for review by the Army Board for Correction of Military Records.</li>
      </ul>
      </p>
      </div>

    <div className='education'>
      <h3 className='centered'>Education</h3>
      <p><span className='bold'>George Washington University</span>, Washington, DC<br></br>Certificate in Full Stack Web Development, January 2023</p>
      <p><span className='bold'>Wake Forest University School of Law</span>, Washington, DC<br></br><span className='italic'>Juris Doctor</span>, May 2019</p>
    </div>

    </div>


  </section>
  )
}

export default Resume;