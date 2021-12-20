import React from 'react';
import '../styles/menu.css';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.projects = "Projects"
        this.profile = "Profile"
        this.contact = "Contact"
    }

    render() {
        return (
            <div className='menu'>
                <div className='projects'>
                    {this.projects}
                </div>
                <div className='profile'>
                    {this.profile}
                </div>
                <div className='contact'>
                    {this.contact}
                </div>
            </div>
        )
    }
}

//<img src={bubble} alt="bubble" />
