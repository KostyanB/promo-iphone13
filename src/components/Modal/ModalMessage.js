import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';

const { mainColor, errorColor } = env.colors;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
  font-size: 30px;
  gap: 20px;

  & > p {
    max-width: 95%;
    text-align: center;
    color: ${props => (props.text ? errorColor : mainColor)};
  }
`;

const ModalMessage = ({ text = '' }) => {
  return (
    <Wrapper text={text}>
      {text ? (
        <>
          <p>Sorry, error: {text}.</p>
          <p>Try again later...</p>
        </>
      ) : (
        <p>Your order has been successfully sent</p>
      )}
    </Wrapper>
  );
};
export default ModalMessage;
