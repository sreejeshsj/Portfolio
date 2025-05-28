import React from 'react';
import styled from 'styled-components';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiPython, SiMysql, SiGithub } from 'react-icons/si';

const skillsData = [
  { name: "HTML", level: 90, icon: <SiHtml5 color="#E34F26" size={20} /> },
  { name: "CSS", level: 85, icon: <SiCss3 color="#1572B6" size={20} /> },
  { name: "JavaScript", level: 80, icon: <SiJavascript color="#F7DF1E" size={20} /> },
  { name: "React", level: 90, icon: <SiReact color="#61DAFB" size={20} /> },
  { name: "Python", level: 90, icon: <SiPython color="#3776AB" size={20} /> },
  { name: "SQL", level: 80, icon: <SiMysql color="#4479A1" size={20} /> },
  { name: "Git & GitHub", level: 80, icon: <SiGithub color="#181717" size={20} /> },
];

const Section = styled.section`
  padding: 2rem;
  background-color: #222;
  color: white;
  text-align: center;
  border-radius: 20px;
  margin: 2rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    gap: 1rem;
    justify-content: space-around;
  }
`;

const Skill = styled.div`
  background-color: #333;
  padding: 1rem;
  border-radius: 12px;
  flex: 0 1 140px;
  max-width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    flex: 0 1 45%;
    max-width: 45%;
    padding: 0.75rem;
    box-sizing: border-box;
  }
`;

const SkillName = styled.div`
  margin-top: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const Svg = styled.svg`
  transform: rotate(-90deg);
  width: 100px;
  height: 100px;
  position: relative;

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const CircleBackground = styled.circle`
  fill: none;
  stroke: #555;
  stroke-width: 10;
`;

const CircleProgress = styled.circle`
  fill: none;
  stroke: ${({ color }) => color};
  stroke-width: 10;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease;
`;

const Percentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 1rem;
  color: white;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const SvgContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const radius = 45;
const circumference = 2 * Math.PI * radius;

const getColor = (level) => {
  if (level > 80) return '#4caf50';  // Green
  if (level > 60) return '#ffc107';  // Yellow
  return '#f44336';                 // Red
};

const Skills = () => (
  <Section id="skills">
    <h2>Skills</h2>
    <SkillList>
      {skillsData.map(({ name, level, icon }) => {
        const offset = circumference - (level / 100) * circumference;
        const color = getColor(level);
        return (
          <Skill key={name} aria-label={`${name} skill level is ${level} percent`} role="img" title={`${name}: ${level}%`}>
            <SvgContainer>
              <Svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                <CircleBackground r={radius} cx="50" cy="50" />
                <CircleProgress
                  r={radius}
                  cx="50"
                  cy="50"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  color={color}
                />
              </Svg>
              <Percentage>{level}%</Percentage>
            </SvgContainer>
            <SkillName>
              {icon} {name}
            </SkillName>
          </Skill>
        );
      })}
    </SkillList>
  </Section>
);

export default Skills;
