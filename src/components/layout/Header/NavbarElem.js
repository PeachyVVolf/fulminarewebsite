import React, { Fragment, useState, useEffect } from 'react';
import './NavbarElem.css';
import { Menu } from '@mui/icons-material';
import fulminareLogo from '../../../images/fulminare.png';
import fulminareLogoDark from '../../../images/fulminareDark.png';

const NavbarElem = () => {

  const [openNav, setOpenNav] = useState(false)
  const openSideNav = () => {
    setOpenNav(!openNav);
  }

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header className={scroll ? "navBar dark" : "navBar"}>
      <div className="container">
        <div className="row">
          <Fragment>
            <div className='col-3'>
              {/* LOGO */}
              <img src={scroll && window.innerWidth >= 1000 ? fulminareLogoDark : fulminareLogo} style={{width:'50px'}}/>
            </div>
            <div className="col-9 navLinks">
              <a href="/#" className=" pr-3 p-3">HOME</a>
              <a href="/#about" className="p-3">ABOUT US</a>
              <a href="/#team" className="p-3">TEAM</a>
              <a href="/#services" className="p-3">SERVICES</a>
              <a href="/#works" className="p-3">WORKS</a>
              <a href="/#testimonials" className="p-3">TESTIMONIALS</a>
              <a href="/#contact" className="p-3">CONTACT</a>
            </div>
          </Fragment>
          {openNav === true ?
          <div className="mobileNav">
              <a href="/#" className=" pr-3 p-3">HOME</a>
              <a href="/#about" className="p-3">ABOUT US</a>
              <a href="/#team" className="p-3">TEAM</a>
              <a href="/#services" className="p-3">SERVICES</a>
              <a href="/#works" className="p-3">WORKS</a>
              <a href="/#testimonials" className="p-3">TESTIMONIALS</a>
              <a href="/#contact" className="p-3">CONTACT</a>
          </div>:(<Fragment></Fragment>)
          }
          <div className='col-1 menuIcon'>
            <Menu onClick={openSideNav} />
          </div>

        </div>
      </div>
    </header>
  )
}

export default NavbarElem;