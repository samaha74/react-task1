import React from 'react' 
import './Footer.css'

export default function Foter() {
  return (
    <div className='footbar'>
        <h1 className="logo">LOGO</h1>
        {/* <ul>
            <li>Home</li>
            <li>Apps</li>
            <li>About</li>
            <li>Contact</li>
        </ul> */}
        <div className="socials-footer"><a href=""><i className="fa-brands fa-facebook"></i></a><a href=""><i className="fa-brands fa-instagram"></i></a><a href=""><i className="fa-brands fa-x-twitter"></i></a></div>
    </div>
  )
}
