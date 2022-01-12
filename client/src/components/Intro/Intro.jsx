import React from 'react';
import './intro.scss';
import self_portrait from './portfolio_image.png';
import background from './desk_blurred.png';
import {ArrowDownward} from '@material-ui/icons';
import { useEffect, useRef} from 'react';
import {init } from 'ityped';

export default function Menu() {
    let portrait = <img src={self_portrait} alt="self_portrait" />
    let background_img = <img src={background} alt="background" />

    const textRef = useRef()

    useEffect(()=> {
        init(textRef.current, {
            showCursor: true,
            strings: ["Web Developer", "Game Designer", "Content Creator"],
            backDelay: 1000,
        })
    },[])

    return (
        <div className='intro' id='intro'>
            {background_img}

            <div className="welcome">
                <div className="wrapper">
                    <h2>Hi, my name is</h2>
                    <h1>Jake Sweeney</h1>
                    <h3><span ref={textRef}></span></h3>

                    <a href="#projects">
                        <ArrowDownward className='arrow'/>
                    </a>
                </div>
            </div>
        </div>
    )
}
