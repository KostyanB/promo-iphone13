import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../Context';
import env from '../../env.json';
import Form from './Form';

const { hoverColor, mainColor } = env.colors;

const Wrapper = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  /* display: grid; */
  position: relative;
  max-width: 640px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.1);
`;
const Close = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  /* grid-area: 1/-1; */
  /* place-self: start end; */
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: ${mainColor};

  &:hover {
    color: ${hoverColor};
  }
`;
const Subtitle = styled.h2`
  font-size: 14px;
  margin-bottom: 14px;
`;

const Modal = () => {
  const {
    openModal: { isOpen, onClose },
  } = useContext(MainContext);

  const closeModal = () => onClose();

  return (
    <Wrapper open={isOpen}>
      <Content>
        <Close onClick={closeModal}>✘</Close>
        <Subtitle>Доставка и оплата</Subtitle>
        <Form />
      </Content>
    </Wrapper>
  );
};
export default Modal;
