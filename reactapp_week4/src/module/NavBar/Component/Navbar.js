import React from "react";
import { Link, NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Nav from 'react-bootstrap/Nav';
import '../Container/navbar.css'

const NavBar = () => {
    return (
        <div className="navbar">
        <AppBar position="static" style={{ background: 'transparent' }}>
        <Container maxWidth="xl">
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 4, sm: 3, md: 8 }}
                alignItems="center"
                justifyContent="center"
            >
                    <NavLink className="link" to='/Dashboard'>Dashboard</NavLink>
                    <Link className="link" to="/ScoreDisplay">Score</Link>
                    <Link className="link" to='/PopPlayData'>Popular Player Data</Link>
                    <Link className="link" to="/About">About Us</Link>
                    <Link className="link" to="/Contact">Contact Us</Link>
                    <Nav>
                    </Nav>
            </Stack>
       </Container>
       </AppBar>
       </div>
    )
}

export default NavBar;