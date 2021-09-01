import styled from "styled-components";
import TextImage from "./text.svg";
import BubbleImage from "./bubble.svg";
import { ParallaxLayer } from "@react-spring/parallax";

export const Wrapper = styled.hgroup`
  max-width: 508px;
  height: 200px;
  position: relative;

  @media (min-width: 992px) {
    height: 237px;
  }
`;

const Text = styled.h1`
  position: relative;
  z-index: 2;
`;

const TextImg = styled.img`
  width: 100%;
`;

const Bubble = styled.span`
  position: absolute;
  top: -20px;
  right: 0;
  width: 100%;
  max-width: 160px;

  @media (min-width: 992px) {
    max-width: 280px;
  }
`;

const BubbleImg = styled.img`
  width: 100%;
`;

export const Logo = () => (
  <Wrapper>
    <Text>
      <ParallaxLayer offset={0.01} speed={1.5}>
        <TextImg src={TextImage.src} alt="Underdev" />
      </ParallaxLayer>
    </Text>
    <Bubble>
      <ParallaxLayer offset={0} speed={0.5}>
        <BubbleImg src={BubbleImage.src} alt="Underdev" />
      </ParallaxLayer>
    </Bubble>
  </Wrapper>
);
