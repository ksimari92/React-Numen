import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to='/'>Cambiar imagen</Link></li>
            <li><Link to='/theme'>Theme</Link></li>
            <li><Link to='/avatar'>Avatar</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar