import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './app.scss';

function App() {
    const [data, setData] = useState(0);

    useEffect(() => {
        fetch("/jakesweeney/home")
        .then(
            res => res.status
        )
        .then(
            data => {
                setData(data)
            }
        )
    }, [])

    return (
        <div>
            {(data !== 201) ? (
                <p>ERROR: {data}</p>
            ) : (
                <div className='app'>
                    <Navbar></Navbar>
                    <div className='website-segments'>
                        <Menu/>
                        <Experience/>
                        <Projects/>
                        <Contact/>
                    </div>
                </div>
            )}
        </div>
    );
}
export default App;
