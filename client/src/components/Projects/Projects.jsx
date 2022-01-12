import React from 'react'
import './projects.scss'
import {VideogameAsset, Web, InsertDriveFile} from '@material-ui/icons';

export default function Projects() {
    return (
        <div className='projects' id='projects'>
            <div className="platformer">
                <a href="https://github.com/jsweeney12/CS_1666_Platformer" target="_blank">
                    <div className="container">
                        <VideogameAsset className='icon'/>
                    </div>
                </a>
                <h1>2-D Platformer</h1>
                <p>
                    A 2-D Platformer I worked on alongside 8 other talented programmers. We build the entire game engine from the 
                    ground up, and it is something I feel lucky to have been a part of. I personally was a member of the physics
                    engine team, so I specifically worked on box colliders, player movement abilities, portal creation, conservation 
                    of momentum, and level design.
                </p>
            </div>
            <div className="portfolio-website">
                <a href="https://github.com/jsweeney12/My-Portfolio" target="_blank">
                    <div className="container">
                        <Web className='icon'/>
                    </div>
                </a>
                <h1>Portfolio Website</h1>
                <p>
                    This website!! I'm pretty early in the freelance web development game, and this is my first major project. I am 
                    tremendously proud of what I've created, and have learned more than I could have thought possible throughout
                    the proccess. The website is built fully with React.js, but more details can be found on the github repo linked 
                    above. 
                </p>
            </div>
        </div>
    )
}


