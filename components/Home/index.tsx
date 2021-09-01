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
      title={["development + active", "touch + human"]}
      subtitle={["crafting ideas", "digital to the real"]}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod nulla est, et pulvinar dui tincidunt quis."
    />
  </Wrapper>
);
