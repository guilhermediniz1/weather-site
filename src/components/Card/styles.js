import styled from 'styled-components';

export const Container = styled.div`
  background: var(--bluish-white);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  height: 120px;
  width: 241px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.h3`
  color: #000;
  font-weight: 300;
  font-size: 16px;
  position: absolute;
  left: 16px;
  top: 16px;
`;
export const Info = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  > svg {
    height: 32px;
    path {
      color: #424242;
    }
  }
`;

export const Value = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #424242;
`;
