import styled from 'styled-components';

const NeonBox = styled.div`
  border-radius: 10px;
  box-shadow: ${props => props.color || '#36A3FE'} 0px 0px 1em;
  width: 100%;
  height: 100%;
`


export default NeonBox;
