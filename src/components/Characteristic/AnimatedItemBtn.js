import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import env from '../../env.json';

const {
  hoverColor,
  mainBtnColors: { btnBorder, btnText },
} = env.colors;

const closeBtnArrow = `transparent ${btnBorder} ${btnBorder} transparent`;
const openBtnArrow = `${hoverColor} transparent transparent ${hoverColor}`;

const Button = styled.button`
  position: relative;
  width: 100%;
  padding: 12px 30px;
  background-color: transparent;
  text-align: left;
  border: 1px solid;

  &:after {
    content: '';
    position: absolute;
    right: 15px;
    bottom: ${props => (props.open ? '5px' : '15px')};
    width: 17px;
    height: 17px;
    border: 1px solid;
    border-color: ${props => (props.open ? openBtnArrow : closeBtnArrow)};
    transform: rotate(45deg);
    transition: border-color 0.4s ease-in-out, bottom 0.4s ease-in-out;
  }
`;

const AnimatedItemBtn = ({ title, isOpen, toggleFn }) => {
  const AnimatedButton = animated(Button);
  const closeBtnBorders = `transparent transparent ${btnBorder} transparent`;
  const openBtnBorders = `${hoverColor} ${hoverColor} transparent ${hoverColor}`;

  const openBtnProps = useSpring({
    borderColor: closeBtnBorders,
    color: btnText,
    to: {
      borderColor: openBtnBorders,
      color: hoverColor,
    },
  });
  const closeBtnProps = useSpring({
    borderColor: openBtnBorders,
    color: hoverColor,
    to: {
      borderColor: closeBtnBorders,
      color: btnText,
    },
  });
  const btnProps = isOpen ? openBtnProps : closeBtnProps;

  return (
    <AnimatedButton onClick={toggleFn} open={isOpen} style={btnProps}>
      {title}
    </AnimatedButton>
  );
};
export default AnimatedItemBtn;
