import React from 'react';
import nails2 from '../../assets/img/nails2.jpg';
import nails3 from '../../assets/img/nails3.jpg';

function AboutNails() {
    return (
        <section id="massage-intro">
            <div className="container section-padding">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <h2>Nails</h2>
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                            <div className="row">
                            <div className="col-md-8">
                            <h2 className="lead" style={{color: '#b57007'}}>Manicure</h2>
                                <p>
                                    Manicures are a great way to pamper yourself. They are an affordable and quick way to have beautiful, well cared for hands and nails. 
                                </p>
                                </div>
                                <div className="col-md-4">
                                    <img className="img-fluid img-thumbnail" style={{maxWidth: 260}} src={nails2} alt="Beeswax Spa - Massages" />
                                </div>
                                
                            </div>
                            <hr />
                            <div className="row">
                            
                            <div className="col-md-8">
                            
                            <h2 className="lead" style={{color: '#b57007'}}>Pedicure</h2>
                                <p>
                                    Soak your feet in our heated and vibrating foot bath. We use a pedicure system that is 100% disposable. Our pedicure chairs offer a soothing massage during your pedicure. 
                                </p>
                                </div>
                                <div className="col-md-4">
                                    <img className="img-fluid img-thumbnail" style={{maxWidth: 260}} src={nails3} alt="Beeswax Spa - Massages" />
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </section>
    ); 
  }
  
  export default AboutNails;