# My-Portfolio
A Website designed fully by me to display my portfolio, resume, and general information about me.

Link to Website: https://www.jakesweeney.me

## Technologies
### Frontend
- React.js
- material-ui for any icons used
- Sass for styling and responsive design
### Backend
- Python
- Flask
- Flask-Mail
### Deployment
- Custom domain configured with Namecheap
- Deployed on Heroku

### Directory path

    .
    ├── client                  
    │   ├── public      
    │   │   ├── index.html
    │   │   └── manifest.json
    │   └── src
    │       ├── components
    │       │   ├── Contact
    │       │   │   ├── Contact.jsx
    │       │   │   └── contact.scss
    │       │   ├── Experience
    │       │   │   ├── Experience.jsx
    │       │   │   └── Experience.scss
    │       │   ├── Intro
    │       │   │   ├── Intro.jsx
    │       │   │   └── intro.scss
    │       │   ├── Menu
    │       │   │   ├── Menu.jsx
    │       │   │   └── menu.scss
    │       │   ├── Navbar
    │       │   │   ├── Navbar.jsx
    │       │   │   └── Navbar.scss
    │       │   └── Projects
    │       │       ├── Projects.jsx
    │       │       └── Projects.scss
    │       ├── App.jsx
    │       ├── app.scss
    │       ├── global.scss
    │       └── index.js
    ├── server
    │   └── server.py
    └── README.md

### To run on your local machine:
1. clone the repository on your computer
2. Go to the client directory
3. Enter 'npm i' or 'yarn install' on the command line depending on which package manager you use
4. Enter 'npm start"
5. Go to the server directory
6. installl flask, flask-mail, and create a virtual environment (tutorial here: https://flask.palletsprojects.com/en/2.0.x/installation/ )
7. Start the flask application (tutorial here: https://flask.palletsprojects.com/en/2.0.x/quickstart/ )
8. refresh the page, and voila!
