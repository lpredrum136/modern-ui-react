import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import NavItem from './NavItem'
import './index.css'
import { useState } from 'react'
import NavMenu from './NavMenu'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="flex justify-between items-center py-8 px-8 sm:px-16 md:px-24">
      <div className="flex grow justify-start items-center">
        <div className="mr-8">
          <img src={logo} alt="logo" className="w-[62px] h-[16px]" />
        </div>
        <div className="hidden md:flex">
          <NavMenu isMobile={false} />
        </div>
      </div>

      <div className="hidden md:flex justify-end items-center">
        <NavItem isMobile={false} label="Sign In" asLink={false} />
        <button
          type="button"
          className="nav-item-text py-2 px-4 bg-[#FF4820] rounded-[5px]"
        >
          Sign Up
        </button>
      </div>

      {/* MOBILE */}
      <div className="flex ml-4 relative md:hidden">
        {showMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            className="cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            className="cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        )}
        {showMenu && (
          <div className="flex flex-col justify-end items-end text-right bg-footer p-8 absolute top-[40px] right-0 mt-4 min-w-[210px] rounded-[5px] shadow-xl animate-scale-up-center">
            <div>
              <NavMenu isMobile />
            </div>
            <div>
              <NavItem isMobile label="Sign In" asLink={false} />
              <button
                type="button"
                className="nav-item-text py-2 px-4 bg-[#FF4820] rounded-[5px]"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav
