import React, {useState, useEffect} from 'react'
import './styles/body.css';
import './styles/menu.css';
import bubble from './assets/white-bubble.png';

function App() {
    const [data, setData] = useState(0);

    useEffect(() => {
        fetch("/jakesweeney/home", {
            headers : {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            }
        })
        .then(
            res => res.status
        )
        .then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    //console.log(data);
    return (
        <div>
            {(data !== 201) ? (
                <p>ERROR: {data}</p>
            ) : (
                <div>
                    <div className="hello-message">Hi, my name is Jake</div>
                </div>
            )}
        </div>
    );
}
//<img src={bubble} alt="bubble" />
export default App;
