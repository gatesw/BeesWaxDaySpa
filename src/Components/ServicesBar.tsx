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

    let className = "text-center nomarpad";
    switch(serviceBarInfo.services.length){
        case 1:
            className += ' col-lg-12 col-md-12'
            break;
        case 2:
            className += ' col-lg-6 col-md-6'
            break;
        case 3:
            className += ' col-lg-4 col-md-12'
            break;
        case 4: 
            className += ' col-lg-3 col-md-6'
            break;
    }

    return (
        <section id="s-serviceBar">
            <div className="row">
                {
                    serviceBarInfo.services.map((service, idx) => (
                        <div key={idx} className={className}>
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