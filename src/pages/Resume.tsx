// import React from 'react';

// import { Download, Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

// interface ResumeProps {
//   id?: string;
// }

// const Resume: React.FC<ResumeProps> = ({ id }) => {
//   return (
//     <section id={id} className="bg-section2 min-h-screen py-16 px-6 flex fex-col">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="section-title">Resume</h1>
//           <p className="text-gray-600 mt-4">My educational background and professional experience</p>
//         </div>

//         <div className="flex justify-center mb-10">
//           <a href="/Resume.pdf" className="btn" target="_blank">
//             <Download className="w-4 h-4 mr-2" />
//             Download Resume
//           </a>
//         </div>

//         {/* Education Section */}
//         <div className="bg-section1 rounded-lg shadow-lg p-8 mb-10">
//           <div className="flex items-center mb-6">
//             <GraduationCap className="w-6 h-6 text-header mr-3" />
//             <h2 className="text-2xl font-bold">Education</h2>
//           </div>
//           <div className="border-l-2 border-gray-200 pl-5 ml-3 space-y-8">
//             <div className="relative">
//               <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
//               <h3 className="text-xl font-bold">Master's in Computer Science</h3>
//               <p className="text-gray-700">California State University, Los Angeles</p>
//               <p className="text-gray-500">Los Angeles, California</p>
//               <p className="text-gray-600 mt-1">GPA: 3.79</p>
//               <p className="text-gray-600">Aug 2023 – May 2025</p>
//             </div>
//             <div className="relative">
//               <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
//               <h3 className="text-xl font-bold">Bachelor of Computer Engineering</h3>
//               <p className="text-gray-700">Gujarat Technological University</p>
//               <p className="text-gray-500">Gujarat, India</p>
//               <p className="text-gray-600 mt-1">GPA: 3.44</p>
//               <p className="text-gray-600">Aug 2013 – Jun 2017</p>
//             </div>
//           </div>
//         </div>

