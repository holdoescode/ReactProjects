import React from 'react';
import ButtonControls from './ButtonControls';
import styles from '../styles/timer.module.css';

function Timer(props) {
    const { handleStart, handleStop, handleReset, isRunning } = props;

    return (
        <>
            <div id="timer" className={styles.timer}>
                <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
            </div>

        
            <ButtonControls className={styles.container} time={props.time} handleStart={handleStart} handleStop={handleStop} handleReset={handleReset} isRunning={isRunning}/>
        </>
    )
};

export default Timer;