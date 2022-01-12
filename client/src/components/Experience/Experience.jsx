import React from 'react'
import './experience.scss'

export default function Experience() {
    return (
        <div className='experience' id='experience'>
            <div className="left">
                <div className="programming">
                    <h1>Programming</h1>
                    <p>
                        For the past 3 years I have completed a wide range of projects with the use of Java including work with 
                        recursion, sorting algorithms, operating systems design, and software quality assurance. C is another 
                        language I have spent a lot of time using, and have used it to complete projects involving operating systems 
                        design, systems software design, and computer graphics with OpenGL.
                    </p>

                    <p>
                        As a freelance web developer and game designer, my work is ever-improving. At this point in time, I have 
                        gained valuable experience in web development with the use of JavaScript, Python, Flask, and React to create 
                        dynamic web applications (including this one!). The largest project I have completed, and the one I am most proud of, is a 2D 
                        platformer led and designed by me and a group of 8 others. Through the use of Rust and SDL, we developed a 
                        full platformer with 5 distinct levels from the ground up.
                    </p>
                </div>
            </div>
            <div className="middle">
                <div className="leadership">
                    <h1>Leadership</h1>
                    <p>
                        I believe the ability to lead a group of developers and organize code in an effective manner is an invaluable
                        skill. During the proccess of building the 2D platformer mentioned earlier, each team member was promoted to
                        team manager for a full week. Their responsibilities included building weekly goals, holding team members 
                        accountable to meet said goals, testing and accepting pull requests, and writing a report at the end of the week. 
                        This experience pushed me to become a better leader, and I will carry the skills I learned with me for the rest of
                        my carreer.
                    </p>
                    <p>
                        As the former President of the Sigma Alpha Mu Fraternity, my skills in leadership and 
                        organization have been tested and expanded upon. The balance of being a computer science 
                        major and the workings of a president have been extremely challenging; however, finding 
                        balance within these skills has helped me to succeed in all aspects of my life.
                    </p>
                </div>
            </div>
            <div className="right">
                <div className="management">
                    <h1>Management</h1>
                    <p>
                        I also have experience working in the restaurant industry.
                        During the summer of 2021, I worked as an opening manager who performed managerial tasks including 
                        counting profits, organizing reservations, checking food and liquor deliveries, opening the restaurant, and 
                        managing worker attendance. My time working in management in the restaurant industry is something I have used 
                        throughout my college carreer, and has proved to greatly sharpen my interpersonal and communication skills.
                    </p>
                </div>
            </div>
        </div>
    )
}
