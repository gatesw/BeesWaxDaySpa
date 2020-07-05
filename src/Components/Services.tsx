import React, { ReactNode } from 'react';
import downArrow from '../assets/img/down-arrow.png';
import specials from '../assets/img/specials-icon.png';
import ServicesBooNow from './ServicesBookNow';

export interface ServicesProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showSpecials?: boolean;
    headerText?: string;
}

const Services = ({ children, headerText, showSpecials, ...rest }: ServicesProps) => {
    return (
        <section id="hours-rates">
            <div className="arrow-down-icon">
                <img className="img-fluid mx-auto" src={downArrow} alt="beeswax spa" />
            </div>
            <div className="container section-padding">
                { 
                    headerText ? 
                    (
                        <>
                            <h1 className="text-center">{headerText}</h1>
                            <div className="border-box-white"></div><br/>
                        </>
                    ) :
                    ''
                }                
                {children}
                <ServicesBooNow />
            </div>
            { 
                showSpecials ? 
                (
                    <article className="special-box text-center">
                        <a href="/specials">
                            <img className="img-fluid" src={specials} alt="beeswax spa" />
                        </a>
                    </article>
                ) :
                 ''
            }            
        </section>
    ); 
};

export default Services;