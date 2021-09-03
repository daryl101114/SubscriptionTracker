import React from 'react'
import "./Header.css"
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/mySub.png';
// import AppBar from '@material-ui/core/AppBar'
// import { Toolbar } from '@material-ui/core';
// import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Header() {
    return (
        <div className="header">
            {/* <AppBar position="static">
            <Toolbar>
                <img className="header_logo" src={logo}  alt="" />
                <IconButton>
                <AccountCircleIcon fontSize="large" className="header_icon" />
                    <p>User</p>
                </IconButton>
                </Toolbar>
            </AppBar> */}
            <Navbar bg="dark" variant="dark">
            {/* <Container>  */}
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            SBSCRPTNS
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
            
        </div>
    )
}

export default Header

