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
    min-height: 70vh;

    ${HeroUnitWrapper} {
      max-width: 600px;
    }

    ${LogoWrapper} {
      max-width: 508px;
    }
  }
`;

const Title = styled.h2`
  font-family: "Gordita Bold";
  font-size: 40px;
  margin-bottom: 10px;
  border-top: 1px solid #222;
  padding-top: 20px;
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
        title={["We are goal diggers."]}
        subtitle={["We believe that we can improve the world around us."]}
      />
      <RightColumn>
        <Text>
          <strong>We love</strong> to work with technology but also with the
          people behind it. <br />
          <br />
          <strong>We are</strong> always looking for the solution to problems,
          be small or worldwide.
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
          <strong>startups</strong> as well as{" "}
          <strong>large corporations</strong>, in many different projects, and{" "}
          <strong>we absolutely give our best</strong> in every and each of
          them.
        </Text>
        <TechList src={TechImage.src} />
      </RightColumn>
    </Wrapper>
    <Wrapper>
      <RightColumn>
        <Text>
          We will assist you beyond technical support, building technology
          solutions combined with minimalist design, value-added content and a
          human touch. We trust our processes and methods.
          <br />
          <br />
          We are ready to help you in every step of the way. Be an app, a
          website or someLightg in between -we:
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
      <RightColumn>
        <Text>
          Also we praise for fast communication and delivery!
          <br />
          So, shall we?
          <br />
          <br />
          This is our main stack:
          <br />
          <br />
          <strong>🧩 FRONTEND:</strong> React, React Native, Redux, Context API,
          ESLint, TypeScript, REST and GraphQL APIs.
          <br />
          <strong>💥 BACKEND:</strong> Strapi, Nest.js, Firebase, Node.js and
          Ruby on Rails.
          <br />
          <strong>🏦 DATABASES:</strong> PostgreSQL, MySQL and MongoDB.
          <br />
          <strong>⚙️ INFRASTRUCTURE:</strong> Amazon Web Services (AWS), S3,
          Docker, Compose, Nginx, Redis and Serverles.
          <br />
          <strong>🛠 CI/CD:</strong> Github Actions, Gitlab CI/CD, Jenkins.
        </Text>
      </RightColumn>
    </Wrapper>
    <Wrapper>
      <RightColumn>
        <Text>
          <Title> social dev.</Title>
          Almost 40% of public school students don´t have a access to internet
          at home, according to a study of 2020, even after the pandemics and
          distance learning.
          <br />
          <br />
          We believe in part of our goal is to democratize information so that
          more and more people can learn and study using the web.
          <br />
          <br />A percentage of your buy is reverted to existing social projects
          as well as some of our own projects, like donating computers and
          cellphones for those in need!
        </Text>
      </RightColumn>
    </Wrapper>
  </>
);
