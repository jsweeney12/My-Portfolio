import React from 'react';
import './contact.scss'
import {SendRounded} from '@material-ui/icons';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            emptyName: true,
            emptyEmail: true,
            emptyMessage: true,
            messageSent: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    handleSubmit(event) {
        if(this.state.name === '' || this.state.email === '' || this.state.message === '')  {
            if(this.state.name === '') {
                this.setState({emptyName: false});
            }
            if(this.state.email === '') {
                this.setState({emptyEmail: false});
            }
            if(this.state.message === '') {
                this.setState({emptyMessage: false});
            }
        }
        else {
            this.setState({messageSent: true});

            const email_data = {"name": this.state.name, "email": this.state.email, "message": this.state.message}

            fetch('/send_email', {
                method: "POST",
                body: JSON.stringify(email_data),
                headers: new Headers({
                    "content-type": "application/json"
                  })
            })
            .then(function (response) {
                return;
            });
        }
    };

    onInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.className;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className='contact' id='contact'>
                <form>
                    <div className="container">
                        <input type="text" className='name' placeholder={this.state.emptyName ? 'Name' : 'Please enter your name'} onChange={this.onInputChange}/>
                    </div>
                    <div className="container">
                        <input type="text" className='email' placeholder={this.state.emptyEmail ? 'Email' : 'Please enter your email'} onChange={this.onInputChange}/>
                    </div>
                    <div className="container">
                        <textarea className='message' placeholder={this.state.emptyMessage ? 'Message' : 'Please enter your message'} onChange={this.onInputChange}/>
                    </div>
                    <div className="container">
                        <SendRounded className={'icon ' + (this.state.messageSent && 'sent')} onClick={this.handleSubmit}/>

                        <div className={"wrapper " + (this.state.messageSent && 'sent')}>
                            <span>T</span>
                            <span>h</span>
                            <span>a</span>
                            <span>n</span>
                            <span>k</span>
                            <span>s</span>
                            <span>!</span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
