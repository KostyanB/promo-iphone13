import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { MainContext } from '../Context';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectError,
  selectStatus,
  clearError,
  clearOrder,
} from '../../store/sendOrderSlice';
import useScrollLock from '../../hooks/useScrollLock';
import env from '../../env.json';
import Form from './Form';
import Preloader from '../Styled/Preloader';
import ModalMessage from './ModalMessage';
import { MainButton } from '../Styled/Buttons';

const { hoverColor, mainColor } = env.colors;

const Wrapper = styled.div`
  display: flex;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);

  & > div {
    transform: ${props => (props.open ? 'scale(1, 1)' : 'scale(0, 0)')};
    transition: transform 0.7s;
  }
`;
const Content = styled.div`
  position: relative;
  width: min(90vw, 640px);
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.1);
`;
const Close = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
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
  const dispatch = useDispatch();
  const {
    openModal: { isOpen, onClose },
  } = useContext(MainContext);
  const formError = useSelector(selectError);
  const formStatus = useSelector(selectStatus);
  const { lockScroll, unlockScroll } = useScrollLock();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => (isOpen ? lockScroll() : unlockScroll()), [isOpen]);

  const closeModal = () => onClose();

  const clearForm = () => {
    dispatch(clearOrder());
    closeModal();
  };

  const handleError = () => {
    dispatch(clearError());
    closeModal();
  };

  return (
    <Wrapper open={isOpen}>
      <Content>
        <Close onClick={closeModal}>✘</Close>
        <Subtitle>Доставка и оплата</Subtitle>
        {formStatus === 'loading' ? (
          <Preloader />
        ) : formStatus === 'success' ? (
          <>
            <ModalMessage />
            <MainButton onClick={clearForm}>Ок</MainButton>
          </>
        ) : formError ? (
          <>
            <ModalMessage text={formError} />
            <MainButton onClick={handleError}>Закрыть</MainButton>
          </>
        ) : (
          <Form />
        )}
      </Content>
    </Wrapper>
  );
};
export default Modal;
