import styled from "styled-components";
import { HeroUnit } from "../HeroUnit";
import { Wrapper as HeroUnitWrapper } from "../HeroUnit";
import { Wrapper as LogoWrapper } from "../Logo";
import { TextField, Button } from "@material-ui/core";

const Wrapper = styled.section`
  background-color: #00e9c5;
  width: 100%;
  min-height: 100vh;
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
    margin-bottom: 40px;
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
  font-family: "Gordita Thin";

  @media (min-width: 992px) {
    font-size: 20px;
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

const RightColumn = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background: rgba(255, 255, 255, 0.01);
  border-radius: 6px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;

  input, legend span, label {
    font-family: "Gordita Regular";
  }
  
  button {
    background: #FFF;
    color: #222;
    font-family: "Gordita Bold";

    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }
  }

  @media (min-width: 992px) {
    padding: 40px;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

export const Contact = () => (
  <Wrapper>
    <HeroUnit title="get in touch" subtitle="let's talk" />
    <RightColumn>
      <TextField label="Name" fullWidth variant="outlined" />
      <TextField label="E-mail" type="email" fullWidth variant="outlined" />
      <TextField
        multiline
        minRows="10"
        label="Message"
        fullWidth
        variant="outlined"
      />
      <Button variant="contained" color="primary" fullWidth>
        Send contact
      </Button>
    </RightColumn>
  </Wrapper>
);
