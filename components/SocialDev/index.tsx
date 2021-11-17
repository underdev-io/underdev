import styled from "styled-components";
import useLocale from "../../locale";
import { HeroUnit } from "../HeroUnit";
import { Wrapper as HeroUnitWrapper } from "../HeroUnit";
import { Wrapper as LogoWrapper } from "../Logo";

const Wrapper = styled.section`
  background-color: #00e9c5;
  width: 100%;
  display: flex;
  padding: 50px;
  min-height: 100vh;
  flex-direction: column-reverse;
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

const Text = styled.p`
  max-width: 812px;
  font-size: 18px;
  line-height: 1.75;
  font-family: "Gordita Light";

  @media (min-width: 992px) {
    font-size: 21px;
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

export const SocialDev = () => {
  const { t } = useLocale();
  return (
    <Wrapper>
      <RightColumn>
        <Text style={{ margin: "0 auto", maxWidth: "600px" }}>
          {t("SOCIAL_TEXT")}
        </Text>
      </RightColumn>
      <HeroUnit title={t("SOCIAL_TITLE")} subtitle={t("SOCIAL_SUBTITLE")} />
    </Wrapper>
  );
};
