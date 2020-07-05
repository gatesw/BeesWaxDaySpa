import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../../assets/scss/App.scss';
import TopCarousel from './TopCarousel';
import HoneyCombs from './HoneyCombs';
import AboutUs from './AboutUs';
import Testimonials, { ITestimonial } from './Testimonials';
import Layout from '../../Components/Layout';

export interface HomePageData {
  testimonials: ITestimonial[];
}

export interface HomeProps {
  pageData: HomePageData;
}

function Home({ pageData, ...rest }: HomeProps) {
    return (
      <Layout>
        <TopCarousel />  
        <div className="container-fluid">  
            <HoneyCombs />  
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
      </Layout>	
    ); 
  }
  
  export default Home;