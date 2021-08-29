import Logo from "./logo.svg";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import { primary } from "../../config/theme";

const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  box-shadow: 0 3px 40px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  align-items: center;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
`;

const Title = styled.h1``;

const TitleLink = styled.a`
  &:hover {
    transition: all 0.25s ease-in-out;
    opacity: 0.5;
  }
`;

const TitleLinkImage = styled.img``;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.25s ease-in-out;
    opacity: 0.5;
  }
`;

export const Header = () => (
  <Wrapper>
    <Title>
      <TitleLink href="#" title="Underdev">
        <TitleLinkImage src={Logo.src} alt="Underdev" />
      </TitleLink>
    </Title>
    <MenuButton>
      <MdMenu color={primary} size="48px" />
    </MenuButton>
  </Wrapper>
);
