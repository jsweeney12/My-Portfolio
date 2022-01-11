import React from 'react';
import './intro.scss';
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
        <div className='intro' id='intro'>
            
        </div>
    )
}
