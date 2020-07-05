import React, { ReactNode } from 'react';
import ServiceCard, { IServiceInfo } from './ServiceCard';

export interface ServiceGroupProps {
    serviceInfos: IServiceInfo[];
    subHeading?: ReactNode;
}

  const ServicesGroup = ({ serviceInfos, subHeading, ...rest }: ServiceGroupProps) => {
    return (
        <div className="row">
            <div className="col-md-12">                
                {subHeading ? <h4 className="text-center">{subHeading}</h4> : ''}
                <div className="service-card-container row">                        {
                    serviceInfos.map((service, i) => {
                        return (<ServiceCard serviceInfo={service} key={i} />)
                    })
                }
                </div>
            </div>
        </div>
    ); 
};

export default ServicesGroup;