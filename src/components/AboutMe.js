import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;        /* Increased vertical padding */
  background-color: #222;
  color: white;
  text-align: center;
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  justify-content: center;   /* Vertically center content */
  align-items: center;       /* Horizontally center content */
  min-height: 300px;         /* Ensure minimum height */
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  line-height: 1.8;
  font-size: 1.2rem;
  max-width: 600px;
`;

const AboutMe = () => (
  <Section id="about">
    <Title>About Me</Title>
    <Paragraph>
      Hi! I'm Sreejesh, a passionate software developer with experience in full-stack web development. I love creating efficient, user-friendly applications and continuously learning new technologies. I recently completed my Master of Computer Applications (MCA) from Government Engineering College, Thrissur, and I am eager to apply my skills to solve real-world problems.
    </Paragraph>
  </Section>
);

export default AboutMe;
