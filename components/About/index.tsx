import styled from "styled-components";
import { HeroUnit } from "../HeroUnit";
import { Wrapper as HeroUnitWrapper } from "../HeroUnit";
import { Wrapper as LogoWrapper } from "../Logo";
import TechImage from "./techs.svg";

const Wrapper = styled.section`
  background-color: #00e9c5;
  width: 100%;
  min-height: 120vh;
  display: flex;
  padding: 50px;
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

  @media (min-width: 992px) {
    flex-direction: row;
    min-height: 100vh;

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
  font-family: "Gordita Thin";

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

export const About = () => (
  <Wrapper id="about">
    <HeroUnit
      title={["We are goal diggers."]}
      subtitle={["We believe that we can improve the world around us."]}
    />
    <RightColumn>
      <Text>
        <strong>We love</strong> to work with technology but also with the
        people behind it. <br />
        <br />
        <strong>We are</strong> always looking for the solution to problems, be
        small or worldwide.
        <br />
        <br />
        <strong>We constantly</strong> challenge ourselves.
        <br />
        <br />
        <strong>To do so,</strong> we count on highly skilled professionals in
        some of the best technologies.
        <br />
        <br />
        We have <strong>10+ years of experience</strong> working with{" "}
        <strong>startups</strong> as well as <strong>large corporations</strong>
        , in many different projects, and{" "}
        <strong>we absolutely give our best</strong> in every and each of them.
      </Text>
      <TechList src={TechImage.src} />
    </RightColumn>
  </Wrapper>
);
