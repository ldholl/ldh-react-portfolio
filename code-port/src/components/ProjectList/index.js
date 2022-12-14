import React from 'react';


function ProjectList(){

    const projects = [
        {
            title: 'Cinematic Spirits',
            description: "An application that matches a user's chosen film or a randomly generated film to a thematically appropriate cocktail",
            link: 'https://ldholl.github.io/Cinema-Spirits-ldh/',
            repos: 'https://github.com/ldholl/Cinema-Spirits-ldh',
            i: '0'
        },
        {
            title: 'Pocket Portraits',
            description: "An application that allows forgetful users to store acquaintances' basic biographical informaction and facts about them.",
            link: 'https://pocket-portraits.herokuapp.com/',
            repos: 'https://github.com/ldholl/ldh-pocket-portraits22',
            i: '1'
        },
        {
            title: 'Employee Tracker',
            description: "An application to make tracking and creating company departments, titles, and employees simpler.",
            link: 'https://drive.google.com/file/d/1j3JuY9-rICLbyxqc2jh_Ce2-sbKF5Vnk/view',
            repos: 'https://github.com/ldholl/ldh-employeeTracker',
            i: '2'

        },
        {
            title: 'LDHoll Weather-getter',
            description: "A weather app that allows users to search for any city and returns that city's 5-day forecast using a weather API.",
            link: 'https://ldholl.github.io/ldh-weather-api/',
            repos: 'https://github.com/ldholl/ldh-weather-api',
            i: '3'
        },
        {
            title: 'MongoDB Thought Storage',
            description: 'A back-end application that uses MongoDB to store data about Users, User Thoughts, User Friends, and Reactions to Thoughts',
            link: 'https://drive.google.com/file/d/1MT_12sDiZqLaQ0OFZhq_OpRsBV-zjAo4/view',
            repos: 'https://github.com/ldholl/ldh-NoSQL',
            i: '4'
        }
    ]


    return (

            <div className='row'>
              
              {/* {projects.map((project) => (
                <div className='col s12 m6 project-container' key={project.title}>
                    <a href={project.link}>
                    <img src={require(`../../assets/media/projects/${project.i}.jpg`)}
                        alt={project.title} 
                        className='project-thumbnail' />
                        <div className='project-text'>
                    <h6 className='project-title'>{project.title}</h6>
                    <p className='project-desc'>{project.description}</p>
                    </div> 
                    </a>
                </div>
              ))} */}
{projects.map((project) => (

             <div className='col s12 m6 project-holder'>
                <div className='card project-card'>
                    <div className='card-image'>
                        <img src={require(`../../assets/media/projects/${project.i}.jpg`)} />
                        <span className='card-title'>{project.title}</span>
                    </div>
                    <div className='card-content project-desc'>
                        <p>{project.description}</p>
                    </div>
                    <div className='card-action'>
                        <a href={project.link}>Visit</a>
                        <a href={project.repos}>Repository</a>
                    </div>
                </div>
              </div>
            ))}

             </div>
    )
}

export default ProjectList;