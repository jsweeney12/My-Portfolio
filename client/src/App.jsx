import React, {useState, useEffect} from 'react'
import Menu from './components/Menu/Menu';
import Experience from './components/Experience/Experience';
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
        <div className='app'>
            {(data !== 201) ? (
                <p>ERROR: {data}</p>
            ) : (
                <div className='website-segments'>
                    <Menu/>
                    <Experience/>
                </div>
            )}
        </div>
    );
}
export default App;
