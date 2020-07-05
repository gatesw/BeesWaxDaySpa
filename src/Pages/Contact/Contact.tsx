import React from 'react';
import Layout from '../../Components/Layout';
import ScheduleAppointmentHeader from '../../Components/ScheduleAppointmentHeader';

function Contact() {
    return (
      <Layout>
        <ScheduleAppointmentHeader />
        <div className="container-fluid">
          <section id="s-serviceBar">
            <div className="row">
                <div className="col-lg-3 col-md-6 text-center nomarpad">			
                    <article style={{backgroundColor: '#FFD28F'}}>
                        <h4><a className="no-underline" style={{color: '#222'}} href="tel:9204627120"><span className="fa fa-phone-square fa-lg" aria-hidden="true"></span> (920) 462-7120</a></h4>
                    </article>
                </div>
                <div className="col-lg-3 col-md-6 text-center nomarpad">
                    <article style={{backgroundColor: '#FFC165'}}>
                        <h4><a className="no-underline" style={{color: '#222'}} href="mailto:info@beeswaxdayspa.com"><span className="fa fa-envelope fa-lg" aria-hidden="true"></span> info@beeswaxdayspa.com</a></h4>
                    </article>
                </div>
                <div className="col-lg-3 col-md-6 text-center nomarpad">
                    <article style={{backgroundColor: '#F09610'}}>
                        <h4><a className="no-underline" style={{color: '#222'}} href="#map-location"><span className="fa fa-map-marker fa-lg" aria-hidden="true"></span> Location</a></h4>
                    </article>
                </div>
                <div className="col-lg-3 col-md-6 text-center nomarpad">
                    <article style={{backgroundColor: '#B56F07'}}>
                        <h4><a className="no-underline" style={{color: '#222'}} href="#hours-section"><span className="fa fa-clock-o fa-lg" aria-hidden="true"></span> Hours</a></h4>
                    </article>
                </div>
            </div>
        </section>
          <section id="map-location">
              <div className="map-responsive">
                <iframe title="location-map" width="600" height="450" frameBorder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?q=500%20Lawe%20St.%20%20Kaukauna%2C%20WI%2054130&amp;key=AIzaSyBM7dqAfoucIW2fC9tDxW50nU3a4sqQAiw" allowFullScreen={false}></iframe>
              </div>
          </section>
          <section id="hours-section">
            <div className="container section-padding">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="text-center">Hours <span className="fa fa-clock-o" aria-hidden="true"></span></h1>
                  <div className="border-box-orange"></div><br/>
                  <div id="sh-MON" className="daily-Sched"></div>
                  <table className="table table-responsive-sm">
                    <tbody className="text-center">            
                      <tr>
                        <td>Monday</td>
                        <td>12:00 pm - 05:00 pm</td>            
                      </tr>
                      <tr id="sh-TUE" className="daily-Sched">
                        <td>Tuesday</td>
                        <td>10:00 am	-	06:00 pm</td>
                      </tr>
                      <tr id="sh-WED" className="daily-Sched">
                        <td>Wednesday</td>
                        <td>10:00 am	-	06:00 pm</td>
                      </tr>
                      <tr id="sh-THU" className="daily-Sched">
                        <td>Thursday</td>
                          <td>10:00 am	-	06:00 pm</td>
                      </tr>
                      <tr id="sh-FRI" className="daily-Sched">
                        <td>Friday</td>
                        <td>10:00 am	-	08:00 pm</td>
                      </tr>
                      <tr id="sh-SAT" className="daily-Sched">
                        <td>Saturday</td>
                        <td>10:00 am	-	08:00 pm</td>
                      </tr>
                      <tr id="sh-SUN">
                        <td>Sunday</td>
                        <td>By Appointment Only</td>
                      </tr>
                      </tbody>
                  </table>			
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    ); 
  }
  
  export default Contact;