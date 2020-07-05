import React from 'react';
import massage1 from '../../assets/img/massage1.jpg';

function AboutMassage() {
    return (
        <section id="massage-intro">
            <div className="container section-padding">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                <h2>Benefits of Massage</h2>
                <p>
                    Experts estimate that upwards of ninety percent of disease is stress-related. And perhaps nothing ages us faster, internally and externally, than high stress. Massage is an effective tool for managing this stress, which translates into:
                </p>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <ul className="list-unstyled">
                            <li><span className="fa fa-caret-right" aria-hidden="true"></span> Decreased anxiety</li>
                            <li><span className="fa fa-caret-right" aria-hidden="true"></span> Enhanced sleep quality</li>
                            <li><span className="fa fa-caret-right" aria-hidden="true"></span> Greater energy</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <ul className="list-unstyled">
                            <li><span className="fa fa-caret-right" aria-hidden="true"></span> Improved concentration</li>
                            <li><span className="fa fa-caret-right" aria-hidden="true"></span> Increased circulation</li>
                            <li><span className="fa fa-caret-right" aria-hidden="true"></span> Reduced fatigue</li>
                        </ul>
                    </div>
                    
                </div>
                <hr/>
                </div>
                <div className="col-md-4 col-sm-12">
                        <img className="img-fluid img-thumbnail" src={massage1} alt="Beeswax Spa - Massages" />
                </div>
                <div className="col-md-12">
                <h2>
                    Massage can also help specifically address a number of health issues. Bodywork can:
                </h2>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <ul className="list-unstyled">
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span> 
                            Alleviate low-back pain and improve range of motion.
                            </li>
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span> 
                            Assist with shorter, easier labor for expectant mothers and shorten maternity hospital stays.
                            </li>
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span>
                            Ease medication dependence.
                            </li>
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span>
                            Enhance immunity by stimulating lymph flow—the body's natural defense system.
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <ul className="list-unstyled">
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span> 
                            Exercise and stretch weak, tight, or atrophied muscles.
                            </li>
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span> 
                            Help athletes of any level prepare for, and recover from, strenuous workouts.
                            </li>
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span>
                            Improve the condition of the body's largest organ—the skin.
                            </li>
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span>
                            Increase joint flexibility.
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <ul className="list-unstyled">
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span> 
                            Lessen depression and anxiety.
                            </li>
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span> 
                            Promote tissue regeneration, reducing scar tissue and stretch marks.
                            </li>
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span>
                            Pump oxygen and nutrients into tissues and vital organs, improving circulation.
                            </li>
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span>
                            Reduce postsurgery adhesions and swelling.
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <ul className="list-unstyled">
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span> 
                            Reduce spasms and cramping.
                            </li>
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span> 
                            Relax and soften injured, tired, and overused muscles.
                            </li>
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span>
                            Release endorphins—amino acids that work as the body's natural painkiller.
                            </li>
                            <li>
                            <span className="fa fa-caret-right" aria-hidden="true"></span>
                            Relieve migraine pain.
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
  
  export default AboutMassage;