/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import { HeroUnit } from "../HeroUnit";
import { Wrapper as HeroUnitWrapper } from "../HeroUnit";
import { Wrapper as LogoWrapper } from "../Logo";
import Image1 from "./1.jpg";
import Image2 from "./2.jpg";
import Image3 from "./3.jpg";
import Image4 from "./4.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import useLocale from "../../locale";

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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  column-gap: 20px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }

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

const TestimonialsListItemText = styled.div``;

const TestimonialsListItemImage = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const Testimonials = () => {
  const { t } = useLocale();
  return (
    <Wrapper id="testimonials">
      <HeroUnit
        title={t("TESTIMONIALS_TITLE")}
        subtitle={t("TESTIMONIALS_SUBTITLE")}
      />
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
          <TestimonialsListItemImage>
            <img src={Image1.src} alt="" />
          </TestimonialsListItemImage>
          <TestimonialsListItemText>
            <p>{t("TESTIMONIALS_TEXT_1")}</p>
            <strong>Paul T.</strong>
          </TestimonialsListItemText>
        </TestimonialsListItem>
        <TestimonialsListItem>
          <TestimonialsListItemImage>
            <img src={Image2.src} alt="" />
          </TestimonialsListItemImage>
          <TestimonialsListItemText>
            <p>{t("TESTIMONIALS_TEXT_2")}</p>
            <strong>Sabrina F.</strong>
          </TestimonialsListItemText>
        </TestimonialsListItem>
        <TestimonialsListItem>
          <TestimonialsListItemImage>
            <img src={Image3.src} alt="" />
          </TestimonialsListItemImage>
          <TestimonialsListItemText>
            <p>{t("TESTIMONIALS_TEXT_3")}</p>
            <strong>Adam K.</strong>
          </TestimonialsListItemText>
        </TestimonialsListItem>
        <TestimonialsListItem>
          <TestimonialsListItemImage>
            <img src={Image4.src} alt="" />
          </TestimonialsListItemImage>
          <TestimonialsListItemText>
            <p>{t("TESTIMONIALS_TEXT_4")}</p>
            <strong>Amanda S.</strong>
          </TestimonialsListItemText>
        </TestimonialsListItem>
      </TestimonialsList>
    </Wrapper>
  );
};
