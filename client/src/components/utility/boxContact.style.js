import styled from 'styled-components';

const BoxWrapper = styled.div`
  width: 80%;
  height: 100%;
  padding: 15px 30px 0px; 
  margin: auto;
  background-color: rgba(255, 255, 255, 0.6);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  font: bold 225% "Arial", "Comic Sans MS", cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  &.half {
    width: calc(50% - 34px);
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

export { BoxWrapper };
