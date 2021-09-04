import styled from "styled-components";
import { HeroUnit } from "../HeroUnit";
import { Wrapper as HeroUnitWrapper } from "../HeroUnit";
import { Wrapper as LogoWrapper } from "../Logo";

const Wrapper = styled.section`
  background-color: #222;
  width: 100%;
  display: flex;
  padding: 50px;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  color: #fff;

  ${LogoWrapper} {
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    max-width: 280px;
  }

  ${HeroUnitWrapper} {
    margin: 0 auto;
    max-width: 400px;
    margin-top: 60px;
    margin-bottom: 20px;
    align-items: center;

    span {
      border-color: #00e9c5;
    }

    h2,
    h1,
    p {
      color: #00e9c5;
    }
  }
`;

const TestimonialsList = styled.ul`
  width: 100%;
`;

const TestimonialsListItem = styled.li`
  width: 100%;
`;

export const Testimonials = () => (
  <Wrapper id="testimonials">
    <HeroUnit title="lorem ipsum" subtitle={["testimonials"]} />
    <TestimonialsList>
      <TestimonialsListItem>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet
          felis odio. Suspendisse eu sollicitudin tortor. Nullam fringilla
          sagittis quam eu maximus. Mauris sollicitudin aliquam egestas.
        </p>
        <strong>Paul T.</strong>
      </TestimonialsListItem>
    </TestimonialsList>
  </Wrapper>
);
