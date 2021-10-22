import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export interface ITestimonial {
    message: string;
    clientName?: string;
}

export interface Testimonials {
    testimonials: ITestimonial[];
}

function Testimonials({ testimonials, ...rest }: Testimonials) {
    return (
        <section id="testimonials">
            <div className="container section-padding">
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={{color: '#fff'}} className="text-center">CLIENTS SAY</h1>
                        
                        <div className="box-border"></div><br/>
                        <Carousel className="clientsSayCarousel" indicators={false} controls={false} fade={true}>
                            {testimonials.map((testimonial, idx) => (
                                <Carousel.Item key={idx}>
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <p>{testimonial.message}</p>
                                            {testimonial.clientName ? <p><small>- {testimonial.clientName}</small></p> : ''}
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}                         
                        </Carousel>
                        <div className="btn-group text-center reviews-button-container">
                            <a className="btn btn-primary no-underline" href="/reviews">Read Reviews</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;