import styled from "styled-components";
import { HeroUnit } from "../HeroUnit";
import { Wrapper as HeroUnitWrapper } from "../HeroUnit";
import { Wrapper as LogoWrapper } from "../Logo";

const Wrapper = styled.section`
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

export const SocialDev = () => (
  <Wrapper>
    <RightColumn>
      <Text style={{ margin: "0 auto", maxWidth: "600px" }}>
        Almost <strong>40% of public school students</strong> don´t have a
        access to internet at home, according to a study of 2020, even after the
        pandemics and distance learning.
        <br />
        We believe in <strong>democratization of knowledge</strong> so that more
        people can learn and study using the internet.
        <br />
        <br />A <strong>percentage</strong> of your buy is reverted to existing
        social projects as well as some of our own projects, like donating
        computers and cellphones for <strong>those in need</strong>.
      </Text>
    </RightColumn>
    <HeroUnit title="underdev + social " subtitle={["social projects"]} />
  </Wrapper>
);
