import styled from 'styled-components';


export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${props => props.isDay ? "var(--dark-blue)" : "var(--night-blue)" };
  padding: 32px;
  transition: all 2s ease;

  @media (max-width: 768px){
    flex-direction: column;
    padding: 16px;
  }
`;


export const LeftContent = styled.div`
  flex: 1;
  padding-right: 32px;
  position: relative;

  .astro {
    height: 60%;
    position: absolute;
    bottom: -25%;
    left: -25%;

    transition: all 2s ease;
  }
`;

export const SearchComponent = styled.form`
  display: flex;
  align-items: center;

  input {
    height: 40px;
    width: 240px;
    border-radius: 8px 0 0 8px;
    border: none;
    outline: none;
    background: var(--white);
  }

  button {
    height: 40px;
    width: 40px;
    border: 2px solid var(--white);
    background: transparent;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    transition: .2s ease;
    path {
      color: var(--white);
    }
    &:hover{
      background: var(--white);
      path {
      color: var(--dark-blue);
    }
      transition: .2s ease;
    }
  }
`;

export const Location = styled.h4`
  font-size: 32px;
  font-weight: 700;
  color: var(--white);
  margin-top: 32px; 
`;

export const LocalTime = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: var(--white);
`;

export const WeatherNow = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Temperature = styled.p`
  font-size: 64px;
  font-weight: 700;
  color: var(--white );
  user-select: none;
  cursor: pointer;
`;

export const WeatherCondition = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: var(--white );
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UpperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LowerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Text = styled.div`
  color: var(--white);
  > h3{
    font-size: 24px;
  }
  p{
    font-size: 16px;
    
    span {
      font-size: 14px;
      font-weight: 700;
    }
  }

`;

export const Advice = styled.h3`
margin-top: 24px;
  font-size: 16px;
  color: var(--bluish-white);
`;