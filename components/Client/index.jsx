import styled from "styled-components";
import { HeroUnit } from "../HeroUnit";
import { Wrapper as HeroUnitWrapper } from "../HeroUnit";
import { Logo, Wrapper as LogoWrapper } from "../Logo";
import espm from "../Client/ClientLogo/espm.svg";
import pepsico from "../Client/ClientLogo/pepsico.svg";
import udacity from "../Client/ClientLogo/udacity.svg";
import americanas from "../Client/ClientLogo/americanas.svg";
import adp from "../Client/ClientLogo/adp.svg";
import mcdonalds from "../Client/ClientLogo/mcdonaldo.svg";
import hortifruti from "../Client/ClientLogo/hortifruti.svg";
import mlabs from "../Client/ClientLogo/mLabs.svg";
import nubank from "../Client/ClientLogo/nuBank.svg";
import downy from "../Client/ClientLogo/Downy.svg";
import avene from "../Client/ClientLogo/Avene.svg";

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 50px;
  flex-direction: column;
  justify-content: center;

  ${LogoWrapper} {
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    width: 100%;
    max-width: 280px;
  }

  @media (min-width: 992px) {
    ${HeroUnitWrapper} {
      max-width: 300px;
    }
  }
`;

const ClientList = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const ClientListItem = styled.li`
  width: 170px;
`;

const ClientListItemLink = styled.a`
  display: flex;
  justify-content: center;
  height: 170px;
`;

const ClientListItemImage = styled.img`
  width: 80%;
  padding: 10px;
`;

export const Client = () => (
  <Wrapper id="clients">
    <HeroUnit title="get to know" subtitle="our clients" alignItems="center" />
    <ClientList>
      <ClientListItem>
        <ClientListItemLink href="https://www.aveneusa.com/">
          <ClientListItemImage src={avene.src} />
        </ClientListItemLink>
      </ClientListItem>
      <ClientListItem>
        <ClientListItemLink href="https://br.adp.com/">
          <ClientListItemImage src={adp.src} />
        </ClientListItemLink>
      </ClientListItem>
      <ClientListItem>
        <ClientListItemLink href="https://americanas.com.br/">
          <ClientListItemImage src={americanas.src} />
        </ClientListItemLink>
      </ClientListItem>
      <ClientListItem>
        <ClientListItemLink href="https://downy.com.br/pt-br/">
          <ClientListItemImage src={downy.src} />
        </ClientListItemLink>
      </ClientListItem>
      <ClientListItem>
        <ClientListItemLink href="https://espm.br/">
          <ClientListItemImage src={espm.src} />
        </ClientListItemLink>
      </ClientListItem>
      <ClientListItem>
        <ClientListItemLink href="https://institucional.hortifruti.com.br/">
          <ClientListItemImage src={hortifruti.src} />
        </ClientListItemLink>
      </ClientListItem>
      <ClientListItem>
        <ClientListItemLink href="https://mcdonalds.com.br/">
          <ClientListItemImage src={mcdonalds.src} />
        </ClientListItemLink>
      </ClientListItem>
    </ClientList>

    <ClientList>
      <ClientListItem>
        <ClientListItemLink href="https://www.mlabs.com.br/">
          <ClientListItemImage src={mlabs.src} />
        </ClientListItemLink>
      </ClientListItem>
      <ClientListItem>
        <ClientListItemLink href="https://nubank.com.br/">
          <ClientListItemImage src={nubank.src} />
        </ClientListItemLink>
      </ClientListItem>
      <ClientListItem>
        <ClientListItemLink href="https://pepsico.com.br/">
          <ClientListItemImage src={pepsico.src} />
        </ClientListItemLink>
      </ClientListItem>
      <ClientListItem>
        <ClientListItemLink href="https://udacity.com/">
          <ClientListItemImage src={udacity.src} />
        </ClientListItemLink>
      </ClientListItem>
    </ClientList>
  </Wrapper>
);
