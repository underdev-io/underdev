import styled from "styled-components";
import useLocale from "../../locale";
import { HeroUnit } from "../HeroUnit";
import { Wrapper as HeroUnitWrapper } from "../HeroUnit";
import { Wrapper as LogoWrapper } from "../Logo";
import TechImage from "./techs.svg";

interface WrapperProps {
  reverse?: boolean;
}
const Wrapper = styled.section<WrapperProps>`
  background-color: #00e9c5;
  width: 100%;
  display: flex;
  padding: 50px;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${LogoWrapper} {
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    max-width: 280px;
  }

  ${HeroUnitWrapper} {
    max-width: 100%;
    margin-bottom: 20px;
  }

  ${({ reverse }) => reverse && `flex-direction: column-reverse;`}

  @media (min-width: 992px) {
    flex-direction: row;

    ${HeroUnitWrapper} {
      max-width: 600px;
    }

    ${LogoWrapper} {
      max-width: 508px;
    }
  }
`;

const Text = styled.div`
  max-width: 812px;
  font-size: 18px;
  line-height: 1.75;
  font-family: "Gordita Light";

  @media (min-width: 992px) {
    font-size: 21px;
  }
`;

const TechList = styled.img`
  width: 100%;
  max-width: 520px;
  align-self: center;
  margin-top: 40px;

  @media (min-width: 992px) {
    margin-top: 80px;
  }
`;

const RightColumn = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    padding: 40px;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

export const About = () => {
  const { t } = useLocale();
  return (
    <>
      <Wrapper id="about">
        <HeroUnit title={t("ABOUT_TITLE")} subtitle={t("ABOUT_SUBTITLE")} />
        <RightColumn>
          <Text dangerouslySetInnerHTML={{ __html: t("ABOUT_TEXT") }} />
          <TechList
            title="logos of the technologies we work with"
            src={TechImage.src}
          />
        </RightColumn>
      </Wrapper>
      <Wrapper reverse style={{ background: "#FFF" }}>
        <RightColumn>
          <Text style={{ margin: "0 auto", maxWidth: "600px" }}>
            {t("SERVICES_TEXT_1")}
            <br />
            <br />
            <ul>
              <li>{t("SERVICES_TEXT_2")}</li>
              <li>{t("SERVICES_TEXT_3")}</li>
              <li>{t("SERVICES_TEXT_4")}</li>
              <li>{t("SERVICES_TEXT_5")}</li>
              <li>{t("SERVICES_TEXT_6")}</li>
              <li>{t("SERVICES_TEXT_7")}</li>
              <li>{t("SERVICES_TEXT_8")}</li>
            </ul>
            <br />
          </Text>
        </RightColumn>
        <HeroUnit
          title={t("SERVICES_TITLE")}
          subtitle={t("SERVICES_SUBTITLE")}
        />
      </Wrapper>
      <Wrapper>
        <HeroUnit title={t("TECH_TITLE")} subtitle={t("TECH_SUBTITLE")} />
        <RightColumn>
          <Text dangerouslySetInnerHTML={{ __html: t("TECH_TEXT") }} />
        </RightColumn>
      </Wrapper>
    </>
  );
};
