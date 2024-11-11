import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header>
    <div className="container">
    <h1>Company name</h1>
    <nav>
      <ul>
      <li><a href="#">Features</a></li>
          <li><a href="#">Enterprise</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Home</a></li>
      </ul>
    </nav>
    </div>
    <hr></hr>
  </header>
  )
}

export default Header