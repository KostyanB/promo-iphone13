import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';

const ErrorColor = env.colors;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 40, 120, 0.7);
  z-index: 1001;
  padding-top: 100px;
  color: ${ErrorColor};
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & > p {
    max-width: 80%;
    text-align: center;
  }
`;

const ErrorLoad = ({ text }) => {
  return (
    <Wrapper>
      <p>Sorry, nework error:</p>
      <p>{text}.</p>
      <p>We will fix it soon...</p>
    </Wrapper>
  );
};
export default ErrorLoad;
