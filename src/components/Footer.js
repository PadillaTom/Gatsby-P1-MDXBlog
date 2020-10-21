import React from 'react'
import SocialLinks from '../constants/socialLinks'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
        <SocialLinks styleClass="footer-icons"></SocialLinks>
        <p>&copy;{new Date().getFullYear()} All rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
