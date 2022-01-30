import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  width: min(100vw, 950px);
  margin: 0 auto;
  padding: 30px 20px;

  @media (max-width: 968px) {
    gap: 30px;
  }
  @media (max-width: 698px) {
    gap: 20px;
  }
`;
export default Container;
