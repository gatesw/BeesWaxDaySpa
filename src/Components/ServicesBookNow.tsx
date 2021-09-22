import React from 'react';

export interface ServicesBookNowProps {

}

const ServicesBooNow = ({ ...rest }: ServicesBookNowProps) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="book text-center">
                    <a href="/schedule/book-appointment" className="btn btn-c-green btn-lg pull-left">Book Now</a>
                    <h3 className="pull-right" style={{padding: '10px 0'}}>Or Call <a style={{color: 'white'}} href="tel:9204627120">(920) 462-7120</a></h3>
                </div>
            </div>
        </div>
    ); 
};

export default ServicesBooNow;