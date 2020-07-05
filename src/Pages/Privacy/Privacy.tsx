import React from 'react';
import Layout from '../../Components/Layout';
import RenderMarkDown from '../../Components/RenderMarkDown';

function Privacy() {
    return (
        <Layout>
            <section className="h-slide">
            <div className="section-padding container-fluid text-center">
                <h1>Privacy Policy</h1>
            </div>
            </section>
            <div className="container-fluid fade-in">
                <section id="test-intro">
                  <div className="container section-padding">
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                      <RenderMarkDown mdFile='PrivacyPolicy' />
                      </div>                      
                    </div>
                  </div>
                </section>
            </div>
        </Layout>
    ); 
  }
  
  export default Privacy;