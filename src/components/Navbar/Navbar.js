import React, { useEffect, useState } from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements.js';
// import logo from '../../Assets/logo.png'
// import background from '../../Assets/chatsbackground.png'
// import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import classes from './navbar.module.css'

const Navbar = () => {
    const [login, setLogin] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('email')) setLogin(true)
    }, [])
    return (
        <>
            <Nav style={{
                backgroundColor: '#212121', height: "fitContent", width: "100vw"
            }}>
                <NavLink to='/'>
                    <h1 style={{ marginBottom: "2rem", margin: "auto", marginLeft: "1rem", color: "white" }}>Aahhar</h1>

                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/buy' activeStyle>
                        Kha
                    </NavLink>
                    <NavLink to='/sell' activeStyle>
                        Khila
                    </NavLink>
                    {!login && <NavLink to='/auth' activeStyle>
                        Register Now
                    </NavLink>}
                    {login && <NavLink to={`/profile/${localStorage.getItem('user')}/${localStorage.getItem('email')}`} activeStyle>
                        Profile
                    </NavLink>}
                    {!login ? <NavBtnLink to='/login'>Sign In</NavBtnLink> : <NavBtnLink to='/login' onClick={() => localStorage.clear()}>logout</NavBtnLink>}
                </NavMenu>
                <NavBtn>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;