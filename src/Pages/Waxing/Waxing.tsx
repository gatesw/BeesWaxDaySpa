import React from 'react';
import Layout from '../../Components/Layout';
import Services from '../../Components/Services';
import ServicesBar, { IServiceBarInfo } from '../../Components/ServicesBar';
import { IServiceInfo } from '../../Components/ServiceCard';
import ServicesGroup from '../../Components/ServiceGroup';
import AboutWaxing from './AboutWaxing';
import ScheduleAppointmentHeader from '../../Components/ScheduleAppointmentHeader';

export interface WaxingPageData {
    mensServices: IServiceInfo[];
    womensServices: IServiceInfo[];
    serviceBar: IServiceBarInfo;
}

export interface WaxingProps {
    pageData: WaxingPageData;
}

function Waxing({ pageData, ...rest }: WaxingProps) {
    return (
      <Layout>
        <ScheduleAppointmentHeader />
        <div className="container-fluid">
            <ServicesBar serviceBarInfo={pageData.serviceBar} />
            <AboutWaxing />
            <Services headerText='Services' showSpecials={true}>
              <ServicesGroup serviceInfos={pageData.womensServices} subHeading="Women's Waxing" />
              <ServicesGroup serviceInfos={pageData.mensServices} subHeading="Men's Waxing" />
            </Services>
        </div>
      </Layout>
    ); 
  }
  
  export default Waxing;