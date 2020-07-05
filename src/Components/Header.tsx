import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import beeswaxLogo from '../assets/img/beeswax.png';

function Header() {
    return (
        <header id="top">
            <nav id="top-nav" className="navbar navbar-expand-md desktop-only">
                <div className="container">
                    <ul className="nav navbar-nav w-100 justify-content-end">
                        <li>
                        <a href="https://www.facebook.com/beeswaxspa/" target="_blank" rel="noopener noreferrer">
                        <span className="fa fa-facebook-square" aria-hidden="true"></span>
                        </a>
                        </li>
                        <li>
                        <a href="https://www.instagram.com/explore/locations/1981098618781414/beeswax-spa/" target="_blank" rel="noopener noreferrer">
                        <span className="fa fa-instagram" aria-hidden="true"></span>
                        </a>
                        </li>
                        <li>
                        <a href="/contact#hours-section"><span className="fa fa-clock-o" aria-hidden="true"></span> Hours</a>
                        </li>
                        <li>
                        <a href="/faq">FAQs</a> 
                        </li>
                        <li>
                        <a href="/contact">Contact</a>
                        </li>
                        <li>
                        <a href="https://www.massagebook.com/biz/BeeswaxSpa#services" target="_blank" rel="noopener noreferrer">Book Now</a>
                        </li>
                    </ul>
                </div>
            </nav>
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
                                <Nav.Link href="/nails" className="main-nav-link">Nails</Nav.Link>
                                <Nav.Link href="/waxing" className="main-nav-link">Waxing</Nav.Link>
                                <Nav.Link href="https://www.doterra.com/US/en/site/jinnysmassage" target="_blank" rel="noopener noreferrer" className="main-nav-link">Essential Oils</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

            </div>
        </header>
    );
}

export default Header;