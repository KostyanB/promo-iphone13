import React from 'react';
import styled, { keyframes } from 'styled-components';
import env from '../../env.json';

const loaderColor = env.colors.hoverColor;

// loader expect props size us num
const circleStyle = `4px solid ${loaderColor}`;
const animationParam = '1s cubic-bezier(.42, .61, .58, .41) infinite';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 50px auto 0;
`;
const Wrapper = styled.div`
  width: ${props => props.size || '90px'};
  height: ${props => props.size || '90px'};
  border-radius: 50%;
  display: grid;
`;
//direction keyframes
const Rotate = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;
const ReverseRotate = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
`;
const Circle = styled.div`
  grid-area: 1/-1;
  align-self: center;
  justify-self: center;
  border: ${circleStyle};
  border-radius: 50%;
`;
const Outter = styled(Circle)`
  width: 100%;
  height: 100%;
  border-bottom: 0;
  border-left-color: transparent;
  -webkit-animation: ${Rotate} ${animationParam};
  animation: ${Rotate} ${animationParam};
`;
const Inner = styled(Circle)`
  width: 75%;
  height: 75%;
  border-right: 0;
  border-top-color: transparent;
  -webkit-animation: ${ReverseRotate} ${animationParam};
  animation: ${ReverseRotate} ${animationParam};
`;

const Loader = ({ size = 90 }) => (
  <Container>
    <Wrapper size={`${size}px`}>
      <Outter />
      <Inner />
    </Wrapper>
  </Container>
);
export default Loader;
