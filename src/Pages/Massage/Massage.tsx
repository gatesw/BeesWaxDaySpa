import React from 'react';
import Layout from '../../Components/Layout';
import AboutMassage from './AboutMassage';
import Services from '../../Components/Services';
import ServicesBar, { IServiceBarInfo } from '../../Components/ServicesBar';
import { IServiceInfo } from '../../Components/ServiceCard';
import ServicesGroup from '../../Components/ServiceGroup';
import ScheduleAppointmentHeader from '../../Components/ScheduleAppointmentHeader';

export interface MassagePageData {
    services: IServiceInfo[];
    massageRates: string;
    serviceBar: IServiceBarInfo;
}

export interface MassageProps {
    pageData: MassagePageData;
}

function Massage({ pageData, ...rest }: MassageProps) {
    return (
      <Layout>
        <ScheduleAppointmentHeader />
        <div className="container-fluid fade-in">
            <ServicesBar serviceBarInfo={pageData.serviceBar} />
            <AboutMassage />
            <Services headerText='Services' showSpecials={true}>
              <ServicesGroup serviceInfos={pageData.services} subHeading={(<>Massage Rates<br/> <i>{pageData.massageRates}</i>"</>)} />
            </Services>
        </div>
      </Layout>
    ); 
  }
  
  export default Massage;