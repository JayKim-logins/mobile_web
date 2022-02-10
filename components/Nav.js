import React from 'react'
import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className={navStyle.nav}>
        <a className={navStyle.logo}>
            <h2>APP_NAME</h2>
        </a>
        <div className={navStyle.nav__menu}>
            <ul>
                <li>
                    <Link href='/' >Home</Link>
                </li>
                <li>
                    <Link href='/about' >About</Link>
                </li>
                
                <li>
                    <Link href='/grid' >그리드</Link>
                </li>
            </ul>
        </div>
        <div className={navStyle.nav__auth_actions}>
            <ul>
                <li>
                    <a>회원가입</a>
                </li>
                <li>
                    <Link href='/login' >로그인</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav
