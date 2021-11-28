import React from "react";
import {
  FooterContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterWrap,
  FooterLink,
  Twitter,
  Facebook,
  Instagram,
  Copyright,
  FooterLogo,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinkItems style={{ textAlign: "center" }}>
        <FooterLinkTitle style={{ display: "flex" }}>
          <img src="./logotipo.svg" height="30" alt="Logo" />
          <FooterLogo>EletriCharge</FooterLogo>
        </FooterLinkTitle>
        <FooterLink to="./">
          Copyright
          <Copyright /> 2021 EletriCharge
        </FooterLink>
        <FooterLink to="./">Todos os direitos reservados</FooterLink>
      </FooterLinkItems>
      <FooterWrap>
        <FooterLinkItems>
          <FooterLinkTitle>Navegação</FooterLinkTitle>
          <FooterLink to="./calculadora">Calculadora</FooterLink>
          <FooterLink to="./curiosidades">Curiosidades</FooterLink>
          <FooterLink to="./pontos">Pontos de Eletropostos</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Suporte</FooterLinkTitle>
          <FooterLink to="./glossario">Glossário</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social</FooterLinkTitle>
          <FooterLink href="./">
            <Twitter /> Twitter
          </FooterLink>
          <FooterLink href="./">
            <Facebook /> Facebook
          </FooterLink>
          <FooterLink href="./">
            <Instagram /> Instagram
          </FooterLink>
        </FooterLinkItems>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
