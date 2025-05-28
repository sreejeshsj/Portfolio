import React from 'react';
import styled from 'styled-components';
import Profile from '../assets/profile.jpg';

const Section = styled.section`
  display: flex;
  background-color: #1a1a1a;
  color: white;
  padding: 4rem 2rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  margin: 2rem;
  height: 60vh;  /* make section full viewport height */
`;

const TextContent = styled.div`
  max-width: 50%;
`;

const Image = styled.img`
  width: 300px;
  border-radius: 20px;
`;

const Hero = () => (
  <Section id="home">
    <TextContent>
      <h2>Hi, I'm Sreejesh A</h2>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>I'M A SOFTWARE ENGINEER</h1>
      <p>A software engineer passionate about crafting efficient, scalable solutions that solve real-world problems.</p>
      <button
  style={{
    marginTop: '1rem',
    padding: '0.8rem 2rem',
    border: '2px solid white',
    background: 'transparent',
    color: 'white',
    borderRadius: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }}
  onClick={() => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  VIEW MY PROJECTS
</button>

      <a
        href="/Sreejesh_A_resume.pdf"
        download
        style={{
          marginTop: '1rem',
          display: 'inline-block',
          padding: '0.8rem 2rem',
          background: '#ff6347',
          color: 'white',
          borderRadius: '10px',
          fontWeight: 'bold',
          textDecoration: 'none',
          marginLeft: '1rem',
        }}
      >
        Download Resume
      </a>
    </TextContent>
    <Image src={Profile} alt="My profile" />
  </Section>
);

export default Hero;
