import styled from 'styled-components';
import env from '../../env.json';

/**
 * expect props
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
  btnBack,
  btnBorder,
  btnText,
  btnHoverBack,
  btnHoverBorder,
  btnHoverText,
} = env.colors.defaultBtnColors;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props?.styles?.btnBack || btnBack};
  border: 1px solid ${props => props?.styles?.btnBorder || btnBorder};
  border-radius: 15px;
  padding: 8px 20px;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  color: ${props => props?.styles?.btnText || btnText};

  &:hover,
  &:active {
    background-color: ${props => props?.styles?.btnHoverBack || btnHoverBack};
    border: 1px solid
      ${props => props?.styles?.btnHoverBorder || btnHoverBorder};
    color: ${props => props?.styles?.btnHoverText || btnHoverText};
  }
`;
export default Button;
