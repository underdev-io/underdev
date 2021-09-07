import styled from "styled-components";
import { HeroUnit } from "../HeroUnit";
import { Wrapper as HeroUnitWrapper } from "../HeroUnit";
import { Wrapper as LogoWrapper } from "../Logo";
import TechImage from "./techs.svg";

interface WrapperProps {
  reverse?: boolean;
}
const Wrapper = styled.section<WrapperProps>`
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

  ${({ reverse }) => reverse && `flex-direction: column-reverse;`}

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

const Text = styled.div`
  max-width: 812px;
  font-size: 18px;
  line-height: 1.75;
  font-family: "Gordita Light";

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
  <>
    <Wrapper id="about">
      <HeroUnit
        title={["we are goal diggers."]}
        subtitle={["we believe that we can improve the world around us."]}
      />
      <RightColumn>
        <Text>
          We love to work with <strong>technology</strong> but also with the{" "}
          <strong>people behind it</strong>. <br />
          We are always looking for the <strong>solution to problems</strong>,
          be small or worldwide.
          <br />
          We constantly <strong>challenge ourselves</strong>.
          <br />
          We count on <strong>highly skilled professionals</strong> in some of
          the <strong>best technologies.</strong>
          <br />
          We have <strong>10+ years of experience</strong> working with startups
          as well as large corporations, and we <strong>give our best</strong>{" "}
          in every project.
        </Text>
        <TechList
          title="logos of the technologies we work with"
          src={TechImage.src}
        />
      </RightColumn>
    </Wrapper>
    <Wrapper reverse style={{ background: "#FFF" }}>
      <RightColumn>
        <Text style={{ margin: "0 auto", maxWidth: "600px" }}>
          We build technology solutions combined with minimalist design,
          value-added content and a human touch. Be an app, a website or
          something in between - we:
          <br />
          <br />
          <ul>
            <li>
              <strong>Validate</strong> ideas;
            </li>
            <li>
              Create <strong>digital</strong> solutions;
            </li>
            <li>
              <strong>Optimize</strong> processes;
            </li>
            <li>
              Develop <strong>web and mobile projects</strong> from scratch;
            </li>
            <li>
              <strong>Improve</strong> an already existing product;
            </li>
            <li>
              Build the <strong>e-commerce</strong> for your brand;
            </li>
            <li>
              Use <strong>UX/UI design</strong> to create an awesome user
              experience.
            </li>
          </ul>
          <br />
        </Text>
      </RightColumn>
      <HeroUnit
        title={["our services"]}
        subtitle={["we are ready to support you in every step of the way."]}
      />
    </Wrapper>
    <Wrapper>
      <HeroUnit
        title={["our main stack"]}
        subtitle={["some of the technologies we use on a daily basis."]}
      />
      <RightColumn>
        <Text>
          <strong>🧩 FRONTEND:</strong> React, React Native, Redux, Context API,
          ESLint, TypeScript, REST and GraphQL APIs.
          <br />
          <br />
          <strong>💥 BACKEND:</strong> Strapi, Nest.js, Firebase, Node.js and
          Ruby on Rails.
          <br />
          <br />
          <strong>🏦 DATABASES:</strong> PostgreSQL, MySQL and MongoDB.
          <br />
          <br />
          <strong>⚙️ INFRASTRUCTURE:</strong> Amazon Web Services (AWS), S3,
          Docker, Compose, Nginx, Redis and Serverles.
          <br />
          <br />
          <strong>🛠 CI/CD:</strong> Github Actions, Gitlab CI/CD, Jenkins.
        </Text>
      </RightColumn>
    </Wrapper>
  </>
);
