import React from 'react'
import Resultpanel from './resultpanel'
import Summarypanel from './summarypanel'
import './menu.css'

function Menu() {
  return (
    <div className="center">
      <div className="menu-panel">
        <div className="result">
          <Resultpanel />
        </div>
        <div className="summary">
          <Summarypanel />
        </div>
        
      </div>
    </div>
  )
}

export default Menu