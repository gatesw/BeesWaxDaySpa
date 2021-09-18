import React from 'react';
import Layout from '../../Components/Layout';
import ScheduleAppointmentHeader from '../../Components/ScheduleAppointmentHeader';
import SharedNavication from '../../Components/SharedNavigation';

function Reviews() {
    return (
      <Layout>
        <SharedNavication />        
        <ScheduleAppointmentHeader />
        <div className="container-fluid fade-in">
            <iframe 
                title="Reviews"
                src="https://www.massagebook.com/reviewspublic/myReviews/1346658"
                frameBorder="0"
                width="100%"
                height="1500">
             </iframe>
        </div>
      </Layout>
    ); 
  }
  
  export default Reviews;