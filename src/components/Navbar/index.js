import React   from 'react'
import EmBreve from '../EmBreve/EmBreve';
import {Nav, NavLink, Bars, NavMenu, NavLogo, Adm} from './NavbarElements';


const Navbar = () => {

    return (
        <>
            <Nav>
                <NavLink to="/">
                 <img src='/logotipo.svg' alt="Logotipo"  height="40"/><NavLogo>EletriCharge</NavLogo>
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
                    <NavLink to="/glossario" activeStyle={{ color: '#000' }}>
                        Glossário
                    </NavLink>
                    <NavLink to= "" style={{color: 'black'}}>
                      <EmBreve text= 'Em breve'/>            
                        </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar