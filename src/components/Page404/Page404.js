import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Container from '../Styled/Container';
import env from '../../env.json';

const { activeColor } = env.colors;

const Wrapper = styled(Container)`
  height: 100px;
  justify-content: center;
  color: ${activeColor};
  font-size: 30px;
`;

const Page404 = () => {
  const location = useLocation();

  return (
    <Wrapper>
      Упс, ошибочка! Странички "<code>{location.pathname}</code>" у нас нет!!!
    </Wrapper>
  );
};
export default Page404;
