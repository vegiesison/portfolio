import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vegie Sison</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>
      </div>
      <div className='me'>
        <img src={ME} alt="me" />
      </div>
    </header>
  )
}

export default Header