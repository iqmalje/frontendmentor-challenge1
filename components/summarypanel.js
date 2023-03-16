import React from 'react'
import memorysvg from './icons/icon-memory.svg';
import reactionsvg from './icons/icon-reaction.svg';
import verbalsvg from './icons/icon-verbal.svg';
import visualsvg from './icons/icon-visual.svg';
import Data from './data/data.json';
import './summarypanel.css'


function Summarypanel() {
  return (
    <div className="panel-summary">
        <p className="title">Summary</p>
        <div className="block reaction">
            <div className="logo">
                <img src={reactionsvg} />
                <p className="tile">Reaction</p>
        
            </div>
            <div className="marks">
                <p className="primary">{Data[0].score}</p>
                <p className="secondary"> / 100</p>
            </div>
        </div>
        <div className="block memory">
            <div className="logo">
                <img src={memorysvg} />
                <p className="tile">Memory</p>
        
            </div>
            <div className="marks">
                <p className="primary">{Data[1].score}</p>
                <p className="secondary"> / 100</p>
            </div>
        </div>
        <div className="block verbal">
            <div className="logo">
                <img src={verbalsvg} />
                <p className="tile">Verbal</p>
        
            </div>
            <div className="marks">
                <p className="primary">{Data[2].score}</p>
                <p className="secondary"> / 100</p>
            </div>
        </div>
        <div className="block visual">
            <div className="logo">
                <img src={visualsvg} />
                <p className="tile">Visual</p>
        
            </div>
            <div className="marks">
                <p className="primary">{Data[3].score}</p>
                <p className="secondary"> / 100</p>
            </div>
        </div>

        <button className="continue">Continue</button>
        
        
        
    </div>
  )
}

export default Summarypanel