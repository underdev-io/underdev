import styled from "styled-components";
import { Logo } from "../Logo";

const Wrapper = styled.section`
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Home = () => (
  <Wrapper>
    <Logo />
  </Wrapper>
);
