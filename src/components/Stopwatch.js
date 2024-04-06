import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import styles from '../styles/stopwatch.module.css';

function Stopwatch() {
    const [ isRunning, setIsRunning ] = useState(false);
    const [ time, setTime ] = useState(0); 

    const handleStart = () => {
        setIsRunning(true);
    }

    const handleStop = () => {
        setIsRunning(false);

    }

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    }

   useEffect(() => {

        let interval = null;

        if (isRunning) {
            interval = setInterval(() => setTime(prevTime => prevTime + 10), 10);
        }

        else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);

        }}
        , [isRunning]
    )

    return (
        <div id="stopwatch" className={styles.stopwatchWrapper}>
            <h1 className={styles.h1}>Stopwatch Project</h1>
            <Timer time={time} handleStart={handleStart} handleStop={handleStop} handleReset={handleReset} isRunning={isRunning}/>
        </div>
    )
}

export default Stopwatch;