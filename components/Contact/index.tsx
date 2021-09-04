import styled from "styled-components";
import { HeroUnit } from "../HeroUnit";
import { Wrapper as HeroUnitWrapper } from "../HeroUnit";
import { Wrapper as LogoWrapper } from "../Logo";
import { TextField, Button } from "@material-ui/core";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import emailjs from "emailjs-com";

const Wrapper = styled.section`
  background-color: #fff;
  width: 100%;
  min-height: 100vh;
  padding: 25px;
  display: flex;
  flex-direction: column;

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
    justify-content: center;

    ${HeroUnitWrapper} {
      max-width: 600px;
    }

    ${LogoWrapper} {
      max-width: 508px;
    }
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
  max-width: 820px;
  margin-right: auto;

  input,
  legend span,
  label {
    font-family: "Gordita Regular";
  }

  button {
    font-family: "Gordita Bold";
  }

  @media (min-width: 992px) {
    padding: 40px;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  column-gap: 60px;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Footer = styled.footer`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #222;
  padding-top: 20px;
  margin-top: 100px;
  font-family: "Gordita Regular";
`;

const FooterText = styled.p`
  font-size: 14px;
  letter-spacing: 0.04em;
  text-align: center;
`;

const FooterList = styled.nav`
  display: flex;
  column-gap: 15px;
  list-style-type: none;
`;

const FooterListItem = styled.a`
  color: #222;
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setLoading(true);
    await emailjs.send("service_lq6mvvq", "template_jqza7v9", {
      from_name: name,
      from_email: email,
      from_message: message,
    });

    setLoading(false);
    setSuccess(true);
  };

  return (
    <Wrapper id="contact">
      <Container>
        <HeroUnit
          title="we are curious to know you and your company better."
          subtitle="let's talk."
        />
        <RightColumn onSubmit={handleSubmit}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            label="Your name"
            fullWidth
            variant="filled"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            label="Your best e-mail"
            type="email"
            fullWidth
            variant="filled"
          />
          <TextField
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            multiline
            minRows="10"
            label="Tell us how we can help you."
            fullWidth
            variant="filled"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Send contact
          </Button>
          {(success || loading) && (
            <Paper
              style={{
                padding: 10,
                textAlign: "center",
                fontFamily: "Gordita Regular",
              }}
            >
              {loading && <CircularProgress />}
              {success && "Thanks! We'll contact you soon. ✌️"}
            </Paper>
          )}
        </RightColumn>
      </Container>
      <Footer>
        <FooterText>
          <strong>Underdev HQ</strong> Rua Portugal, 753, Higienópolis | Porto
          Alegre, Brazil
        </FooterText>
        <FooterList>
          <FooterListItem href="https://github.com/underdev-io" target="_blank">
            <FaGithub size="36px" />
          </FooterListItem>
          <FooterListItem
            href="https://medium.com/@underdev.io"
            target="_blank"
          >
            <FaMedium size="36px" />
          </FooterListItem>
          {/* <FooterListItem href="#">
            <FaInstagram size="36px" />
          </FooterListItem> */}
          <FooterListItem
            href="https://www.linkedin.com/company/underdev-io/"
            target="_blank"
          >
            <FaLinkedin size="36px" />
          </FooterListItem>
        </FooterList>
      </Footer>
    </Wrapper>
  );
};
