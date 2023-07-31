import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
  padding-bottom: 40px;
  padding-top: 40px;
  

  .picture-section img {
    width: 243px;
    height: 243px;
    border-radius: 50%;
  }

  .apresentation-section {
    max-width: 328px;
    line-height: 24px;
  }

  .apresentation-section {
    max-width: 497px;
    line-height: 24px;
  }
  .apresentation-section h1 {
    margin-top: 20px;
    color: #21243d;
    font-weight: 800;
    font-size: 44px;
    line-height: 24px;
  }

  .apresentation-section p {
    margin-top: 40px;
    margin-bottom: 10px;
  }

  @media (max-width: 760px) {
    .apresentation-section {
      max-width: 328px;
      text-align: center;
      line-height: 24px;
    }

    .apresentation-section h1 {
      margin-top: 10px;
      margin-bottom: 10px;
      line-height: 40px;
    }

    .apresentation-section p {
      margin-bottom: 10px;
    }

    .apresentation-section button {
      margin-top: 20px;
      margin-bottom: 20px;
      cursor: pointer;
    }
  }
`;

export const H1 = styled.div`
  font-size: 100px;
  color: #0a67d1;
`;

export const DownloadBtn = styled.button`
  width: 208px;
  height: 47px;
  border-radius: 2px;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  background-color: #ff6464;
  margin-top: 47px;
`;
