import React from 'react';
import ProjectList from '../ProjectList';

function Projects(){
    

    return(
        <section id='project-section'>
            <h2 className='section-header'>Portfolio</h2>
            <div className='container'>
            
                <ProjectList />
        
            </div>
        </section>
    )
}

export default Projects;