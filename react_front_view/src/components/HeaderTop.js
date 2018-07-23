import React from 'react'
import Logo from './Logo'
import MenuButton from './MenuButton'
import '../styles/common.scss'

const HeaderTop = () => {
  return (
    <header className="header-top">
      <Logo />
      <MenuButton />
    </header>
  )
}

export default HeaderTop