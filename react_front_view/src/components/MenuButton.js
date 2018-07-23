import React from 'react'
import List from './List'
import '../styles/common.scss'

const MenuButton = () => {
  return (
    <div 
      id="nav-drawer"
    >
      <input
        type="checkbox"
        id="nav-input" 
        className="nav-unshown"
      />
      <label
        id="nav-open"
        htmlFor="nav-input"
      >
        <span />
      </label>
      <label 
        id="nav-close"
        className="nav-unshown"
        htmlFor="nav-input"
      />
      <div
        id="nav-content"
        className="hide">
        <List />
      </div>
    </div>
  )
}

export default MenuButton