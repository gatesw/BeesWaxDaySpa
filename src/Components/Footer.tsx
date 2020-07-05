import React from 'react';

function Footer() {
    return (
        <footer id="bottom">
            <div className="container">
                <p className="text-center">
                    
                    <a style={{color: '#222'}} href="tel:9204627120">920-462-7120</a> - 500 Lawe Street, Kaukauna, WI 54130
                </p>
                <p className="text-center">
                    &copy; 2020 Beeswax Spa | All rights reserved <br />
                    <a href="/privacy">Privacy Statement</a>
                </p>
                <p className="text-center">
                    <a href="https://www.massagebook.com/biz/BeeswaxSpa#services" target="_blank">
                        <img src="https://www.massagebook.com/home/img/getbutton/button-booknow.png" alt="Book Now on MassageBook.com!" style={{border: 0}} />
                    </a>
                </p>
            </div>
            <div id="arrow-up-top">
                <a href="#top"><span className="fa fa-angle-up fa-4x" aria-hidden="true"></span></a>
            </div>
        </footer>
    );
}

export default Footer;