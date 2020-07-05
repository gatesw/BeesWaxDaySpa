import React from 'react';
import Layout from '../../Components/Layout';
import Services from '../../Components/Services';
import ServicesBar, { IServiceBarInfo } from '../../Components/ServicesBar';
import { IServiceInfo } from '../../Components/ServiceCard';
import AboutNails from './AboutNails';
import ServicesGroup from '../../Components/ServiceGroup';
import ScheduleAppointmentHeader from '../../Components/ScheduleAppointmentHeader';

export interface NailsPageData {
    services: IServiceInfo[];
    serviceBar: IServiceBarInfo;
    addOns: IServiceInfo[];
}

export interface NailsProps {
    pageData: NailsPageData;
}

function Nails({ pageData, ...rest }: NailsProps) {
    return (
      <Layout>
        <ScheduleAppointmentHeader />
        <div className="container-fluid">
            <ServicesBar serviceBarInfo={pageData.serviceBar} />
            <AboutNails />
            <Services headerText='Services' showSpecials={true}>
              <ServicesGroup serviceInfos={pageData.services} />
              <ServicesGroup serviceInfos={pageData.addOns} subHeading="Add Ons" />
            </Services>
        </div>
      </Layout>
    ); 
  }
  
  export default Nails;