//         {/* Work Experience Section */}
//         <div className="bg-section1 rounded-lg shadow-lg p-8 mb-10">
//           <div className="flex items-center mb-6">
//             <Briefcase className="w-6 h-6 text-header mr-3" />
//             <h2 className="text-2xl font-bold">Work Experience</h2>
//           </div>
//           <div className="border-l-2 border-gray-200 pl-5 ml-3 space-y-8">
//             <div className="relative">
//               <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
//               <h3 className="text-xl font-bold">Graduate Research Assistant</h3>
//               <p className="text-gray-700">California State University</p>
//               <p className="text-gray-500">Feb 2025 – Present</p>
//               <ul className="mt-2 list-disc pl-5 space-y-2">
//                 <li>Contributed in the research on LLM to find cosine similarity with 90% accuracy.</li>
//               </ul>
//             </div>
//             <div className="relative">
//               <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
//               <h3 className="text-xl font-bold">Software Developer</h3>
//               <p className="text-gray-700">Alphaved Pvt Ltd | Surat, Gujarat, India</p>
//               <p className="text-gray-500">Jun 2020 – Jul 2023</p>
//               <ul className="mt-2 list-disc pl-5 space-y-2">
//                 <li>Built secure backend APIs with JWT authentication and role-based access control.</li>
//                 <li>Optimized performance using lazy loading, Redis caching, and CDN delivery.</li>
//                 <li>Integrated Razorpay for real-time payments with smart failure handling.</li>
//               </ul>
//             </div>
//             <div className="relative">
//               <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
//               <h3 className="text-xl font-bold">Junior Software Developer</h3>
//               <p className="text-gray-700">Webcodez Infoway | Rajkot, Gujarat, India</p>
//               <p className="text-gray-500">Feb 2018 – May 2020</p>
//               <ul className="mt-2 list-disc pl-5 space-y-2">
//                 <li>Developed Node.js + MongoDB APIs for Angel Cineworld project.</li>
//                 <li>Performed testing with Jest and Enzyme to reduce bottlenecks by 30%.</li>
//               </ul>
//             </div>
//             <div className="relative">
//               <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
//               <h3 className="text-xl font-bold">Intern – Junior Programmer Trainee</h3>
//               <p className="text-gray-700">Aisomex Pvt. Ltd. | Rajkot, Gujarat, India</p>
//               <p className="text-gray-500">Jun 2016 – Dec 2016</p>
//               <ul className="mt-2 list-disc pl-5 space-y-2">
//                 <li>Built dual-role user system and integrated Firebase-based chat.</li>
//                 <li>Optimized image upload performance and stability on Android devices.</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Projects Section */}
//         <div className="bg-section1 rounded-lg shadow-lg p-8 mb-10">
//           <div className="flex items-center mb-6">
//             <Trophy className="w-6 h-6 text-header mr-3" />
//             <h2 className="text-2xl font-bold">Projects</h2>
//           </div>
//           <div className="border-l-2 border-gray-200 pl-5 ml-3 space-y-8">
//             <div className="relative">
//               <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
//               <h3 className="text-xl font-bold">AI Town Simulation</h3>
//               <p className="text-gray-700 italic">Oct 2023 – Dec 2023</p>
//               <p className="text-gray-600 mt-1">Tech: JavaScript, TypeScript, Node.js, Python, GPT-4 API, Convex</p>
//               <ul className="mt-2 list-disc pl-5 space-y-2">
//                 <li>Built an AI simulation using GPT-4 with interactive agents and real-time updates via Convex.</li>
//               </ul>
//             </div>
//             <div className="relative">
//               <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
//               <h3 className="text-xl font-bold">Restaurant Application</h3>
//               <p className="text-gray-700 italic">Sep 2023 – Nov 2023</p>
//               <p className="text-gray-600 mt-1">Tech: React Native, Firebase</p>
//               <ul className="mt-2 list-disc pl-5 space-y-2">
//                 <li>Developed app with QR-based table booking and traffic analysis.</li>
//                 <li>Boosted performance and search efficiency using algorithms.</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Certifications Section */}
//         <div className="bg-section1 rounded-lg shadow-lg p-8">
//           <div className="flex items-center mb-6">
//             <Award className="w-6 h-6 text-header mr-3" />
//             <h2 className="text-2xl font-bold">Certifications</h2>
//           </div>
//           <div className="border-l-2 border-gray-200 pl-5 ml-3 space-y-6">
//             <div className="relative">
//               <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
//               <h3 className="text-xl font-bold">Walmart’s Advanced Software Engineering Job Simulation</h3>
//               <p className="text-gray-700">Forage | Sep 2024</p>
//             </div>
//             <div className="relative">
//               <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
//               <h3 className="text-xl font-bold">J.P. Morgan Software Engineering Virtual Experience</h3>
//               <p className="text-gray-700">Forage | Jul 2024</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resume;


import React from 'react';

