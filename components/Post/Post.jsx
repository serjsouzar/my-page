import React from "react";
import * as S from "./styles";

const Post = ({homaPage, title, date, desc}) => {
  return (
    <S.Post>
      <a href={homaPage}>
        <S.PostTitle>{title}</S.PostTitle>
        <span id="post1-data">
          {date && date.slice(0, 10)}
        </span>
        <p id="post1-description">{desc}</p>
      </a>
    </S.Post>
  );
};

export default Post;
