import React from 'react';
import Layout from '../../Components/Layout';
import Services from '../../Components/Services';
import ServicesBar, { IServiceBarInfo } from '../../Components/ServicesBar';
import { IServiceInfo } from '../../Components/ServiceCard';
import AboutSkinCare from './AboutSkinCare';
import ServicesGroup from '../../Components/ServiceGroup';
import ScheduleAppointmentHeader from '../../Components/ScheduleAppointmentHeader';
import SharedNavication from '../../Components/SharedNavigation';

export interface SkinCarePageData {
    services: IServiceInfo[];
    serviceBar: IServiceBarInfo;
}

export interface SkinCareProps {
    pageData: SkinCarePageData;
}

function SkinCare({ pageData, ...rest }: SkinCareProps) {
    return (
      <Layout>
        <SharedNavication />
        <ScheduleAppointmentHeader />
        <div className="container-fluid fade-in">
            <ServicesBar serviceBarInfo={pageData.serviceBar} />
            <AboutSkinCare />
            <Services headerText='Services' showSpecials={true}>
              <ServicesGroup serviceInfos={pageData.services} />
            </Services>
        </div>
      </Layout>
    ); 
  }
  
  export default SkinCare;