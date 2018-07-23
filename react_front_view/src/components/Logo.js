import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/common.scss'
import Image1 from '../images/logo.svg'

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" exact={true}>
        <Image1 className="logo-image" />
      </Link>
    </div>
  )
}

export default Logo