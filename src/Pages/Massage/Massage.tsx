import React from 'react';
import Layout from '../../Components/Layout';
import AboutMassage from './AboutMassage';
import Services from '../../Components/Services';
import ServicesBar, { IServiceBarInfo } from '../../Components/ServicesBar';
import { IServiceInfo } from '../../Components/ServiceCard';
import ServicesGroup from '../../Components/ServiceGroup';
import ScheduleAppointmentHeader from '../../Components/ScheduleAppointmentHeader';
import SharedNavication from '../../Components/SharedNavigation';

export interface MassagePageData {
    services: IServiceInfo[];
    serviceBar: IServiceBarInfo;
}

export interface MassageProps {
    pageData: MassagePageData;
}

function Massage({ pageData, ...rest }: MassageProps) {
    return (
      <Layout>
        <SharedNavication />
        <ScheduleAppointmentHeader />
        <div className="container-fluid fade-in">
            <ServicesBar serviceBarInfo={pageData.serviceBar} />
            <AboutMassage />
            <Services headerText='Services' showSpecials={false}>
              <ServicesGroup serviceInfos={pageData.services} />
            </Services>
        </div>
      </Layout>
    ); 
  }
  
  export default Massage;