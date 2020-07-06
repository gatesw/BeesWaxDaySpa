import React from 'react';

export interface IServiceBarInfo {
    services: IServiceBarItem[]
}

export interface IServiceBarItem {
    display: string,
    serviceId: string,
    backgroundColor: string
}

export interface ServicesBarProps {
    serviceBarInfo: IServiceBarInfo;
}

  const ServicesBar = ({ serviceBarInfo, ...rest }: ServicesBarProps) => {
    return (
        <section id="s-serviceBar">
            <div className="row">
                {
                    serviceBarInfo.services.map((service, idx) => (
                        <div key={idx} className="col-lg-3 col-md-6 text-center nomarpad">
                            <a href={service.serviceId} className="no-underline">
                                <article style={{backgroundColor: `${service.backgroundColor}`}}>
                                    <h4>{service.display}</h4>
                                </article>
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    ); 
};

export default ServicesBar;