
// import React from 'react';

// import ExperienceCard from '../components/ExperienceCard';
// import { Code, Smartphone } from 'lucide-react';
// interface ExperienceProps {
//   id?: string;
// }

// const Experience: React.FC<ExperienceProps> = ({ id }) => {
//   return (
//     <section id={id} className="min-h-screen py-8 px-3 bg-section1 snap-start flex flex-col justify-center">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h1 className="section-title">My <span className="text-header">Experiences</span></h1>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <ExperienceCard
//               title="Graduate Research Assistant"
//               company="California State University"
//               location="Los Angeles, California"
//               period="Feb 2025 - present"
//               description="Helping professor Armando Beltran in research in Themantic Analysis in LLM"              
//               icon={<Code className="w-16 h-16 text-header" />}
//             />
//             <ExperienceCard
//               title="Sr. Software Developer"
//               company="Alphaved Pvt Ltd"
//               location="Surat, Gujarat, India"
//               period="Jun 2020 - Jul 2023"
//               description="Implemented Libraries for Asynchronous data storage and caching in applications to reduce call to Database queries leading to a 24% improvement in API response times and overall website performance."              
//               icon={<Code className="w-16 h-16 text-header" />}
//             />
            
//             <ExperienceCard
//               title="Software Developer"
//               company="WebcodeZ Infoway"
//               location="Rajkot, Gujarat, India"
//               period="Feb 2018 - May 2020"
//               description="Revamped testing and debugging processes, employing tools like Jest and Enzyme for React components, leading to a 30% reduction in performance bottlenecks and significant improvements in load time."
//               icon={<Code className="w-16 h-16 text-header" />}
//             />
            
//             <ExperienceCard
//               title="Android Development Intern"
//               company="Tech Innovations"
//               location="Remote"
//               period="Jan 2017 - May 2017"
//               description="Assisted in developing and testing Android applications, contributed to database design and implementation using PostgreSQL, participated in code reviews and bug fixing process, gained hands-on experience with development tools and methodologies."
//               icon={<Smartphone className="w-16 h-16 text-header" />}
//             />
            
//           </div>
//         </div>
//       </section>

//   );
// };

// export default Experience;


// import React from 'react';
// import ExperienceCard from '../components/ExperienceCard';
// import { Code, Smartphone } from 'lucide-react';
// import { motion } from 'framer-motion';

// interface ExperienceProps {
//   id?: string;
// }

// const Experience: React.FC<ExperienceProps> = ({ id }) => {
//   const experiences = [
//     {
//       title: "Graduate Research Assistant",
//       company: "California State University",
//       location: "Los Angeles, California",
//       period: "Feb 2025 - present",
//       description: "Helping professor Armando Beltran in research in Themantic Analysis in LLM",
//       icon: <Code className="w-16 h-16 text-header" />,
//     },
//     {
//       title: "Sr. Software Developer",
//       company: "Alphaved Pvt Ltd",
//       location: "Surat, Gujarat, India",
//       period: "Jun 2020 - Jul 2023",
//       description:
//         "Implemented Libraries for Asynchronous data storage and caching in applications to reduce call to Database queries leading to a 24% improvement in API response times and overall website performance.",
//       icon: <Code className="w-16 h-16 text-header" />,
//     },
//     {
//       title: "Software Developer",
//       company: "WebcodeZ Infoway",
//       location: "Rajkot, Gujarat, India",
//       period: "Feb 2018 - May 2020",
//       description:
//         "Revamped testing and debugging processes, employing tools like Jest and Enzyme for React components, leading to a 30% reduction in performance bottlenecks and significant improvements in load time.",
//       icon: <Code className="w-16 h-16 text-header" />,
//     },
//     {
//       title: "Android Development Intern",
//       company: "Tech Innovations",
//       location: "Remote",
//       period: "Jan 2017 - May 2017",
//       description:
//         "Assisted in developing and testing Android applications, contributed to database design and implementation using PostgreSQL, participated in code reviews and bug fixing process, gained hands-on experience with development tools and methodologies.",
//       icon: <Smartphone className="w-16 h-16 text-header" />,
//     },
//   ];

//   return (
//     <section id={id} className="min-h-screen py-8 px-3 bg-section1 snap-start flex flex-col justify-center">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="section-title">
//             My <span className="text-header">Experiences</span>
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.1 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <ExperienceCard {...exp} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { motion } from 'framer-motion';
import { Code, Smartphone } from 'lucide-react';

interface ExperienceProps {
  id?: string;
}

const experiences = [
  {
    title: 'Graduate Research Assistant',
    company: 'California State University',
    location: 'Los Angeles, CA',
    period: 'Feb 2025 – Present',
    description: 'Contributed in research on LLM to find cosine similarity with 90% accuracy.',
    icon: <Code className="w-16 h-16 text-header" />,
  },
  {
    title: 'Software Developer',
    company: 'Alphaved Pvt Ltd',
    location: 'Surat, Gujarat, India',
    period: 'Jun 2020 – Jul 2023',
    description: 'Engineered secure, optimized backend APIs with JWT, Redis caching, and Razorpay integration, reducing unauthorized access by 70% and increasing page speed by 40%.',
    icon: <Code className="w-16 h-16 text-header" />,
  },
  {
    title: 'Junior Software Developer',
    company: 'WebcodeZ Infoway',
    location: 'Rajkot, Gujarat, India',
    period: 'Feb 2018 – May 2020',
    description: 'Improved data retrieval by 25% using MongoDB and Node.js, reduced bug-related tickets by 15% through effective debugging and code review practices.',
    icon: <Code className="w-16 h-16 text-header" />,
  },
  {
    title: 'Intern – Junior Programmer Trainee',
    company: 'Aisomex Pvt. Ltd.',
    location: 'Rajkot, Gujarat, India',
    period: 'Jun 2016 – Dec 2016',
    description: 'Built a dual-role user system and optimized image upload flow, improving user-task matching by 50% and upload efficiency by 60%.',
    icon: <Smartphone className="w-16 h-16 text-header" />,
  },
];

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <motion.section
      id={id}
      className="min-h-screen py-20 px-4 bg-section1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h1 className="section-title">
          My <span className="text-header">Experiences</span>
        </h1>
      </motion.div>

      <div className="timeline max-w-5xl mx-auto">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className="relative grid grid-cols-9 gap-4 items-start mb-12">
              {isLeft ? (
                <>
                  <motion.div
                    className="col-span-4 w-full"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    <ExperienceCard {...exp} />
                  </motion.div>
                  <div className="col-span-1 flex justify-center">
                    <div className="w-1 bg-header h-full relative">
                      <div className="w-4 h-4 bg-header rounded-full absolute -left-1.5 top-4"></div>
                    </div>
                  </div>
                  <div className="col-span-4" />
                </>
              ) : (
                <>
                  <div className="col-span-4" />
                  <div className="col-span-1 flex justify-center">
                    <div className="w-1 bg-header h-full relative">
                      <div className="w-4 h-4 bg-header rounded-full absolute -left-1.5 top-4"></div>
                    </div>
                  </div>
                  <motion.div
                    className="col-span-4 w-full"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    <ExperienceCard {...exp} />
                  </motion.div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Experience;
