// src/components/NavBar.js
import '../App.scss'

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import {BsHouseFill} from 'react-icons/bs'


const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <Navbar bg="success">
                <span style={{paddingRight: 1400, color: 'white'}}>Leadhr<img src="https://leadhr.co/wp-content/themes/leadhr/img/mark.svg" alt="Leadhr" /></span>
            {!isAuthenticated && (
                <Button variant="outline-primary" onClick={() => loginWithRedirect({})} >Log In</Button>
            )}

            {isAuthenticated && (
                <Button variant="outline-primary" onClick={() => logout()}>Log Out</Button>
            )}
            {/* NEW - add a link to the home and profile pages */}
            {isAuthenticated && (
                <span >
                    {/* <Link to="/"><Button variant="outline-primary"><BsHouseFill /></Button></Link> */}
                    {/* <Link to="/profile"><Button variant="outline-primary">Profile</Button></Link> */}
                </span>
            )}
        </Navbar>
    );
};

export default NavBar;
