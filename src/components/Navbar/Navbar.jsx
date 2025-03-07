import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <h1 className="logo">LOGO</h1>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Apps</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <div className="socials-nav"><a href="">Facebook</a><a href="">Instagram</a><a href="">X</a></div>
    </div>
  )
}
