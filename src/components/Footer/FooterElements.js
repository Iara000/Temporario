import styled from "styled-components"
import { Link } from "react-router-dom"
import { BsTwitter} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {MdOutlineCopyright} from 'react-icons/md'

export const FooterContainer = styled.footer `
 background-color: #fff;
 height: 300px;
 padding: 50px 50px;
 left: 0px;
 display: flex;
 bottom: 0;
 width: 100%;

`
export const FooterWrap = styled.div `
  display: flex;
  padding-left: 280px
  `

export const FooterLinkItems = styled.div `
background-color: #fff;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 margin: 16px;
 text-align: left;
 width: 216px;
 box-sizing: border-box;
 color: #000;

`
export const FooterLinkTitle = styled.h1 `
background-color: #fff; 
font-size: 16px;
 margin-bottom: 16px;
`

export const FooterLink = styled(Link) `
background-color: #fff;
color: #9092C5;
 text-decoration: none;
 margin-bottom: 0.5rem;
 font-size: 14px;
 
 &:hover {
     color:#8BA4F9;
     transition: 0.3s ease-out;
 }
`
export const Twitter = styled(BsTwitter)`
 background-color: #fff;
 font-size: 20px;

`
export const Facebook = styled(FaFacebookSquare)`
 background-color: #fff;
 font-size: 20px;

`
export const Instagram = styled(FaInstagram)`
 background-color: #fff;
 font-size: 20px;

`
export const Copyright = styled(MdOutlineCopyright)`
 background-color: #fff;
 font-size: 15px;

`
export const FooterLogo = styled.h1 `
background-color: #fff;
color: #000;
 font-weight: bold;
 font-size: 20px;
 `