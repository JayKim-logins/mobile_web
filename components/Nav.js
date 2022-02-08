import React from 'react'
import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className={navStyle.nav}>
        <ul>
            <li>
                <Link href='/' >Home</Link>
            </li>
            <li>
                <Link href='/about' >About</Link>
            </li>
            <li>
                <Link href='/login' >Login</Link>
            </li>
            <li>
                <Link href='/grid' >Grid</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav
