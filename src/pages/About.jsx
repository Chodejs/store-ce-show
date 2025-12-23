import {useState, useEffect} from 'react';
import * as tools from '../Cfunc/app';

export default function About() {



    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count -1);
    };


    const startTimer = useEffect(() => {
        setInterval(()=> {
            setTimer(prevTimer => prevTimer + 1);
        }, 2000);
    }, []);

    return (
        <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h1>About Us</h1>
            <p>We are a very professional boilerplate.</p>
            <button onClick={increaseCount} style={{fontSize: 'lg', padding: '8px', width: '20%'}}>Increase Counter</button>
            <button onClick={decreaseCount} style={{fontSize: 'lg', padding: '8px', width: '20%'}}>Decrease Counter</button>
            <h1>
                The count is currently: {count}
            </h1>
            <h1>
                The Timer is Currently at: {timer}
            </h1>
        </section>
    );
}