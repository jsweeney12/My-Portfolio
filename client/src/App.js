import React, {useState, useEffect} from 'react'
import './styles/body.css';
import './styles/menu.css';
import Menu from './components/Menu';

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
                console.log(data)
            }
        )
    }, [])

    return (
        <div>
            {(data !== 201) ? (
                <p>ERROR: {data}</p>
            ) : (
                <div>
                    <div className="hello-message"> // Hi, my name is </div>
                    <div className="name">Jake</div>
                    <Menu></Menu>
                </div>
            )}
        </div>
    );
}
export default App;
