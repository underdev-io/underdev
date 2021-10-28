import styled from "styled-components";
import useLocale from "../../locale";
import { HeroUnit, Line } from "../HeroUnit";
import { Wrapper as HeroUnitWrapper } from "../HeroUnit";
import { Logo, Wrapper as LogoWrapper } from "../Logo";

const Wrapper = styled.section`
  width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  padding: 20px;
  padding-bottom: 40px;
  column-gap: 60px;
  flex-direction: column;

  ${Line} {
    display: none;
  }

  ${LogoWrapper} {
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    width: 100%;
    max-width: 280px;
  }

  ${HeroUnitWrapper} {
    align-items: center;
    text-align: center;

    p {
      margin-top: 40px;
      text-align: left;
    }
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;

    ${Line} {
      display: block;
    }

    ${LogoWrapper} {
      margin: 0 auto;
      max-width: 508px;
    }
    ${HeroUnitWrapper} {
      align-items: flex-start;
      text-align: left;
    }
  }
`;

export const Home = () => {
  const { t } = useLocale();
  return (
    <Wrapper id="home">
      <Logo />
      <HeroUnit
        title={[
          "tech + human",
          "idea + development",
          "fast communication + delivery",
          "problem + experience",
        ]}
        subtitle={[
          "crafting ideas",
          "creating solutions",
          "developing art",
          "changing the world",
        ]}
        description={t("HOME_DESCRIPTION")}
      />
    </Wrapper>
  );
};
