import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import { HeroUnit } from "../HeroUnit";
import { Wrapper as HeroUnitWrapper } from "../HeroUnit";
import { Wrapper as LogoWrapper } from "../Logo";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Wrapper = styled.section`
  background-color: #222;
  width: 100%;
  display: flex;
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

const TestimonialsList = styled(Carousel)`
  width: 100%;
  list-style-type: none;
  margin-bottom: 60px;
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #00e9c5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-slider {
    display: flex;
    align-items: center;
    column-gap: 0px;
    padding-bottom: 50px;
    max-width: 820px;
    margin: 0 auto;
  }
`;

const TestimonialsListItem = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px;

  p {
    font-family: "Gordita Light";
    line-height: 1.75;
    font-size: 18px;
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
    <TestimonialsList
      infiniteLoop
      emulateTouch
      swipeable
      showStatus={false}
      interval={5000}
      autoPlay
      stopOnHover={false}
      showThumbs={false}
      renderArrowPrev={(onClickHandler) => (
        <button className="prev" onClick={onClickHandler}>
          <MdKeyboardArrowLeft size="60px" />
        </button>
      )}
      renderArrowNext={(onClickHandler) => (
        <button className="next" onClick={onClickHandler}>
          <MdKeyboardArrowRight size="60px" />
        </button>
      )}
    >
      <TestimonialsListItem>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet
          felis odio. Suspendisse eu sollicitudin tortor. Nullam fringilla
          sagittis quam eu maximus. Mauris sollicitudin aliquam egestas.
        </p>
        <strong>Paul T.</strong>
      </TestimonialsListItem>
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
