
import React from 'react';

import CertificateCard from '../components/CertificateCard';
interface CertificatesProps {
  id?: string;
}

const Certificates: React.FC<CertificatesProps> = ({ id }) => {
  const certificates = [
    {
      title: "Walmart Simulation",
      issuer: "Forage",
      date: "September 2024",
      image: "certificates/Wallmart.png",
      description: [
        "Completed the Advanced Software Engineering Job Simulation where I solved difficult technical projects for a variety of teams at Walmart.",
        "Developed a novel version of a heap data structure in Java for Walmart's shipping department, showcasing strong problem-solving and algorithmic skills.",
        "Designed a UML class diagram for a data processor, considering different operating modes and database connections.",
        "Created an entity relationship diagram to design a new database accounting for all requirements provided by Walmart's pet department."
      ]
    },
    {
      title: "JP Morgan",
      issuer: "Forage",
      date: "July 2024",
      image: "certificates/JPMorgan.png",
      description: [
        "Set up a local dev environment by downloading the necessary files, tools and dependencies.",
        "Fixed broken files in the repository to make web application output correctly.",
        "Used JPMorgan Chase's open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor."
      ]
    },
    {
      title: "React Training Certificate",
      issuer: "LinkedIn Learning",
      date: "Nov 2024",
      image: "certificates/ReactTraining.png",
      description: [
        "Mastered advanced React concepts and patterns",
        "Built complex applications with hooks and context API",
        "Implemented efficient state management techniques"
      ]
    },
    {
      title: "JavaScript Practitioner",
      issuer: "LinkedIn Learning",
      date: "Oct 2024",
      image: "certificates/jsprectice.png",
      description: [
        "Developed advanced JavaScript skills and patterns",
        "Mastered asynchronous programming techniques",
        "Created high-performance web applications"
      ]
    },
    {
      title: "Numpy Training",
      issuer: "LinkedIn Learning",
      date: "Nov 2024",
      image: "certificates/NumpyCerti.png",
      description: [
        "Learned data manipulation with NumPy arrays",
        "Mastered scientific computing fundamentals",
        "Applied numerical methods to real-world problems"
      ]
    }
  ];

  return (

      <section id={id} className="py-16 px-3 bg-section1 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="section-title">Certificates</h1>
            <p className="text-gray-600 mt-4">Professional certificates and achievements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={index}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                image={cert.image}
                description={cert.description}
              />
            ))}
          </div>
        </div>
      </section>

  );
};

export default Certificates;
