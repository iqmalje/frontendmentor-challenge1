import React from 'react';
import './resultpanel.css';
import Data from './data/data.json';

function Resultpanel() {
    console.log(Data);
    const average = Math.round((Data[0].score + Data[1].score + Data[2].score + Data[3].score)/4)
  return (
    <div className="panel">
        <p className="result">Your Result</p>
        <div className="score">
            <div className="big">{average}</div>
            <p className="small">of 100</p>
        </div>
        <p className="class">Great</p>
        <p className="desc">You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  )
}

export default Resultpanel