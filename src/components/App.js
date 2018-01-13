import React from 'react';
import styled from 'styled-components';
import Skills from './Skills';
import NeonBox from './common/NeonBox';
import { colors } from './common/Styles';

const Container = styled.div`
  background: #111B23;
  color: ${colors.primary};
  min-width: 100vw;
  font-size: 2em;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`

const InnerBox = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Spaced = styled.div`
  margin: 0 5px;
`

const Entry = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  color: ${({color}) => color};
  box-sizing: border-box;
`

const Title = styled.div`
  margin-bottom: 20px;
`

const App = () => (
  <Container>
    <Entry>
      <NeonBox>
        <InnerBox>
          <Spaced>
            Benjamin
          </Spaced>
          <Spaced>
            Plouzennec
          </Spaced>
        </InnerBox>
      </NeonBox>
    </Entry>
    <Entry color={colors.secondary}>
      <Title>
        Skills
      </Title>
      <NeonBox color={colors.secondary}>
        <InnerBox>
          <Skills />
        </InnerBox>
      </NeonBox>
    </Entry>
  </Container>
)

export default App;
