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
    height: calc(100vh - 100px);
    min-height: 600px;
    display: flex;
    padding: 50px;
    flex-flow: column wrap;
    align-items: center;

    ${LogoWrapper} {
        display: block;
        margin: 0 auto;
        margin-top: 40px;
        width: 100%;
        max-width: 280px;
    }

    ${HeroUnitWrapper} {
        max-width: 100%;
        margin-bottom: 40px;
    }
    @media (min-width: 700px) and (max-width: 991px){
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 992px) {
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
    
        ${LogoWrapper} {
            max-width: 508px;
        }

        ${HeroUnitWrapper}
        {
            max-width:300px;
        }
    }
`;

const ClientList = styled.ul`
    margin-top: 20px;
    list-style-type: none;
    align-items: center;
    jusftify-content: center
`;
const ClientListItem = styled.li`
    max-width: 100%;
`;
const ClientListItemLink = styled.a``;
const ClientListItemImage = styled.img `
    max-width:80px;
    padding: 10px;
`;


export const Client = () => (
    <Wrapper>
        <HeroUnit title=" get in touch" subtitle=" Our Clients" alignItems= "center" />
            <ClientList>
                <ClientListItem>
                    <ClientListItemLink href="https://espm.br/">
                        <ClientListItemImage src={espm.src} />
                    </ClientListItemLink>

                    <ClientListItemLink href="https://pepsico.com.br/">
                        <ClientListItemImage src={pepsico.src} />
                    </ClientListItemLink>

                    <ClientListItemLink href="https://udacity.com/">
                        <ClientListItemImage src={udacity.src} />
                    </ClientListItemLink>

                    <ClientListItemLink href="https://americanas.com.br/">
                        <ClientListItemImage src={americanas.src} />
                    </ClientListItemLink>

                    <ClientListItemLink href="https://br.adp.com/">
                        <ClientListItemImage src={adp.src} />
                    </ClientListItemLink>

                    <ClientListItemLink href="https://mcdonalds.com.br/">
                        <ClientListItemImage src={mcdonalds.src} />
                    </ClientListItemLink>

                    <ClientListItemLink href="https://institucional.hortifruti.com.br/">
                        <ClientListItemImage src={hortifruti.src} />
                    </ClientListItemLink>

                    <ClientListItemLink href="https://www.mlabs.com.br/">
                        <ClientListItemImage src={mlabs.src} />
                    </ClientListItemLink>
                </ClientListItem>
            </ClientList>
            
            <ClientList>
                <ClientListItem>
                    <ClientListItemLink href="https://nubank.com.br/">
                        <ClientListItemImage src={nubank.src} />
                    </ClientListItemLink>

                    <ClientListItemLink href="https://downy.com.br/pt-br/">
                        <ClientListItemImage src={downy.src} />
                    </ClientListItemLink>

                    <ClientListItemLink href="https://www.aveneusa.com/">
                        <ClientListItemImage src={avene.src} />
                    </ClientListItemLink>
                </ClientListItem>    
            </ClientList>
    </Wrapper>
);