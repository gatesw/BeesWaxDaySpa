import React from 'react';
import beeswaxLogo from '../assets/img/beeswax.jpg';

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
            <nav id="primary-nav" className="navbar navbar-expand-md">
                <div className="container">
                    <a id="logo" className="navbar-brand text-center" href="/">
                        <img className="img-fluid" src={beeswaxLogo} alt="beeswax spa" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars" aria-hidden="true"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main-nav">
                        <ul className="nav navbar-nav justify-content-end w-100">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/massage">Massage</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/skin-care">Facials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/nails">Nails</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/waxing">Waxing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.doterra.com/US/en/site/jinnysmassage" target="_blank" rel="noopener noreferrer">Essential Oils</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;