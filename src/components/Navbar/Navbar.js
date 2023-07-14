import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

const handleIconClick = () => {
  scroll.scrollToTop();
};

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={()=>{closeMobileMenu(); handleIconClick();}}>
              <NavIcon />
              EDUlanka
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={()=>{closeMobileMenu(); handleIconClick();}}  >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Whatis' onClick={closeMobileMenu}>
                  What Is
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Whowant' onClick={closeMobileMenu}>
                Who Want
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Subjects' onClick={closeMobileMenu}>
                Subjects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/Contactus' onClick={closeMobileMenu}>
                  Contact Us
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/'>
                    <Button primary>Sign Up</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Sign Up
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
