import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #111;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
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
`;

const Navbar = () => (
  <Nav>
    <div><strong>Portfolio</strong></div>
    <NavLinks>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </NavLinks>
  </Nav>
);

export default Navbar;
