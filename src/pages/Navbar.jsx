import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

export default function Navbar() {
  return (
    <div className='bg-light'>
     <nav className='navbar container'>
        <Link className='title display-6 none' to={"/"}>Jobify</Link>
        <ul className='list-control'>
            <li><Link className='link text-reset' to={"/login"}>Explore</Link></li>
            <li><Link className='link text-reset' to={"/register"}>Register</Link></li>
            <li><Link className='link text-reset' to={"/login"}>Login</Link></li>
        </ul>
     </nav>
    </div>
  )
}
