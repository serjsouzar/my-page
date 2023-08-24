"use client";

import Image from "next/image";
import Post from "../Post/Post";
import * as S from "./styles";

const RecentPosts = ({ repo }) => {
  
  let repo1Name 
  let repo1UpdatedAt;
  let repo1Desc;
  let repo1HomePage

  let repo2Name;
  let repo2UpdatedAt;
  let repo2Desc;
  let repo2HomePage;

  repo.map((r) => {
    r.name === "merlinpotions" ? repo1Name = r.name : ""
    r.name === "merlinpotions" ? repo1UpdatedAt = r.updated_at : ""
    r.name === "merlinpotions" ? repo1Desc = r.description : ""
    r.name === "merlinpotions" ? repo1HomePage = r.homepage : ""

    r.name === "MyFinance" ? repo2Name = r.name : ""
    r.name === "MyFinance" ? repo2UpdatedAt = r.updated_at : ""
    r.name === "MyFinance" ? repo2Desc = r.description : ""
    r.name === "MyFinance" ? repo2HomePage = r.homepage : ""    
  })
  
  return ( 
    <S.Container>
      <S.Header>
        <S.HeaderDiv1>
          <h4>Recent projects</h4>
        </S.HeaderDiv1>
        <S.HeaderDiv2 className="github">
          <a href="https://github.com/serjsouzar" className="view_all">View all</a>
        </S.HeaderDiv2>
      </S.Header>

      <S.PostField>
        <Post homaPage={repo1HomePage} title={repo1Name} date={repo1UpdatedAt} desc={repo1Desc}/>
        <Post homaPage={repo2HomePage} title={repo2Name} date={repo2UpdatedAt} desc={repo2Desc}/>
      </S.PostField>
    </S.Container> 
  
  );
};

export default RecentPosts;
