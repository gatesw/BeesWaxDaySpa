import React from 'react';
import Layout from '../../Components/Layout';
import SharedNavication from '../../Components/SharedNavigation';

function BookAppointment() {
    return (
      <Layout>
        <div className="massage-book-navigation-cover">
            <SharedNavication />
        </div>        
        <div className="container fade-in">
            <div className="massage-book-appointment">
                <iframe 
                    title="Book Appointment"
                    src="https://www.massagebook.com/business/1346658/select-product/?src=external"
                    frameBorder="0"
                    width="100%"
                    height="1000">
                </iframe>
             </div>
        </div>
      </Layout>
    ); 
  }
  
  export default BookAppointment;