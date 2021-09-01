<<<<<<< Updated upstream
import { MdDescription } from "react-icons/md";
import styled from "styled-components";
import { HeroUnit } from "../HeroUnit";
import { Wrapper as HeroUnitWrapper } from "../HeroUnit";
import { Logo, Wrapper as LogoWrapper } from "../Logo";
import TechImage from "./techs.svg";

const Wrapper = styled.section`
  background-color: #00e9c5;
  width: 100%;
  height: calc(100vh - 100px);
  min-height: 600px;
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

const RightColumn = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    padding: 40px;
    width: 50%;
  }
`;

export const About = () => (
  <Wrapper>
    <HeroUnit
      title={["development + active", "touch + human"]}
      subtitle={["crafting ideas", "digital to the real"]}
    />
    <RightColumn>
      <Text>
        {
          "Nós da Família UnderDev acreditamos que podemos  transformar o mundo a nossa volta, 1% todos os dias."
        }
        {
          "Ultilizamos algumas das melhores tecnologias e buscamos ser lembrandos, "
        }
        {"como aqueles que realmente resolvem problemas, "}
        {"Somos uma StartUp profissional e moderna, entre em contato!"}
      </Text>
      <TechList src={TechImage.src} />
    </RightColumn>
  </Wrapper>
);
=======
import { MdDescription } from "react-icons/md";
import styled from "styled-components";
import { HeroUnit} from "../HeroUnit";
import { Wrapper as HeroUnitWrapper} from "../HeroUnit";
import { Logo, Wrapper as LogoWrapper } from "../Logo";
import TechImage from "./techs.svg";

// Etapas:
// 1) Colocar cor de fundo verde (pegar no Avocode)
// 2) Colocar a coluna de texto (na direita)
// 3) Fazer a lista de tecnologias

const Wrapper = styled.section`
  background-color: #00e9c5;
  width: 100%;
  height: calc(100vh - 100px);
  min-height: 600px;
  display: flex;
  padding: 50px;
  flex-direction: row;
  flex-wrap:wrap;
  align-content: space-around;
  justify-content:center;

  ${LogoWrapper} {
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    max-width: 280px;
  }
  ${HeroUnitWrapper}{
    max-width:500px;
  }
  div{
    margin: 0 auto;
    max-width: 500px;
    font-size: 18px;
    font-family: "Gordita Thin";
  }
  
  @media (min-width:700px) and (max-width:991px){
    ${HeroUnitWrapper}{
      max-width:500px;
    }
    div{
      margin: 0 auto;
      max-width: 500px;
      font-size: 20px;
      font-family: "Gordita Thin";
    }
  }
  
  @media (min-width: 992px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;

    div{
      max-width: 600px;
      font-size:25px;
       order: -1;
       margin-right:120px;
    }

    ${LogoWrapper} {
      max-width: 508px;
    }
  }
`;


const TechList = styled.ul``;
const TechListItem = styled.img`
width:350px;
align-self:center;

@media (min-width:700px) and (max-width:991px){
  width: 500px;
  align-self:center;
}
@media (min-width: 992px){
width: 100%;
padding: 100px;
align-self: center;
}
`;



export const About = () => (
  <Wrapper>
    <HeroUnit
      title={["development + active", "touch + human"]}
      subtitle={["crafting ideas", "digital to the real"]}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod nulla est, et pulvinar dui tincidunt quis."
    />
      <div> 
      {'Nós da Família UnderDev acreditamos que podemos  transformar o mundo a nossa volta, 1% todos os dias.'}
      {'Ultilizamos algumas das melhores tecnologias e buscamos ser lembrandos, '}
      {'como aqueles que realmente resolvem problemas, '}
      {'Somos uma StartUp profissional e moderna, entre em contato!'}
      </div>
    <TechList>
      <TechListItem src={TechImage.src} />
    </TechList>
  </Wrapper>
);
>>>>>>> Stashed changes
