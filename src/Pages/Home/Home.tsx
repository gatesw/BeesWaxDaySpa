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
        </div>
      </Layout>	
    ); 
  }
  
  export default Home;