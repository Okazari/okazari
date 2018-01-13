import React from 'react';
import styled from 'styled-components';
import { colors } from '../common/Styles';

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 120px;
  height: 180px;
  margin: 10px;
`

const SkillBar = styled.div`
  width: 50px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const SkillLevel = styled.div`
  height: 20px;
  width: 100%;
  margin-bottom: 5px;
  background-color: ${colors.secondary};
`

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
`

const skills = [
  {
    label: 'JS',
    level: 5,
  },
  {
    label: 'React',
    level: 5,
  },
  {
    label: 'Redux',
    level: 5,
  },
  {
    label: 'AngularJS',
    level: 5,
  },
  {
    label: 'Node',
    level: 4,
  },
  {
    label: 'Git',
    level: 4,
  },
  {
    label: 'UX',
    level: 3,
  },
  {
    label: 'Vue',
    level: 3,
  },
  {
    label: 'GraphQL',
    level: 3,
  },
  {
    label: 'Design',
    level: 2,
  },
  {
    label: 'Angular',
    level: 2,
  },
  {
    label: 'Docker',
    level: 2,
  },
]

const Skills = () => (
  <Container>
    {
      skills.map((skill, index) => (
        <Skill key={index}>
          <SkillBar>
            {
              new Array(skill.level).fill('').map((_,index) => <SkillLevel key={index}/>)
            }
          </SkillBar>
          {skill.label}
        </Skill>
      ))
    }
  </Container>
)

export default Skills;
