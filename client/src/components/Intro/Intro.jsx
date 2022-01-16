import React from 'react';
import './intro.scss';
import {ArrowDownward} from '@material-ui/icons';
import { useEffect, useRef} from 'react';
import {init } from 'ityped';

export default function Menu() {

    const textRef = useRef()

    // displays a typing cursor effect with the use of ityped.js
    useEffect(()=> {
        init(textRef.current, {
            showCursor: true,
            strings: ["Web Developer", "Game Designer", "Content Creator"],
            backDelay: 1000,
        })
    },[])

    return (
        <div className='intro' id='intro'>
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
