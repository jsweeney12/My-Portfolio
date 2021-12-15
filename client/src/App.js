import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch("/jakesweeney/home").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return (
        <div>
            {(typeof data.members === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                <div className="hello-message">Hi, my name is Jake</div>
            )}
        </div>
    );
}

export default App;
