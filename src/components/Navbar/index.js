import React from 'react'
import {Nav, NavLink, Adm,Bars, NavMenu, NavLogo} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                 <img src='/logotipo.svg'  height="40"/><NavLogo>EletriCharge</NavLogo>
                </NavLink>
                <NavMenu>
                    <Bars/>
                    <NavLink to="/" activeStyle={{ color: '#000' }}>
                        Home
                    </NavLink>
                    <NavLink to="/calculadora" activeStyle={{ color: '#000' }}>
                        Calculadora
                    </NavLink>
                    <NavLink to="/curiosidades" activeStyle={{ color: '#000' }}>
                        Curiosidades
                    </NavLink>
                    <NavLink to="/pontos" activeStyle={{ color: '#000' }}>
                        Pontos de Eletropostos
                    </NavLink>
                    <NavLink to="/glossario" activeStyle={{ color: '#000' }}>
                        Glossário
                    </NavLink>
                    <NavLink to="/sobre-nos" activeStyle={{ color: '#000' }}>
                        Sobre nós
                    </NavLink>
                    <NavLink to= "/adm" style={{color: "black"}}><Adm/></NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar