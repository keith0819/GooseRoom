import React from 'react'
import Logo from './Logo'
import MenuButton from './MenuButton'
import '../styles/common.scss'

const HeaderDetail = () => (
  <div className="header-detail header-top">
    <Logo className="logo-detail" />
    <div className="header-detail-info">
      <p className="type">Rent</p>
      <p className="size">800ft<sup>2</sup></p>
      <p className="day">posted 12 days ago</p>
    </div>
    <MenuButton />
  </div>
)

export default HeaderDetail