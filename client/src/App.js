import React, {useState, useEffect} from 'react'
import './styles/body.css';
import Menu from './components/Menu/Menu';

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
                <Menu></Menu>
            )}
        </div>
    );
}
export default App;
