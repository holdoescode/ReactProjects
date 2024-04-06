import React from 'react';
import styles from '../styles/buttonControls.module.css';

function ButtonControls(props) {
    const { handleStart, handleStop, handleReset, isRunning} = props;

    return (
        <div className={styles.buttonWrapper} spacing="2em">
        {isRunning === true ? (<button className={styles.button} onClick={handleStop}>Stop</button>) : (<button className={styles.button} onClick={handleStart}>Start</button>)}
        <button className={styles.button} onClick={handleReset}>Reset</button>
        </div>
    )
}

export default ButtonControls;