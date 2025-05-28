import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #111;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const Brand = styled.div`
  font-weight: bold;

  @media (max-width: 600px) {
    flex-grow: 1;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #ff6347;
    }
  }

  @media (max-width: 600px) {
    position: fixed;
    top: 60px;
    right: 0;
    background-color: #111;
    flex-direction: column;
    width: 200px;
    padding: 1rem;
    gap: 1rem;
    border-radius: 8px;
    box-shadow: -2px 2px 8px rgba(0,0,0,0.8);

    transform: translateX(${props => (props.open ? '0' : '100%')});
    transition: transform 0.3s ease-in-out;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  span {
    width: 25px;
    height: 3px;
    background: white;
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <Brand>Portfolio</Brand>
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <span style={{ opacity: menuOpen ? 0 : 1 }} />
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }} />
      </Hamburger>
      <NavLinks open={menuOpen} onClick={() => setMenuOpen(false)}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
