import React from 'react';

export interface IAnnouncement {
    html: string
}

function AnnouncementBanner({ html, ...rest }:IAnnouncement) {
    return (
        <section>
            <hr />
            <div className="text-center" style={{paddingBottom: "1em"}}>
                <div dangerouslySetInnerHTML={{__html: html}}></div>
            </div>
        </section>
    );
}
  
export default AnnouncementBanner;