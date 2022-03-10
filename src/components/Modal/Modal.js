import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ValidateFormContextProvider, useModalContext } from '../../context';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectError,
  selectStatus,
  clearError,
  clearOrder,
} from '../../store/sendOrderSlice';
import useScrollLock from '../../hooks/useScrollLock';

import env from '../../env.json';
import Form from '../Form';
import Preloader from '../Styled/Preloader';
import ModalMessage from './ModalMessage';
import { MainButton } from '../Styled/Buttons';

const { hoverColor, mainColor } = env.colors;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  /* justify-content: center; */
  justify-content: flex-start;
  align-items: center;
  flex-flow: column nowrap;
  flex-shrink: 0;
  -webkit-overflow-scrolling: touch;
  padding: 10px 0;
  background-color: rgba(0, 0, 0, 0.4);
  visibility: ${props => (props.open ? 'visible' : 'hidden')};

  & > div {
    transform: ${props => (props.open ? 'scale(1, 1)' : 'scale(0, 0)')};
    transition: transform 0.7s;
  }
`;
const Content = styled.div`
  position: relative;
  width: min(90vw, 640px);
  margin: auto;
  padding: 20px;
  overscroll-behavior-y: contain;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 5px;
  }
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
  const { isOpenModal, onCloseModal } = useModalContext();

  const formError = useSelector(selectError);
  const formStatus = useSelector(selectStatus);
  const { lockScroll, unlockScroll } = useScrollLock();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => (isOpenModal ? lockScroll() : unlockScroll()), [isOpenModal]);

  const closeModal = e => {
    if (e.target.id === 'modal-overlay' || e.target.id === 'modal-close-btn') {
      onCloseModal();
    }
  };

  const clearForm = () => {
    dispatch(clearOrder());
    onCloseModal();
  };

  const handleError = () => {
    dispatch(clearError());
    onCloseModal();
  };

  return (
    <Wrapper id='modal-overlay' open={isOpenModal} onClick={closeModal}>
      <Content>
        <Close id='modal-close-btn' onClick={closeModal}>
          ✘
        </Close>
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
          <ValidateFormContextProvider>
            <Form />
          </ValidateFormContextProvider>
        )}
      </Content>
    </Wrapper>
  );
};
export default Modal;
