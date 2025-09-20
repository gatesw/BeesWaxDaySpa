import React from 'react';

function Header() {
    return (
        <header id="top">
            <nav id="top-nav" className="navbar navbar-expand-md desktop-only fixed-top">
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
                    </ul>
                </div>
            </nav>            
        </header>
    );
}

export default Header;