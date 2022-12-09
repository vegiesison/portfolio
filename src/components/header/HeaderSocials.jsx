import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vegie-sison-3a4b761b9/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/vegiesison" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.facebook.com/user820" target="_blank" rel="noreferrer"><BsFacebook/></a>
    </div>
  )
} 
export default HeaderSocials
