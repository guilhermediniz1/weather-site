import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--bluish-white);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  height: 200px;
  width: max(756px, 100%);
`;

export const Title = styled.p`
  text-align: left;
  margin-bottom: 24px;
  font-size: 16px;
  color: #424242;
  > span {
    font-size: 12px;
  }
`;