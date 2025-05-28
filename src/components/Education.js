import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap } from 'react-icons/fa';

const Section = styled.section`
  padding: 2rem;
  background-color: #1a1a1a;
  color: white;
  text-align: center;
  border-radius: 20px;
  margin: 2rem;

  @media (max-width: 480px) {
    margin: 1rem;
    padding: 1.5rem 1rem;
  }
`;

const EduItem = styled.div`
  background: #333;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 12px;
  max-width: 600px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 90%;
  }
`;

const IconWrapper = styled.div`
  color: #4caf50;
  font-size: 2rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Education = () => (
  <Section id="education">
    <h2>Education</h2>
    <EduItem>
      <IconWrapper>
        <FaGraduationCap />
      </IconWrapper>
      <div>
        <h3>Master of Computer Applications (MCA)</h3>
        <p>Government Engineering College, Thrissur</p>
        <p>APJ Abdul Kalam Technological University (2023–2025)</p>
      </div>
    </EduItem>
    <EduItem>
      <IconWrapper>
        <FaGraduationCap />
      </IconWrapper>
      <div>
        <h3>B.Sc. Computer Science</h3>
        <p>University of Calicut</p>
        <p>2019–2022</p>
      </div>
    </EduItem>
  </Section>
);

export default Education;
