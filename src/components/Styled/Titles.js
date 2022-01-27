import styled from 'styled-components';

export const Title1 = styled.h1`
  font-size: clamp(38px, 7vw, 72px);
  margin-bottom: 40px;
`;

export const Title2 = styled.h2`
  font-size: 36px;
  line-height: 43px;
  text-align: center;

  @media (max-width: 698px) {
    font-size: 28px;
  }
`;

export const MainTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 40px;
`;
