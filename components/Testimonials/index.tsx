import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
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
  color: #00e9c5;

  ${LogoWrapper} {
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    max-width: 280px;
  }

  ${HeroUnitWrapper} {
    margin: 0 auto;
    max-width: 400px;
    margin-top: 100px;
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

const TestimonialsListWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 50px;

  button {
    width: 60px;
    height: 60px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #00e9c5;
  }
`;

const TestimonialsList = styled.ul`
  width: 100%;
  list-style-type: none;
  margin-top: 60px;
`;

const TestimonialsListItem = styled.li`
  width: 100%;
  max-width: 620px;

  p {
    font-family: "Gordita Light";
    line-height: 1.75;
    font-size: 21px;
  }

  strong {
    font-family: "Gordita Bold";
    line-height: 1.75;
    font-size: 22px;
    margin-top: 20px;
    display: block;
  }
`;

export const Testimonials = () => (
  <Wrapper id="testimonials">
    <HeroUnit title="lorem ipsum" subtitle={["testimonials"]} />
    <TestimonialsListWrapper>
      <button>
        <MdKeyboardArrowLeft size="60px" />
      </button>
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
      <button>
        <MdKeyboardArrowRight size="60px" />
      </button>
    </TestimonialsListWrapper>
  </Wrapper>
);
