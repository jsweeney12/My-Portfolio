import React from 'react';
import './menu.css';
import folder from './assets/white-folder.png';
import profile from './assets/white-resume.png';
import contact from './assets/white-contact.png';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.projects = "Projects"
        this.about = "Resume"
        this.contact = "Contact"

        this.projects_image = <img src={folder} alt="folder" />
        this.about_image = <img src={profile} alt="about" />
        this.contact_image = <img src={contact} alt="contact" />

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick=() => {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

    render() {
        console.log(this.state);
        return (

            <div className='menu'>
                <div className="hello-message"> // Hi, my name is </div>
                <div className="name">Jake</div>

                <div className='projects-image'>
                    {this.projects_image}
                </div>
                <div className='projects' onClick={this.handleClick}>
                    {this.state.isToggleOn ?
                        'Projects'
                        :
                        transitionToProjects()}
                </div>

                <div className='about-image'>
                    {this.about_image}
                </div>
                <div className='about'>
                    {this.about}
                </div>

                <div className='contact-image'>
                    {this.contact_image}
                </div>
                <div className='contact'>
                    {this.contact}
                </div>
            </div>
        )
    }
}

function transitionToProjects() {

}
