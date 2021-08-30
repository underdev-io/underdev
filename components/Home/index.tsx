import styled from "styled-components";
import { Logo, Wrapper as LogoWrapper } from "../Logo";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  min-height: 600px;
  display: flex;
  padding: 20px;

  ${LogoWrapper} {
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    max-width: 280px;
  }
`;

export const Home = () => (
  <Wrapper>
    <Logo />
  </Wrapper>
);
