import React from 'react';

function ScheduleAppointmentHeader() {
    return (
        <section className="h-slide">
            <div className="section-padding text-center">
                <a href="/schedule/book-appointment" className="btn btn-primary">
                    <i className="fa fa-calendar" aria-hidden="true"></i> Schedule an Appointment Today
                </a>
            </div>
        </section>
    ); 
  }
  
  export default ScheduleAppointmentHeader;