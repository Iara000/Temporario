import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, 
FooterLink, Twitter, Facebook,Instagram,Copyright, FooterLogo } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems style={{marginRight: '100px', textAlign:"center"}} >
                            <FooterLinkTitle  style={{display: 'flex'}}><img src='./logotipo.svg'   height="30"/><FooterLogo>EletriCharge
                                </FooterLogo></FooterLinkTitle>
                            <FooterLink to='./'>Copyright<Copyright/> 2021 EletriCharge</FooterLink>
                            <FooterLink to='./'>Todos os direitos reservados</FooterLink>
                            </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Navegação</FooterLinkTitle>
                            <FooterLink to='./sobre-nos'>Sobre nós</FooterLink>
                            <FooterLink to='./calculadora'>Calculadora</FooterLink>
                            <FooterLink to='./curiosidades'>Curiosidades</FooterLink>
                            <FooterLink to='./pontos'>Pontos de Eletropostos</FooterLink>
                            <FooterLink to='./'>Veículos elétricos cadastrados</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                   < FooterLinkItems>
                            <FooterLinkTitle>Suporte</FooterLinkTitle>
                            <FooterLink to='./glossario'>Glossário</FooterLink>
                            <FooterLink to='./'>Entre em contato</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social</FooterLinkTitle>
                            <FooterLink href='./'><Twitter/>Twitter</FooterLink>
                            <FooterLink href='./'><Facebook/>Facebook</FooterLink>
                            <FooterLink href='./'><Instagram/>Instagram</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
