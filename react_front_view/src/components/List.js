import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/common.scss'

const List= () => {
  return (
    <ul className="list">
      <li className="list-item">
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/post" activeClassName="is-active">Post</NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/about" activeClassName="is-active">About us</NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/privacy-policy" activeClassName="is-active">Privacy Policy</NavLink>
      </li>      
    </ul>
  )
}

export default List