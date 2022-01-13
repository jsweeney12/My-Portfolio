import React from 'react'
import './contact.scss'
import {SendRounded} from '@material-ui/icons';

export default function Contact({messageSent, setMessageSent}) {
    return (
        <div className='contact' id='contact'>
            <div className="container">
                <input type="text" className='name' placeholder='Name'/>
            </div>
            <div className="container">
                <input type="text" className='email' placeholder='Email'/>
            </div>
            <div className="container">
                <textArea className='message' placeholder='Message'/>
            </div>
            <div className="container">
                <SendRounded className={'icon ' + (messageSent && 'sent')} onClick={()=>setMessageSent(!messageSent)}/>
                <div className={"wrapper " + (messageSent && 'sent')}>
                    <span>T</span>
                    <span>h</span>
                    <span>a</span>
                    <span>n</span>
                    <span>k</span>
                    <span>s</span>
                    <span>!</span>
                </div>
            </div>
        </div>
    )
}
