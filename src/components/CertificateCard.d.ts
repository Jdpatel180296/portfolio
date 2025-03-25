import React from 'react';
interface CertificateCardProps {
    title: string;
    issuer: string;
    date: string;
    image: string;
    description: string[];
}
declare const CertificateCard: React.FC<CertificateCardProps>;
export default CertificateCard;
