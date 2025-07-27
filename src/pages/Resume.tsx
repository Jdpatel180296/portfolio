import React from 'react';
import { Download, Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResumeProps {
  id?: string;
}

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

        <div className="flex justify-center mb-10">
          <a href="/Resume.pdf" className="btn" target="_blank">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </a>
        </div>

        {/* Education Section */}
        <motion.div className="bg-section1 rounded-lg shadow-lg p-8 mb-10" {...fadeInProps}>
          <SectionHeader icon={<GraduationCap />} title="Education" />
          <TimelineItem
            title="Master's in Computer Science"
            subtitle="California State University, Los Angeles"
            location="Los Angeles, California"
            time="Aug 2023 – May 2025"
            details={["GPA: 3.89"]}
          />
          <TimelineItem
            title="Bachelor of Computer Engineering"
            subtitle="Gujarat Technological University"
            location="Gujarat, India"
            time="Aug 2013 – Jun 2017"
            details={["GPA: 3.44"]}
          />
        </motion.div>

        {/* Coursework Section */}
        <motion.div className="bg-section1 rounded-lg shadow-lg p-8 mb-10" {...fadeInProps}>
          <SectionHeader icon={<GraduationCap />} title="Coursework" />
          <p className="text-gray-600">
            Advanced Web Development, Algorithms, Advanced Functional Programming, Advanced AI, Data Science,
            Advanced Data Science, Advanced Software Engineering
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div className="bg-section1 rounded-lg shadow-lg p-8 mb-10" {...fadeInProps}>
          <SectionHeader icon={<Trophy />} title="Skills" />
          <p className="text-gray-600">
            <strong>Languages:</strong> Python, Java, JavaScript, SQL, HTML/CSS<br />
            <strong>Tools/Libraries:</strong> Pandas, NumPy, Scikit-learn, TensorFlow, Matplotlib<br />
            <strong>Frameworks:</strong> Node.js, Express.js, Spring Boot, Vue.js, React<br />
            <strong>Database:</strong> MongoDB, Firebase, SQL<br />
            <strong>Other:</strong> Git, Redis, JIRA, Convex, Vercel
          </p>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div className="bg-section1 rounded-lg shadow-lg p-8 mb-10" {...fadeInProps}>
          <SectionHeader icon={<Briefcase />} title="Work Experience" />
          <TimelineItem
            title="Graduate Research Assistant"
            subtitle="California State University"
            time="Feb 2025 – Present"
            details={[
              "Developed front-end/backend pipeline to analyze human vs. AI-generated text.",
              "Engineered cosine similarity backend with 90% accuracy.",
              "Automated conversion to structured CSV datasets.",
            ]}
          />
          <TimelineItem
            title="Software Developer"
            subtitle="Alphaved Pvt Ltd | Surat, Gujarat, India"
            time="Jun 2020 – Jul 2023"
            details={[
              "Built secure backend APIs with JWT authentication and access control.",
              "Optimized system using Redis, lazy loading, and server-side pagination.",
              "Integrated Razorpay for real-time secure payments with failure handling.",
            ]}
          />
          <TimelineItem
            title="Junior Software Developer"
            subtitle="Webcodez Infoway | Rajkot, Gujarat, India"
            time="Feb 2018 – May 2020"
            details={[
              "Built Node.js APIs for Angel Cineworld project with MongoDB integration.",
              "Reduced support tickets by 15% through code maintenance and debugging.",
            ]}
          />
          <TimelineItem
            title="Intern – Junior Programmer Trainee"
            subtitle="Aisomex Pvt. Ltd. | Rajkot, Gujarat, India"
            time="Jun 2016 – Dec 2016"
            details={[
              "Designed dual-role user system with Firebase-based chat.",
              "Optimized Android image uploads, improving stability by 50%.",
            ]}
          />
        </motion.div>

        {/* Projects Section */}
        <motion.div className="bg-section1 rounded-lg shadow-lg p-8 mb-10" {...fadeInProps}>
          <SectionHeader icon={<Trophy />} title="Projects" />
          <TimelineItem
            title="Early Skin Cancer Detection"
            time="Jan 2025 – May 2025"
            details={[
              "Developed DL pipeline using EfficientNet, ResNet, MobileNet with metadata fusion.",
              "Achieved AUC of 92.9% using EfficientNetV2-B0.",
            ]}
          />
          <TimelineItem
            title="Amazon Employee Access Prediction"
            time="Oct 2024 – Dec 2024"
            details={[
              "Built models with Logistic Regression, Random Forest, XGBoost, CatBoost (95.6% accuracy).",
              "Evaluated models with AUC, precision, recall, F1-score.",
            ]}
          />
          <TimelineItem
            title="AI Town Simulation"
            time="Oct 2023 – Dec 2023"
            details={[
              "Built GPT-4 based agent simulation with real-time backend (Convex).",
              "Enabled dynamic memory-based conversations.",
            ]}
          />
          <TimelineItem
            title="Restaurant Application"
            time="Sep 2023 – Nov 2023"
            details={[
              "React Native app with QR-based reservations and live revenue prediction.",
              "Boosted search speed by 83% using binary search.",
            ]}
          />
        </motion.div>

        {/* Certifications Section */}
        <motion.div className="bg-section1 rounded-lg shadow-lg p-8" {...fadeInProps}>
          <SectionHeader icon={<Award />} title="Certifications" />
          <TimelineItem
            title="Walmart’s Advanced Software Engineering Job Simulation"
            subtitle="Forage"
            time="Sep 2024"
          />
          <TimelineItem
            title="J.P. Morgan Software Engineering Virtual Experience"
            subtitle="Forage"
            time="Jul 2024"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

// Reusable Subcomponents
const SectionHeader = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center mb-6">
    <div className="text-header mr-3">{icon}</div>
    <h2 className="text-2xl font-bold">{title}</h2>
  </div>
);

const TimelineItem = ({
  title,
  subtitle,
  location,
  time,
  details = [],
}: {
  title: string;
  subtitle?: string;
  location?: string;
  time: string;
  details?: string[];
}) => (
  <div className="border-l-2 border-gray-200 pl-5 ml-3 relative space-y-2 mb-8">
    <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header" />
    <h3 className="text-xl font-bold">{title}</h3>
    {subtitle && <p className="text-gray-700">{subtitle}</p>}
    {location && <p className="text-gray-500">{location}</p>}
    <p className="text-gray-600">{time}</p>
    {details.length > 0 && (
      <ul className="list-disc pl-5 space-y-1 text-gray-600">
        {details.map((d, idx) => (
          <li key={idx}>{d}</li>
        ))}
      </ul>
    )}
  </div>
);

const fadeInProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 },
};

export default Resume;
