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
        <div style={{ display: "flex", alignItems: 'center' }}>
          <img src="./logotipo.svg" height="30" alt="Logo" />
          <FooterLogo>EletriCharge</FooterLogo>
        </div>
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
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Suporte</FooterLinkTitle>
          <FooterLink to="./glossario">Glossário</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social</FooterLinkTitle>
          <FooterLink to='./'>
            <Twitter/> Twitter
          </FooterLink>
          <FooterLink to='./'>
            <Facebook /> Facebook
          </FooterLink>
          <FooterLink to='./'>
            <Instagram /> Instagram
          </FooterLink>
        </FooterLinkItems>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
