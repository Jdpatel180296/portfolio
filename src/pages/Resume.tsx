
import React from 'react';

import {  Download, Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

interface ResumeProps {
  id?: string;
}

const Resume: React.FC<ResumeProps> = ({ id }) => {
  return (

      <section id={id} className="bg-section2 min-h-screen py-16 px-6 flex fex-col">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="section-title">Resume</h1>
            <p className="text-gray-600 mt-4">My educational background and professional experience</p>
          </div>
          
          <div className="flex justify-center mb-10">
            <a 
              href="/Resume.pdf" 
              className="btn"
              target='_blank'
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </div>
          
          <div className="bg-section1 rounded-lg shadow-lg p-8 mb-10">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-header mr-3" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            
            <div className="border-l-2 border-gray-200 pl-5 ml-3 space-y-8">
              <div className="relative">
                <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
                <h3 className="text-xl font-bold">Master's in computer science</h3>
                <p className="text-gray-700">California State University, Los Angeles</p>
                <p className="text-gray-500">Los Angeles, California</p>
                <p className="text-gray-600 mt-1">GPA: 3.7</p>
                <p className="text-gray-600">Expected - May 2025</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
                <h3 className="text-xl font-bold">Bachelor of Computer Engineering</h3>
                <p className="text-gray-700">Gujarat Technological University</p>
                <p className="text-gray-500">Gujarat, India</p>
                <p className="text-gray-600 mt-1">GPA: 3.44</p>
                <p className="text-gray-600">Aug 2013 - Jun 2017</p>
              </div>
            </div>
          </div>
          
          <div className="bg-section1 rounded-lg shadow-lg p-8 mb-10">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-header mr-3" />
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>
            
            <div className="border-l-2 border-gray-200 pl-5 ml-3 space-y-8">
              <div className="relative">
                <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
                <h3 className="text-xl font-bold">SR. Software Developer</h3>
                <p className="text-gray-700">Alphaved Pvt Ltd | Surat, Gujarat, India</p>
                <p className="text-gray-500">Jun 2020 - Jul 2023</p>
                <p className="mt-2"><span className="font-semibold">Project:</span> Desilook Lifestyle</p>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  <li>Contributed to the development of Desilook Lifestyle, an e-commerce platform focused on offering a wide range of ethnic fashion and lifestyle products.</li>
                  <li>Developed a personalized recommendation engine that contributed to a 25% increase in user engagement.</li>
                  <li>Integrated secure payment gateways, including Razorpay, using RESTful APIs.</li>
                  <li>Implemented Redis for Asynchronous data storage and caching, leading to a 24% improvement in API response times.</li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
                <h3 className="text-xl font-bold">Software Developer</h3>
                <p className="text-gray-700">WebcodeZ Infoway | Rajkot, Gujarat, India</p>
                <p className="text-gray-500">Feb 2018 - May 2020</p>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  <li>Assisted in building server-side applications using Node.js and Express for the Angel Cineworld project.</li>
                  <li>Revamped testing and debugging processes using Jest and Enzyme for React components, achieving a 30% reduction in performance bottlenecks.</li>
                  <li>Engaged in code maintenance, debugging issues, and participating in code reviews.</li>
                  <li>Implemented MongoDB, leading to a 25% improvement in data retrieval efficiency.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-section1 rounded-lg shadow-lg p-8 mb-10">
            <div className="flex items-center mb-6">
              <Trophy className="w-6 h-6 text-header mr-3" />
              <h2 className="text-2xl font-bold">Projects</h2>
            </div>
            
            <div className="border-l-2 border-gray-200 pl-5 ml-3 space-y-8">
              <div className="relative">
                <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
                <h3 className="text-xl font-bold">AI Town Simulation</h3>
                <p className="text-gray-700 italic">Oct 2023 - Dec 2023</p>
                <p className="text-gray-600 mt-1">Technologies Used: JavaScript, TypeScript, Node.js, Python, GPT-4 API, Convex</p>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  <li>Developed an interactive AI simulation called AI Town using the GPT-4 API.</li>
                  <li>Created autonomous agents that roam a virtual town and engage in dynamic conversations.</li>
                  <li>Deployed the application using Convex, enabling real-time data synchronization and live updates.</li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
                <h3 className="text-xl font-bold">Restaurant Application</h3>
                <p className="text-gray-700 italic">Sep 2023 - Nov 2023</p>
                <p className="text-gray-600 mt-1">Technologies Used: React Native, Firebase</p>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  <li>Designed a mobile application using React Native, achieving 76% efficiency in performance.</li>
                  <li>Utilized QR codes for table reservation and assignment, resulting in a 50% reduction in reservation time.</li>
                  <li>Implemented live traffic observation and revenue prediction features for the management side.</li>
                  <li>Integrated sorting and binary search algorithms to enhance food item search speed by 83%.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-section1 rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-header mr-3" />
              <h2 className="text-2xl font-bold">Certifications</h2>
            </div>
            
            <div className="border-l-2 border-gray-200 pl-5 ml-3 space-y-6">
              <div className="relative">
                <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
                <h3 className="text-xl font-bold">Walmart's Advanced Software Engineering Job Simulation</h3>
                <p className="text-gray-700">Forage | Sep 2024</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
                <h3 className="text-xl font-bold">J.P. Morgan Software Engineering Virtual Experience</h3>
                <p className="text-gray-700">Forage | Jul 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Resume;
