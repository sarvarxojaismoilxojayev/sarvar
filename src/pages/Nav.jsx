import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Nav() {

  function click() {
    localStorage.removeItem("access-token")
    location.reload()
  }

  return (
    <div className='navbar-item'>
        <nav className='navbar container clone-navbar'>
        <Link className='title display-6 none' to={"/"}>Jobify</Link>
        <ul className='list-control2 list-control'>
            <li><Link className='link text-reset' to={"/dashboard"}>Dashboard</Link></li>
            <li><Link className='link text-reset' to={"/jobs"}>My jobs</Link></li>
            <li><Link className='link text-reset' to={"/explore"}>Explore</Link></li>
            <button type="button" class="btn btn-danger" onClick={click}>Danger</button>
        </ul>
        </nav>
    </div>
  )
}
