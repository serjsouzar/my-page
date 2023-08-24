import React from "react";
//import { gsap } from "gsap";
import * as S from "./styles";
//import { ScrollTrigger } from "gsap/ScrollTrigger";
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

  repo.map((r) => {
    r.name === "merlinpotions" ? (repo1Name = r.name) : "";
    r.name === "merlinpotions" ? (repo1UpdatedAt = r.updated_at) : "";
    r.name === "merlinpotions" ? (repo1Desc = r.description) : "";
    r.name === "merlinpotions" ? (repo1HomePage = r.homepage) : "";

    r.name === "MyFinance" ? (repo2Name = r.name) : "";
    r.name === "MyFinance" ? (repo2UpdatedAt = r.updated_at) : "";
    r.name === "MyFinance" ? (repo2Desc = r.description) : "";
    r.name === "MyFinance" ? (repo2HomePage = r.homepage) : "";
  });

/*   gsap.registerPlugin(ScrollTrigger);
  gsap.to(".featured-info", {
    scrollTrigger: {
      trigger: ".featured-info",
      toggleActions: "restart pause none none",
    },
    xPercent: 50,

    duration: 5,
  }); */

  return (
    <S.Container>
      <S.Header>
        <p>Featured Works</p>
        <div></div>
      </S.Header>

      <Work
        className="featured-info"
        title={repo1Name}
        desc={repo1Desc}
        date={repo1UpdatedAt}
        homePage={repo1HomePage}
        image={"/images/merlinpotions.png"}
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
        image={"/images/myfinance.png"}
      />
      <div className="border_bottom">
        <div></div>
      </div>
    </S.Container>
  );
};

export default FeaturedWorks;
