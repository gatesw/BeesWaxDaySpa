import React from 'react';

function ScheduleAppointmentHeader() {
    var isAppleBrowser = navigator.vendor.includes('Apple')

    return (
        <section className="h-slide">
            <div className="section-padding text-center">
                {isAppleBrowser ? 
                    <a href="https://www.massagebook.com/biz/BeeswaxSpa#services" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <i className="fa fa-calendar" aria-hidden="true"></i> Schedule an Appointment Today
                    </a> : 
                    <a href="/schedule/book-appointment" className="btn btn-primary">
                        <i className="fa fa-calendar" aria-hidden="true"></i> Schedule an Appointment Today
                    </a>
                }                
            </div>
        </section>
    ); 
  }
  
  export default ScheduleAppointmentHeader;