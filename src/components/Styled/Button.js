import styled from 'styled-components';
import env from '../../env.json';

const { mainColor, backgroundColor } = env.colors;

const Button = styled.button`
  background-color: ${backgroundColor};

  border: 1px solid ${mainColor};
  border-radius: 15px;
  padding: 8px 20px;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;

  &:hover,
  &:active {
    background-color: ${mainColor};
    color: ${backgroundColor};
  }
`;
export default Button;
