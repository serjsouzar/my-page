import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 32px;
  justify-content: space-evenly;
  font-weight: 400;
  max-width: 100%;
  flex-direction: column;

  
  .border_bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 30px
  }

  .border_bottom div {
    border: 1px solid #707070;
    width: 60%;
  }
`;

export const Header = styled.header`
  display: flex;
  padding-top: 32px;
  justify-content: space-evenly;
  font-weight: 400;
  width: 100%;


  p {
    width: 366px;
  }

  div {
    width: 355px;
  }
`;
