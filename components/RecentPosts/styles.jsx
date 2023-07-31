import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #edf7fa;
  padding-bottom: 40px;
  max-width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  padding: 40px;
  max-width: 100%;
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
`;

export const PostTitle = styled.h2`
  color: #21243d;
  font-size: 25px;
  font-weight: 700;
`;