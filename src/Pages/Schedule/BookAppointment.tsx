import React from 'react';
import Layout from '../../Components/Layout';
import SharedNavication from '../../Components/SharedNavigation';

function BookAppointment() {
    return (
      <Layout>
        <SharedNavication />     
        <div className="container fade-in">
          <iframe 
              title="Book Appointment"
              src="https://www.massagebook.com/therapists/BeeswaxSpa/widget/services"
              frameBorder="0"
              width="100%"
              height="1000">
          </iframe>
        </div>
      </Layout>
    ); 
  }
  
  export default BookAppointment;