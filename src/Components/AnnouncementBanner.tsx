import React from 'react';

function AnnouncementBanner() {
    return (
        <section>
            <hr />
            <div className="container section-padding">
                <div className="row">
                    <div className="col-md-12">
                        <p style={{ textAlign: 'center' }}>
                            Our time line has moved up and we will be re relocating sooner than expected.
                        </p>
                        <p style={{ textAlign: 'center', color: 'orange' }}>
                            Beeswax Gift Certificates can still be used at both of the new locations until September 30, 2025.
                        </p>
                        <p>
                            June 1 st we will be at our new locations:<br/>
                        </p>
                        <p>
                            Kim’s new studio: (Transformative Therapeutic Massage) <br/>
                            Located at: 612 E Longview Dr. Appleton, WI 54911<br/>
                            Phone: 920-515-4109
                        </p>
                        <p>
                            Jinny’s new studio: (Jinny’s Massage) <br/>
                            Located at 208 Main Avenue Kaukauna WI 54130 <br/>
                            Phone: 920 462 7120 <br/>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
  
export default AnnouncementBanner;