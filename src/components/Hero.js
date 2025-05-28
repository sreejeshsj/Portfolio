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
  height: 60vh;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 2rem 1rem;
  }
`;

const TextContent = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap; /* allows wrapping on small screens */

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: 2px solid white;
  background: transparent;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  min-width: 150px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: white;
    color: #1a1a1a;
  }
`;

const DownloadLink = styled.a`
  padding: 0.8rem 2rem;
  background: #ff6347;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  min-width: 150px;
  text-align: center;
  transition: background 0.3s;

  &:hover {
    background: #e5533d;
  }
`;

const Image = styled.img`
  width: 300px;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 2rem;
  }
`;

const Hero = () => (
  <Section id="home">
    <TextContent>
      <h2>Hi, I'm Sreejesh A</h2>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>I'M A SOFTWARE ENGINEER</h1>
      <p>A software engineer passionate about crafting efficient, scalable solutions that solve real-world problems.</p>
      
      <ButtonGroup>
        <Button
          onClick={() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          VIEW MY PROJECTS
        </Button>

        <DownloadLink
          href={`${process.env.PUBLIC_URL}/Sreejesh_A_resume.pdf`}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </DownloadLink>
      </ButtonGroup>
    </TextContent>
    <Image src={Profile} alt="My profile" />
  </Section>
);

export default Hero;
