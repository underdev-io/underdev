import styled from "styled-components";
import { HeroUnit, Line } from "../HeroUnit";
import { Logo, Wrapper as LogoWrapper } from "../Logo";

const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 100px);
  min-height: 600px;
  display: flex;
  padding: 20px;
  flex-direction: column;

  ${Line} {
    display: none;
  }

  ${LogoWrapper} {
    display: block;
    margin-top: 40px;
    width: 100%;
    max-width: 280px;
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
  }
`;

export const Home = () => (
  <Wrapper>
    <Logo />
    <HeroUnit
      title={[
        "tech + human",
        "development + ideas",
        "fast communication + delivery",
        "problem + solution",
      ]}
      subtitle={[
        "crafting ideas",
        "intuitive solutions",
        "developing art",
        "changing the world",
      ]}
      description="Let us bring you the best solutions while you can relax and focus on growing your business.
      We are <strong>passionate about technology</strong> and convey new great projects to the digital world.
      <br /><br />We are not <em>just another web and mobile development</em> company.<br />
      We are also a <strong>startup to build great ideas</strong>.
      <br /><br />During our <em>10+ years of experience</em>, we helped people and companies <strong>all over the world</strong> to achieve their goals and develop their full potential.<br /><br />We can help you too. 🚀"
    />
  </Wrapper>
);
