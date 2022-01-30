import styled from 'styled-components';
import env from '../../env.json';

/**
 * buttons can take style as props
 * styles={{
 *    btnBack: 'color value',
 *    btnBorder: 'color value',
 *    btnText: 'color value',
 *    btnHoverBack: 'color value',
 *    btnHoverBorder: 'color value',
 *    btnHoverText: 'color value',
 * }}
 */

const {
  mainColor,
  hoverColor,
  mainBtnColors: {
    btnBack,
    btnBorder,
    btnText,
    btnHoverBack,
    btnHoverBorder,
    btnHoverText,
  },
  buyBtnColors: {
    buyBtnBack,
    buyBtnBorder,
    buyBtnText,
    buyBtnHoverBack,
    buyBtnHoverBorder,
    buyBtnHoverText,
  },
} = env.colors;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  padding: 8px 20px;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
`;

export const MainButton = styled(Button)`
  background-color: ${props => props?.styles?.btnBack || btnBack};
  border: 1px solid ${props => props?.styles?.btnBorder || btnBorder};
  color: ${props => props?.styles?.btnText || btnText};

  &:hover,
  &:active {
    background-color: ${props => props?.styles?.btnHoverBack || btnHoverBack};
    border: 1px solid
      ${props => props?.styles?.btnHoverBorder || btnHoverBorder};
  }

  &:hover {
    color: ${props => props?.styles?.btnHoverText || btnHoverText};
  }
  &:active {
    color: ${props => props?.styles?.btnHoverText || hoverColor};
  }
`;

export const BuyButton = styled(Button)`
  background-color: ${props => props?.styles?.btnBack || buyBtnBack};
  border: 1px solid ${props => props?.styles?.btnBorder || buyBtnBorder};
  color: ${props => props?.styles?.btnText || buyBtnText};

  &:hover,
  &:active {
    background-color: ${props =>
      props?.styles?.btnHoverBack || buyBtnHoverBack};
    border: 1px solid
      ${props => props?.styles?.btnHoverBorder || buyBtnHoverBorder};
  }

  &:hover {
    color: ${props => props?.styles?.btnHoverText || buyBtnHoverText};
  }
  &:active {
    color: ${props => props?.styles?.btnHoverText || mainColor};
  }
`;
export default Button;
