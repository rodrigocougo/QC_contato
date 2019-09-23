import styled from "styled-components";
import Logo from "../../BG_cor2.jpg";

const LayoutContentWrapper = styled.div`
border: 1px solid red;
height: 100%;
margin: 0px auto;
overflow: hidden;
  border: 3px solid black;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  overflow: hidden;
  background-image: url(${Logo});
  background-repeat:no-repeat;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
background-position:center;

  @media only screen and (max-width: 767px) {    
    padding: 50px 20px;
  }

  @media (max-width: 580px) {
    padding: 5px;
  }

body, html {
  height: 100%;
  }
`;

export { LayoutContentWrapper };
