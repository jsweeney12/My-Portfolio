import React from 'react';
import './menu.scss';
import folder from './assets/white-folder.png';
import profile from './assets/white-resume.png';
import contact from './assets/white-contact.png';

export default function Menu() {

    let projects = "Projects";
    let about = "Experience";
    let contact_text = "Contact";

    let projects_image = <img src={folder} alt="folder" />
    let about_image = <img src={profile} alt="profile" />
    let contact_image = <img src={contact} alt="contact" />

    return (
        <div className='menu'>
            <div className="hello-message"> // Hi, my name is </div>
            <div className="name">Jake</div>

            <div className='projects-image'>
                {projects_image}
            </div>
            <div className='projects-text'>
                {projects}
            </div>

            <div className='about-image'>
                {about_image}
            </div>
            <div className='about'>
                {about}
            </div>

            <div className='contact-image'>
                {contact_image}
            </div>
            <div className='contact-text'>
                {contact_text}
            </div>
        </div>
    )
}
