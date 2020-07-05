import React from 'react';
import skinCare1 from '../../assets/img/skin-care1.jpg';

function AboutSkinCare() {
    return (
        <section id="massage-intro">
            <div className="container section-padding">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <h2>Benefits of Skin Care Therapies</h2>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                        <h2 className="lead" style={{color: '#b57007'}}>Your esthetician</h2>
                            <p>
                                Your skin care treatments should be provided by a properly trained professional. Don’t hesitate to ask your skin care therapist about her background, training, and experience—especially as it relates to the treatment you are considering. Your therapist is a professional member of Associated Skin Care Professionals. Our members have been validated as meeting their state’s licensing credentials and/or core training requirements, and agree to follow a code of ethics which ensures you’ll be treated responsibly and with the utmost respect. ASCP also provides its members with comprehensive resources that allow them to keep up with changing trends, making certain you’ll receive the most up-to-date therapies available.
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <img className="img-fluid img-thumbnail" src={skinCare1} alt="Beeswax Spa - Massages" />
                        </div>
                    </div>
                    <hr />
                    <h2 className="lead" style={{color: '#b57007'}}>Techniques and products</h2>
                    <p>
                        Techniques used by estheticians include facial steaming, wrapping, exfoliation, waxing, pore cleansing, extraction, and chemical peels. Creams, lotions, wraps, clay or gel masks, and salt scrubs are used. Machines may also be used to help deliver high-tech services.
                    </p>
                    <p>
                        Some common therapies:
                    </p>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <ul className="list-unstyled">
                                <li><span className="fa fa-caret-right" aria-hidden="true"></span> 
                                    Chemical peel
                                </li>
                                <li><span className="fa fa-caret-right" aria-hidden="true"></span>
                                    Exfoliation
                                </li>
                                <li><span className="fa fa-caret-right" aria-hidden="true"></span>
                                    Extraction
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <ul className="list-unstyled">
                                <li><span className="fa fa-caret-right" aria-hidden="true"></span> 
                                    Facial
                                </li>
                                <li><span className="fa fa-caret-right" aria-hidden="true"></span> 
                                    Microdermabrasion
                                </li>
                                <li><span className="fa fa-caret-right" aria-hidden="true"></span> 
                                    Waxing
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    
                    </div>
                </div>
            </div>
        </section>
    ); 
  }
  
  export default AboutSkinCare;