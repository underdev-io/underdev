import styled from "styled-components";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";

interface WrapperProps {
  alignItems?: string;
}

export const Wrapper = styled.aside<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  align-items: ${(props) => props.alignItems};
`;

export const Line = styled.span`
  border-top: 1px solid #222;
  width: 100%;
  display: inline-block;
  margin-bottom: 28px;
`;

const Title = styled.h1`
  font-family: "Gordita Thin";
  font-size: 26px;
  color: #222;
  letter-spacing: -0.34px;
`;

const SubTitle = styled.h2`
  font-size: 42px;
  line-height: 1.25;
  font-weight: bold;
  color: #222;
  letter-spacing: 0.81px;
  margin-top: 14px;
  margin-bottom: 22px;
  font-family: "Gordita Bold";
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.75;
  font-family: "Gordita Thin";
  color: #222;

  @media (min-width: 992px) {
    font-size: 21px;
  }
`;

interface HeroUnitProps {
  title: string | string[];
  subtitle: string | string[];
  description?: string;
  alignItems?: string;
}

export const HeroUnit = ({
  title = "",
  subtitle = "",
  description = "",
  alignItems = "",
}: HeroUnitProps) => {
  const [indexTitle, setIndexTitle] = useState(0);
  const [indexSubTitle, setSubTitle] = useState(0);

  const TITLES = Array.isArray(title) ? title : [title];
  const SUB_TITLES = Array.isArray(subtitle) ? subtitle : [subtitle];

  useEffect(() => {
    const intervalTitle = setInterval(
      () => setIndexTitle((indexTitle) => indexTitle + 1),
      3000 // every 3 seconds
    );

    const intervalSubTitle = setInterval(
      () => setSubTitle((indexSubTitle) => indexSubTitle + 1),
      7000
    );
    return () => {
      clearTimeout(intervalTitle);
      clearTimeout(intervalSubTitle);
    };
  }, []);

  return (
    <Wrapper alignItems = {alignItems}>
      <Line />
      <Title>
        <TextTransition
          text={TITLES[indexTitle % TITLES.length]}
          springConfig={presets.wobbly}
        />
      </Title>
      <SubTitle>
        <TextTransition
          text={SUB_TITLES[indexSubTitle % SUB_TITLES.length]}
          springConfig={presets.wobbly}
        />
      </SubTitle>
      {description && (
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      )}
    </Wrapper>
  );
};
