import styled from "styled-components";
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

export const Home = () => (
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
      description="Let us bring you creative solutions while you can relax and focus on growing your business.
      <strong>We are passionate about technology and transforming real-world problems into digital products.</strong>
      That's why we are not just another web and mobile development agency.
      We are also a startup for unconventional great ideas."
    />
  </Wrapper>
);