import { Download, Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

interface ResumeProps {
  id?: string;
}

import { motion } from 'framer-motion';

const Resume: React.FC<ResumeProps> = ({ id }) => {
  return (
    <motion.section
      id={id}
      className="bg-section2 min-h-screen py-16 px-6 flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h1 className="section-title">Resume</h1>
          <p className="text-gray-600 mt-4">My educational background and professional experience</p>
          </motion.div>
        </div>

        <div className="flex justify-center mb-10">
          <a href="/Resume.pdf" className="btn" target="_blank">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </a>
        </div>

        {/* Education Section */}
        <motion.div
          className="bg-section1 rounded-lg shadow-lg p-8 mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 text-header mr-3" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="border-l-2 border-gray-200 pl-5 ml-3 space-y-8">
            <div className="relative">
              <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
              <h3 className="text-xl font-bold">Master's in Computer Science</h3>
              <p className="text-gray-700">California State University, Los Angeles</p>
              <p className="text-gray-500">Los Angeles, California</p>
              <p className="text-gray-600 mt-1">GPA: 3.79</p>
              <p className="text-gray-600">Aug 2023 – May 2025</p>
            </div>
            <div className="relative">
              <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
              <h3 className="text-xl font-bold">Bachelor of Computer Engineering</h3>
              <p className="text-gray-700">Gujarat Technological University</p>
              <p className="text-gray-500">Gujarat, India</p>
              <p className="text-gray-600 mt-1">GPA: 3.44</p>
              <p className="text-gray-600">Aug 2013 – Jun 2017</p>
            </div>
          </div>
          </motion.div>
     

        {/* Work Experience Section */}
        <motion.div
          className="bg-section1 rounded-lg shadow-lg p-8 mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-header mr-3" />
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </div>
          <div className="border-l-2 border-gray-200 pl-5 ml-3 space-y-8">
            <div className="relative">
              <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
              <h3 className="text-xl font-bold">Graduate Research Assistant</h3>
              <p className="text-gray-700">California State University</p>
              <p className="text-gray-500">Feb 2025 – Present</p>
              <ul className="mt-2 list-disc pl-5 space-y-2">
                <li>Contributed in the research on LLM to find cosine similarity with 90% accuracy.</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
              <h3 className="text-xl font-bold">Software Developer</h3>
              <p className="text-gray-700">Alphaved Pvt Ltd | Surat, Gujarat, India</p>
              <p className="text-gray-500">Jun 2020 – Jul 2023</p>
              <ul className="mt-2 list-disc pl-5 space-y-2">
                <li>Built secure backend APIs with JWT authentication and role-based access control.</li>
                <li>Optimized performance using lazy loading, Redis caching, and CDN delivery.</li>
                <li>Integrated Razorpay for real-time payments with smart failure handling.</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
              <h3 className="text-xl font-bold">Junior Software Developer</h3>
              <p className="text-gray-700">Webcodez Infoway | Rajkot, Gujarat, India</p>
              <p className="text-gray-500">Feb 2018 – May 2020</p>
              <ul className="mt-2 list-disc pl-5 space-y-2">
                <li>Developed Node.js + MongoDB APIs for Angel Cineworld project.</li>
                <li>Performed testing with Jest and Enzyme to reduce bottlenecks by 30%.</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
              <h3 className="text-xl font-bold">Intern – Junior Programmer Trainee</h3>
              <p className="text-gray-700">Aisomex Pvt. Ltd. | Rajkot, Gujarat, India</p>
              <p className="text-gray-500">Jun 2016 – Dec 2016</p>
              <ul className="mt-2 list-disc pl-5 space-y-2">
                <li>Built dual-role user system and integrated Firebase-based chat.</li>
                <li>Optimized image upload performance and stability on Android devices.</li>
              </ul>
            </div>
          </div>
          </motion.div>

        {/* Projects Section */}
        <motion.div
          className="bg-section1 rounded-lg shadow-lg p-8 mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <Trophy className="w-6 h-6 text-header mr-3" />
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
          <div className="border-l-2 border-gray-200 pl-5 ml-3 space-y-8">
            <div className="relative">
              <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
              <h3 className="text-xl font-bold">AI Town Simulation</h3>
              <p className="text-gray-700 italic">Oct 2023 – Dec 2023</p>
              <p className="text-gray-600 mt-1">Tech: JavaScript, TypeScript, Node.js, Python, GPT-4 API, Convex</p>
              <ul className="mt-2 list-disc pl-5 space-y-2">
                <li>Built an AI simulation using GPT-4 with interactive agents and real-time updates via Convex.</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
              <h3 className="text-xl font-bold">Restaurant Application</h3>
              <p className="text-gray-700 italic">Sep 2023 – Nov 2023</p>
              <p className="text-gray-600 mt-1">Tech: React Native, Firebase</p>
              <ul className="mt-2 list-disc pl-5 space-y-2">
                <li>Developed app with QR-based table booking and traffic analysis.</li>
                <li>Boosted performance and search efficiency using algorithms.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="bg-section1 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-header mr-3" />
            <h2 className="text-2xl font-bold">Certifications</h2>
          </div>
          <div className="border-l-2 border-gray-200 pl-5 ml-3 space-y-6">
            <div className="relative">
              <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
              <h3 className="text-xl font-bold">Walmart’s Advanced Software Engineering Job Simulation</h3>
              <p className="text-gray-700">Forage | Sep 2024</p>
            </div>
            <div className="relative">
              <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header"></div>
              <h3 className="text-xl font-bold">J.P. Morgan Software Engineering Virtual Experience</h3>
              <p className="text-gray-700">Forage | Jul 2024</p>
            </div>
          </div>
        </motion.div>
    </motion.section>
  );
};

export default Resume;
