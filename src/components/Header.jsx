import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

  const CustomNavLinks = ({ linkPath }) => {
    const linkRef = linkPath[0].toUpperCase() + linkPath.slice(1)
    return (
      <li>
        <NavLink
          to={linkPath}
          className={({ isActive }) =>
            `${isActive ? "text-orange-700" : "text-white-700"} ${!isActive && "hover:text-stone-700"}`
          }
        >
          <p className='text-l'>{linkRef}</p>
        </NavLink>
      </li>
    )
  }

  return (
    <header className='sticky top-0 z-50 border-2 h-20 flex justify-between items-center px-20 text-gray'>
      <NavLink to="">
        <p className='text-3xl font-medium hover:text-orange-600'>Logo</p>
      </NavLink>

      <ul className='flex gap-5'>
        <li>
          <NavLink to=""
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-white-700"} ${!isActive && "hover:text-stone-700"}`
            }
          >
            <p>Home</p>

          </NavLink>
        </li>
        <CustomNavLinks linkPath="about" />
        <CustomNavLinks linkPath="contact" />
        <li>
          <NavLink to="github"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-white-700"} ${!isActive && "hover:text-stone-700"}`
            }
          >
            <p>Github</p>

          </NavLink>
        </li>
        <CustomNavLinks linkPath="user" />
      </ul>
    </header>
  )
}

export default Header