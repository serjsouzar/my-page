import { styled } from "styled-components";

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