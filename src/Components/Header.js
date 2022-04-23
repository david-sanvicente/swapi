import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Movies</Link>
          </li>
          <li>
            <Link to='/characters'>Characters</Link>
          </li>
          <li>
            <Link to='/starships'>Starships</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Header
