import React from 'react';
import RenderMarkDown from '../../Components/RenderMarkDown';
import ServicesBar, { IServiceBarInfo } from '../../Components/ServicesBar';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ScheduleAppointmentHeader from '../../Components/ScheduleAppointmentHeader';
import Layout from '../../Components/Layout';

export interface IFaq {
  question: string,
  answer?: string,
  answerFile?: string
}

export interface FaqPageData {
  massageFaqs: IFaq[];
  skinCareFaqs: IFaq[];
  waxingFaqs: IFaq[];
  serviceBar: IServiceBarInfo;
}

export interface FaqProps {
  pageData: FaqPageData;
}

function Faq({ pageData, ...rest }: FaqProps) {


    return (
      <Layout>
        <ScheduleAppointmentHeader />
        <div className="container-fluid">
            <ServicesBar serviceBarInfo={pageData.serviceBar} />
            <section id="test-intro">
              <div className="container section-padding">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <h2>Frequently Asked Questions <span className="fa fa-info-circle" aria-hidden="true"></span></h2>
                    <h2 className="lead" style={{color: '#b57007'}}>Massages</h2>
                    <article id="faqs-massages">
                      <Accordion>
                        {pageData.massageFaqs.map((faq, idx) => (
                          <Card key={idx}>
                            <Accordion.Toggle as={Card.Header} eventKey={`${idx}`}>
                              {faq.question}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={`${idx}`}>
                              <Card.Body>
                                { faq.answerFile ? <RenderMarkDown mdFile={faq.answerFile} /> : faq.answer }
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        ))}
                      </Accordion>
                    </article>
                    <hr />
                  </div>
                  
                  <div className="col-md-12 col-sm-12">
                    <h2 className="lead" style={{color: '#b57007'}}>Facials &amp; Skin Care</h2>
                    <article id="faqs-facials">
                      <Accordion>
                        {pageData.skinCareFaqs.map((faq, idx) => (
                          <Card key={idx}>
                            <Accordion.Toggle as={Card.Header} eventKey={`${idx}`}>
                              {faq.question}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={`${idx}`}>
                              <Card.Body>
                                { faq.answerFile ? <RenderMarkDown mdFile={faq.answerFile} /> : faq.answer }
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        ))}
                      </Accordion>
                    </article>
                    <hr />
                  </div>

                  <div className="col-md-12 col-sm-12">
                    <h2 className="lead" style={{color: '#b57007'}}>Waxing</h2>
                    <article id="faqs-waxing">
                      <Accordion>
                        {pageData.waxingFaqs.map((faq, idx) => (
                          <Card key={idx}>
                            <Accordion.Toggle as={Card.Header} eventKey={`${idx}`}>
                              {faq.question}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={`${idx}`}>
                              <Card.Body>
                                { faq.answerFile ? <RenderMarkDown mdFile={faq.answerFile} /> : faq.answer }
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        ))}
                      </Accordion>
                    </article>
                  </div>
                </div>
              </div>
            </section>
        </div>
      </Layout>
    ); 
  }
  
  export default Faq;

  