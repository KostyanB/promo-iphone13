import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 40, 120, 0.7);
  z-index: 1001;
  padding-top: 200px;
  color: red;
  font-size: 30px;
  text-align: center;
`;

const ErrorLoad = text => (
  <Wrapper>Sorry, nework error. We will fix it soon...</Wrapper>
);
export default ErrorLoad;
