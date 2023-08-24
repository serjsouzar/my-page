import React from "react";
import * as S from "./styles";
import Image from "next/image";

const Work = ({ homePage, title, date, desc, image }) => {
  return (
    <S.FeaturedSection>
      <S.FeaturedWork>
        <S.FeaturedInfo>
          <div className="featured-img">
            <a href={homePage}>
              <Image
                width={"240"}
                height={"180"}
                className="post1Img"
                alt="post1"
                src={image}
              />
            </a>
          </div>
          <S.Details>
            <a href={homePage}>
              <h2 id="featureadWorks1-title">{title}</h2>
            </a>
            <div id="fe-title">
              <span id="yearFeatured1">{date && date.slice(0, 4)}</span> 
              <p>|</p>
              <p>Application</p>
            </div>
            <p id="yearFeatured1Description">{desc}</p>
          </S.Details>
        </S.FeaturedInfo>
      </S.FeaturedWork>
    </S.FeaturedSection>
  );
};

export default Work;
