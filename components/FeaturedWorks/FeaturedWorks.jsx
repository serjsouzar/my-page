import React from "react";

import * as S from "./styles";

import Work from "../Work/Work";

const FeaturedWorks = ({ repo }) => {
  let repo1Name;
  let repo1UpdatedAt;
  let repo1Desc;
  let repo1HomePage;

  let repo2Name;
  let repo2UpdatedAt;
  let repo2Desc;
  let repo2HomePage;

  let repo3Name;
  let repo3UpdatedAt;
  let repo3Desc;
  let repo3HomePage;

  repo.map((r) => {
    r.name === "promptopia" ? (repo1Name = r.name) : "";
    r.name === "promptopia" ? (repo1UpdatedAt = r.updated_at) : "";
    r.name === "promptopia" ? (repo1Desc = r.description) : "";
    r.name === "promptopia" ? (repo1HomePage = r.homepage) : "";

    r.name === "los-angeles-mountains" ? (repo2Name = r.name) : "";
    r.name === "los-angeles-mountains" ? (repo2UpdatedAt = r.updated_at) : "";
    r.name === "los-angeles-mountains" ? (repo2Desc = r.description) : "";
    r.name === "los-angeles-mountains" ? (repo2HomePage = r.homepage) : "";

    r.name === "controle-de-financas" ? (repo3Name = r.name) : "";
    r.name === "controle-de-financas" ? (repo3UpdatedAt = r.updated_at) : "";
    r.name === "controle-de-financas" ? (repo3Desc = r.description) : "";
    r.name === "controle-de-financas" ? (repo3HomePage = r.homepage) : "";

  });

  return (
    <S.Container>
      <S.Header>
        <p>Others projects</p>
        <div></div>
      </S.Header>

      <Work
        className="featured-info"
        title={repo1Name}
        desc={repo1Desc}
        date={repo1UpdatedAt}
        homePage={repo1HomePage}
        image={"/images/promptopia.png"}
        type={"Application"}
      />

      <div className="border_bottom">
        <div></div>
      </div>

      <Work
        className="featured-info"
        title={repo2Name}
        desc={repo2Desc}
        date={repo2UpdatedAt}
        homePage={repo2HomePage}
        image={"/images/los-angeles-mountains.png"}
        type={"Landing Page"}
      />
      <div className="border_bottom">
        <div></div>
      </div>

      <Work
        className="featured-info"
        title={repo3Name}
        desc={repo3Desc}
        date={repo3UpdatedAt}
        homePage={repo3HomePage}
        image={"/images/controle-de-financas.png"}
        type={"Application"}
      />
      <div className="border_bottom">
        <div></div>
      </div>
    </S.Container>
  );
};

export default FeaturedWorks;
