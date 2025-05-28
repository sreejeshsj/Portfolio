import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem 1rem;
  background-color: #222;
  color: white;
  text-align: center;
  border-radius: 20px;
  margin: 2rem;
  /* No max-width here to keep full width on desktop */
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: #333;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #61dafb;
  font-size: 1.3rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Technologies = styled.p`
  font-style: italic;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Link = styled.a`
  color: #61dafb;
  text-decoration: none;
  font-weight: bold;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`;

const Projects = () => (
  <Section id="projects">
    <h2>My Projects</h2>
    <ProjectGrid>
      <Card>
        <ProjectTitle>ShopIt</ProjectTitle>
        <Technologies>Django, HTML, CSS, JavaScript, PostgreSQL</Technologies>
        <ProjectDescription>
          Full-stack e-commerce app with product browsing, cart, secure checkout, and user authentication; currently adding search prediction, chat, and payments.
        </ProjectDescription>
        <Link
          href="https://github.com/sreejeshsj/shopit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View ShopIt project on GitHub"
        >
          View on GitHub
        </Link>
      </Card>

      <Card>
        <ProjectTitle>FixMate (MCA Final Year Project)</ProjectTitle>
        <Technologies>Python, Flask, JavaScript, OpenAI/Groq LLMs, Multi-Agent Architecture</Technologies>
        <ProjectDescription>
          AI-powered debugging tool for Python/Java that detects and fixes syntax and logical errors using LLMs and multi-agent architecture.
        </ProjectDescription>
        <Link
          href="https://github.com/sreejeshsj/FixMate"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View FixMate project on GitHub"
        >
          View on GitHub
        </Link>
      </Card>
    </ProjectGrid>
  </Section>
);

export default Projects;
