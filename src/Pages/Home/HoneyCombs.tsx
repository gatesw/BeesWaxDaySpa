import React from 'react';
import massageThumb from '../../assets/img/massage-thumb.png';
import skinThumb from '../../assets/img/skin-thumb.png';
import waxingThumb from '../../assets/img/waxing-thumb.png';
import specThumb from '../../assets/img/spec-thumb.png';
import essentialOilsThumb from '../../assets/img/essential-oils-thumb.png';
import bookThumb from '../../assets/img/book-thumb.png';

function HoneyCombs() {
    return (
        <section id="call-out">
        <div className="container">
          <div className="row">
            <div className="honeycombs">
              <ul className="hexGrid">
                <li className="hex">
                  <a className="hexIn" href="/massage">
                    <img src={massageThumb} alt="" />
                    <span>
                      <p>Massage</p>
                    </span>
                  </a>
                </li>
                <li className="hex">
                  <a className="hexIn" href="/skin-care">
                    <img src={skinThumb} alt="" />
                    <span>
                      <p>Facials/Skin</p>
                    </span>
                  </a>
                </li>
                <li className="hex">
                  <a className="hexIn" href="/waxing">
                    <img src={waxingThumb} alt="" />
                    <span>
                      <p>Waxing</p>
                    </span>
                  </a>
                </li>
                <li className="hex">
                  <a className="hexIn" href="/specials">
                    <img src={specThumb} alt="" />
                    <span>
                      <p>Specials</p>
                    </span>
                  </a>
                </li>
                <li className="hex">
                  <a className="hexIn" href="https://www.doterra.com/US/en/site/jinnysmassage"  target="_blank" rel="noopener noreferrer">
                    <img src={essentialOilsThumb} alt="" />
                    <span>
                      <p>Essential Oils</p>
                    </span>
                  </a>
                </li>
                <li className="hex">
                  <a className="hexIn" href="/schedule/book-appointment">
                    <img src={bookThumb} alt="" />
                    <span>
                      <p>Schedule Appointment</p>
                    </span>
                  </a>
                </li>
                <li className="hex">
                  <a className="hexIn" href="/reviews">
                    <img src={bookThumb} alt="" />
                    <span>
                      <p>Read Reviews</p>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
}

export default HoneyCombs;