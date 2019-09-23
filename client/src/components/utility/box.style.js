import styled from 'styled-components';

const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 30px; 
  background-color: #ffffff;
  border-radius:10px;
  margin: 0 0 30px;
  background-color: rgba(255, 255, 255, 0.7);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
  font: bold 75%/125% "Calibri", "Comic Sans MS", cursive;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 767px) {
    padding: 10px;
  }

  &.half {
    width: calc(50% - 34px);
    @media (max-width: 767px) {
      width: 100%;
    }
  }

  h1 {
    align-items: center;
    justify-content: center;
  }
`;

export { BoxWrapper };
