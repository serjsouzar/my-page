import React from "react";
import { gsap } from "gsap";
import * as S from "./styles";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FeaturedWorks = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".text", {
    scrollTrigger: {
      trigger: ".text",
      toggleActions: "restart none none none",
    },
    xPercent: 50,

    duration: 3,
  });

  return (
    <S.Container>
      <S.Header>
        <p>Featured Works</p>
        <div></div>
      </S.Header>

      {
        //feature work component here 
        //or creating a new reusable post component
        //to put here and in RecentPosts
      }

    </S.Container>
  );
};

export default FeaturedWorks;
