import React from 'react'
import headerStyle from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyle.title}>
          <span>Header</span>
      </h1>
      <p className={headerStyle.description}>paragraph</p>
    </div>
  )
}


export default Header
