import { styled } from "styled-components";

//#edf7fa;

export const Container = styled.div`
/* From https://css.glass */
/* From https://css.glass */
background: rgba(3, 2, 57, 0.21);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.5px);
-webkit-backdrop-filter: blur(8.5px);
border: 1px solid rgba(3, 2, 57, 0.53);
  padding-bottom: 40px;
  max-width: 100%;
  z-index: 5;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  padding: 40px;
  max-width: 100%;
  position: relative;
`;

export const HeaderDiv1 = styled.div`
  width: 380px;

  @media (max-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderDiv2 = styled.div`
  display: flex;
  justify-content: end;
  width: 395px;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const PostField = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #fff;
  text-align: justify;
  width: 368px;
  height: 295px;
  padding: 15px;
  border-radius: 4px;
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.1);
    border: 2px solid #21243d;
    border-radius: 0.5rem;
  }
`;

export const PostTitle = styled.h2`
  color: #21243d;
  font-size: 25px;
  font-weight: 700;
`;
