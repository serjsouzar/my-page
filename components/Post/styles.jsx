import { styled } from "styled-components";

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  text-align: justify;
  width: 368px;
  height: 295px;
  padding: 15px;
  
  transition: all ease 0.2s;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.56);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  border: 1px solid rgba(255, 255, 255, 1);

  &:hover {
    transform: scale(1.1);
    border: 2px solid #21243d;
    
    background-color: #fff;
  }
`;

export const PostTitle = styled.h2`
  color: #21243d;
  font-size: 25px;
  font-weight: 700;
`;
