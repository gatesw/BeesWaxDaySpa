

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import beeswaxLogo from '../assets/img/beeswax.png';

function SharedNavication() {
    return (
        <div className="container d-flex flex-row justify-content-center align-items-center">
            <Navbar expand="md" className="main-nav">
                <Navbar.Brand href="/">
                    <img className="img-fluid" src={beeswaxLogo} alt="beeswax spa" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="p-2">
                    <Nav className="ml-auto">
                        <Nav.Link href="/" className="main-nav-link">Home</Nav.Link>
                        <Nav.Link href="/massage" className="main-nav-link">Massage</Nav.Link>
                        <Nav.Link href="/skin-care" className="main-nav-link">Facials</Nav.Link>
                        <Nav.Link href="/waxing" className="main-nav-link">Waxing</Nav.Link>
                        <Nav.Link href="https://www.doterra.com/US/en/site/jinnysmassage" target="_blank" rel="noopener noreferrer" className="main-nav-link">Essential Oils</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default SharedNavication;
