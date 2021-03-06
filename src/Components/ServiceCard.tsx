import React from 'react';
import Card from 'react-bootstrap/Card';

export interface IServiceInfo {
    id?: string,
    name: string,
    description: string,
    price?: string
}

export interface ServiceCardProps {
    serviceInfo: IServiceInfo;
  }

  const ServiceCard = ({ serviceInfo, ...rest }: ServiceCardProps) => {
    return (
        <div className="service-card col-xs-12 col-md-6 col-lg-4">
            <Card id={serviceInfo.id}>
                <Card.Title>{serviceInfo.name}</Card.Title>
                {serviceInfo.description ? <Card.Text>{serviceInfo.description}</Card.Text> : ''}
                {serviceInfo.price ? <Card.Footer>{serviceInfo.price}</Card.Footer> : ''}
            </Card>
        </div>
      ); 
};

export default ServiceCard;