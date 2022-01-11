import React from 'react';
import './intro.scss';
import self_portrait from './portfolio_image.png';
import background from './desk_blurred.png';
import {ArrowDownward} from '@material-ui/icons';

export default function Menu() {
    let portrait = <img src={self_portrait} alt="self_portrait" />
    let background_img = <img src={background} alt="background" />

    return (
        <div className='intro' id='intro'>
            <div className="background">
                {background_img}
            </div>
            <div className="left">
                {portrait}
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, my name is</h2>
                    <h1>Jake Sweeney</h1>
                    <h3>Freelance<span></span></h3>

                    <a href="#experience">
                        <ArrowDownward className='arrow'/>
                    </a>
                </div>
            </div>
        </div>
    )
}
