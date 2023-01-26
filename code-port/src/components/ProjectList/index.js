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
            title: 'Weather-Getter',
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
        },
        {
            title: 'Paws-and-Claws',
            description: 'A MERN application that allows users to create profiles and schedule appointments with a mobile pet groomer.',
            keyTech: "React, Apollo-Client, GraphQL, Express/Apollo-Server-Express, Mongoose, MongoDB, JSON-WebToken, and Bcrypt.",
            link: 'https://paws-and-claws.herokuapp.com/',
            repos: 'https://github.com/ldholl/ldh-paws-and-claws',
            i: '5'
        }
    ]


    return (

<div className='project-container'>
              

{projects.map((project) => (

             <div className='project-holder glass'>

                    <div className='project-image'>
                        <h3 className='project-title'>{project.title}</h3>
                        <img className='project-jpg' src={require(`../../assets/media/projects/${project.i}.jpg`)} />  
                    </div>

                    <div className='project-desc'>
                        <p>{project.description}</p>
                        <p>Key Technologies: {project.keyTech}</p>
                    </div>

                    <div className='project-links'>
                        <a className='site-link' href={project.link}>View</a>
                        <a className='repo-link' href={project.repos}>Repository</a>
                    </div>
              </div>

            ))}

</div>

    )
}

export default ProjectList;