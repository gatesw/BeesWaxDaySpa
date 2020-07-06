import React from 'react';
import Layout from '../../Components/Layout';
import Services from '../../Components/Services';
import { IServiceInfo } from '../../Components/ServiceCard';
import ServicesGroup from '../../Components/ServiceGroup';
import ScheduleAppointmentHeader from '../../Components/ScheduleAppointmentHeader';
import SharedNavication from '../../Components/SharedNavigation';

export interface SpecialsPageData {
    services: IServiceInfo[];
}

export interface SpecialsProps {
    pageData: SpecialsPageData;
}

function Specials({ pageData, ...rest }: SpecialsProps) {
    return (
      <Layout>
        <SharedNavication />
        <ScheduleAppointmentHeader />
        <section id="massage-intro">
          <div className="container section-padding">
            <div className="row">
              <div className="col-md-12 col-sm-12 text-center">
              <h2>Special Offers</h2>
              </div>
            </div>
          </div>
        </section>
        <div className="container-fluid fade-in">
            <Services>
              <ServicesGroup serviceInfos={pageData.services} />
            </Services>
        </div>
      </Layout>
    ); 
  }
  
  export default Specials;