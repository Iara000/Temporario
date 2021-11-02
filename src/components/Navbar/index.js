import React from 'react'
import {Nav, NavLink, Adm,Bars, NavMenu, NavLogo} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                 <img src='./logotipo.svg'  height="40"/><NavLogo>EletriCharge</NavLogo>
                </NavLink>
                <NavMenu>
                    <Bars/>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/calculadora" activeStyle>
                        Calculadora
                    </NavLink>
                    <NavLink to="/curiosidades" activeStyle>
                        Curiosidades
                    </NavLink>
                    <NavLink to="/pontos" activeStyle>
                        Pontos de Eletropostos
                    </NavLink>
                    <NavLink to="/glossario" activeStyle>
                        Glossário
                    </NavLink>
                    <NavLink to="/sobre-nos" activeStyle>
                        Sobre nós
                    </NavLink>
                    <Adm/>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar