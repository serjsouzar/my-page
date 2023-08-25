import { styled } from "styled-components";

export const FeaturedWork = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 38px;
  width: 100%;
`;

export const FeaturedSection = styled.div`
  display: flex;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: space-evenly;
  font-weight: 400;
  width: 100%;

  .featured-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 450px;
  }

`;

export const FeaturedInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  

  .postImg {
    border-radius: 8px;
    border: 2px solid #21243d;
  }

  @media (max-width: 760px) {
    .postImg {
    display: none;
  }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  justify-content: space-evenly;
  gap: 10px;
  padding: 30px;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  #fe-title{
    display: flex;
    align-items: center;
    gap: 7px;
  }

  #featureadWorks1-title {
    font-size: 20px;
    font-weight: bolder;
    color: #21243d
    }
    #yearFeatured1{
    background: #21243d;
    padding-left: 10px;
    color: #fff;
    padding-right: 10px;
    font-weight: 600;
    border-radius: 14px;
  }
`;
