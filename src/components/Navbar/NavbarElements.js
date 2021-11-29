import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'
import {MdAdminPanelSettings} from 'react-icons/md'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav `

background-color: #fff;
height: 60px;
width: 100%;
display: flex;
justify-content: space-between;
// padding: 0.2rem calc((100vw - 1000px) / 2);
padding: 0.2rem 2rem;
`
export const NavLink = styled(Link)`
background-color: #fff;
color: #AAABB6;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover {
    color: #000;
}

&.active{
    color: #000
}
`
export const Bars = styled(FaBars)`
 display: none;

 @media screen and (max-width: 766px){
     color: #000;
     display: block;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size: 1.2 rem;
     cursor: pointer;
}
`

export const Adm = styled(MdAdminPanelSettings)`
   background-color: #fff;
   font-size: 30px;
   cursor: pointer;
 `
export const NavMenu = styled.div `
background-color: #fff;
 display: flex;
 align-items: center;
 margin-right: -24px;

 @media screen and (max-width: 766px){
     display: none;
 }
`
export const NavLogo = styled.h1 `
background-color: #fff;
color: #000;
font-weight: bolder;
font-size: 20px;
padding-left: 10px;
margin-bottom: 0;

`


