import React from 'react';

export interface IServiceBarInfo {
    item1: string,
    item2: string,
    item3: string, 
    item4: string
}

export interface ServicesBarProps {
    serviceBarInfo: IServiceBarInfo;
}

  const ServicesBar = ({ serviceBarInfo, ...rest }: ServicesBarProps) => {
    return (
        <section id="s-serviceBar">
            <div className="row">
                <div className="col-lg-3 col-md-6 text-center nomarpad">			
                    <article style={{backgroundColor: '#FFD28F'}}>
                        <h4>{serviceBarInfo.item1}</h4>
                    </article>
                </div>
                <div className="col-lg-3 col-md-6 text-center nomarpad">
                    <article style={{backgroundColor: '#FFC165'}}>
                        <h4>{serviceBarInfo.item2}</h4>
                    </article>
                </div>
                <div className="col-lg-3 col-md-6 text-center nomarpad">
                    <article style={{backgroundColor: '#F09610'}}>
                        <h4>{serviceBarInfo.item3}</h4>
                    </article>
                </div>
                <div className="col-lg-3 col-md-6 text-center nomarpad">
                    <article style={{backgroundColor: '#B56F07'}}>
                        <h4>{serviceBarInfo.item4}</h4>
                    </article>
                </div>
            </div>
        </section>
    ); 
};

export default ServicesBar;