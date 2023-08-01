"use client";

import * as S from "./styles";

const RecentPosts = ({ repo }) => {
  let repo1Name;
  let repo1UpdatedAt;
  let repo1Desc;

  let repo2Name;
  let repo2UpdatedAt;
  let repo2Desc;

  for (let i = 0; i < repo.length; i++) {
    repo[i].name === "controle-de-financas" ? (repo1Name = repo[i].name) : "";
    repo[i].name === "controle-de-financas"
      ? (repo1UpdatedAt = repo[i].updated_at)
      : "";
    repo[i].name === "controle-de-financas"
      ? (repo1Desc = repo[i].description)
      : "";

    repo[i].name === "enextgroup-technical-test"
      ? (repo2Name = repo[i].name)
      : "";
    repo[i].name === "enextgroup-technical-test"
      ? (repo2UpdatedAt = repo[i].updated_at)
      : "";
    repo[i].name === "enextgroup-technical-test"
      ? (repo2Desc = repo[i].description)
      : "";
  }

  return (
    <S.Container>
      <S.Header>
        <S.HeaderDiv1>
          <h4>Recent projects</h4>
        </S.HeaderDiv1>
        <S.HeaderDiv2>
          <a href="https://github.com/serjsouzar">View all</a>
        </S.HeaderDiv2>
      </S.Header>

      <S.PostField>
        <S.Post>
          <a href="https://controle-de-financas-pi.vercel.app">
            <S.PostTitle>{repo1Name}</S.PostTitle>
            <span id="post1-data">{repo1UpdatedAt.slice(0, 10)}</span>
            <p id="post1-description">{repo1Desc}</p>
          </a>
        </S.Post>

        <S.Post>
          <a href="https://themerlinspotions.netlify.app/">
            <S.PostTitle>{repo2Name}</S.PostTitle>
            <span id="post1-data">{repo2UpdatedAt.slice(0, 10)}</span>
            <p id="post1-description">{repo2Desc}</p>
          </a>
        </S.Post>
      </S.PostField>
    </S.Container>
  );
};

export default RecentPosts;
