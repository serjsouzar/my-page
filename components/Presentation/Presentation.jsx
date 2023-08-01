"use client";

import * as S from "./styles";

const Presentation = () => {

  return (
    <S.Container>
        <div className="apresentation-section">
          <h1>Hi, I am Sergio</h1>
          <h1>Front-end Developer</h1>
          <p>
            Graduated in Systems Analysis and Development, I have been treading
            the path to develop modern and responsive applications using current
            and frequent technologies in the market.
          </p>
          <a
            className="sergiosResumeDownload"
            href="sergiosresume.pdf"
            download="sergiosresume"
          >
            <S.DownloadBtn>Download Resume</S.DownloadBtn>
          </a>
        </div>

        <div className="picture-section">
          <img
            src="https://imgur.com/P44MMVr.gif"
            alt="eusergio"
          />
          <div className="backgroundImg"></div>
        </div>
    </S.Container>
  );
};

export default Presentation;
