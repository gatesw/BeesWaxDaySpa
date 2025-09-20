import React from 'react';

function Footer() {
    return (
        <footer id="bottom">
            <div className="container">
                <p className="text-center">
                    &copy; 2025 Beeswax Spa | All rights reserved <br />
                    <a href="/privacy">Privacy Statement</a>
                </p>
            </div>
            <div id="arrow-up-top">
                <a href="#top"><span className="fa fa-angle-up fa-4x" aria-hidden="true"></span> </a>
            </div>
        </footer>
    );
}

export default Footer;