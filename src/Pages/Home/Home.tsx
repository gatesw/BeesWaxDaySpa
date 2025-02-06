import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../../assets/scss/App.scss';
import HoneyCombs from './HoneyCombs';
import AboutUs from './AboutUs';
import Testimonials, { ITestimonial } from './Testimonials';
import Layout from '../../Components/Layout';
import beeswaxLogo from '../../assets/img/beeswax-large.jpg';
import AnnouncementBanner from '../../Components/AnnouncementBanner';

export interface HomePageData {
  testimonials: ITestimonial[];
  anouncement?: string;
}

export interface HomeProps {
  pageData: HomePageData;
}

function Home({ pageData, ...rest }: HomeProps) {
    return (
      <Layout>
        <div className="fade-in">
        <header id="top" className="d-flex justify-content-center">
            <img className="img-fluid" src={beeswaxLogo} alt="beeswax spa"  style={{width: '364.5px', height: '95.5px'}}/>       
        </header>
        <AnnouncementBanner />
        <HoneyCombs />
          {/* <TopCarousel />   */}
          <div className="container-fluid">
              <AboutUs />
              <Testimonials testimonials={pageData.testimonials} />
              <section id="s-map">
                  <div id="map-image"></div>
                  <div className="map-content text-center">
                    <h1>Come Find Us</h1>
                      <div className="border-box-orange"></div><br/>
                      <div className="btn-group text-center">
                        <a className="btn btn-primary no-underline" href="/contact">Contact</a>
                        <a className="btn btn-primary no-underline" href="/contact">Location</a>
                      </div>
                  </div>
              </section>  
          </div>
        </div>
      </Layout>	
    ); 
  }
  
  export default Home;