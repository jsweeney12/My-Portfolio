import React from 'react'
import './navbar.scss'
import {Mail, Phone} from '@material-ui/icons';

// navbar largely inspired by the tutorial by Lama Dev:
// https://youtu.be/7WwtzsSHdpI
export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Jake Sweeney</a>
                    <div className="item-container">
                        <Mail className='icon'/>
                        <span>jakemsweeney12@gmail.com</span>
                    </div>
                    <div className="item-container">
                        <Phone className='icon'/>
                        <span>+1 (802) 777-0412</span>
                    </div>
                </div>
                <div className='right'>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
