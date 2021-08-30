import styled from "styled-components";

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
`;

const Line = styled.span`
  border-top: 1px solid #707070;
  width: 100%;
  display: inline-block;
  margin-bottom: 28px;
`;

const Title = styled.h1`
  font-family: "Gordita Thin";
  font-size: 26px;
  color: #707070;
  letter-spacing: -0.34px;
`;

const SubTitle = styled.h2`
  font-size: 42px;
  line-height: 1.25;
  font-family: "Gordita Bold";
  color: #707070;
  letter-spacing: 0.81px;
  margin-top: 14px;
  margin-bottom: 22px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  font-family: "Gordita Regular";
  color: #707070;
`;

export const HeroUnit = () => (
  <Wrapper>
    <Line />
    <Title>lorem ipsum dolor sit amet</Title>
    <SubTitle>lorem ipsum dolor sit amet</SubTitle>
    <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet felis
      odio. Suspendisse eu sollicitudin tortor. Nullam fringilla sagittis quam
      eu maximus. Mauris sollicitudin aliquam egestas.
    </Description>
  </Wrapper>
);
