
import React from 'react';
import SocialIcons from '../components/SocialIcons';


interface HomeProps {
  id?: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (

      <section id={id} className="min-h-screen w-full bg-section1 px-4 py-16 flex items-center">
        <div className="w-full mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-96 sm:h-96 rounded-full overflow-hidden profile-img ">
                <img 
                  src="/photo/JD.JPG" 
                  alt="Jaydeep Gondaliya" 
                  className="w-full h-full object-cover float-image"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-left md:order-2">
            <div className="mb-6">
              <p className="text-gray-600 text-5xl mb-1">Hello, Myself</p>
              <h1 className="text-6xl sm:text-7xl font-bold text-header mb-3">
                Jaydeep Gondaliya
              </h1>
              <h2 className="text-4xl sm:text-5xl font-medium">
                And I'm a <span className="text-header">Software Developer</span>
              </h2>
            </div>
            
            <p className="text-gray-700 mb-8 text-3xl sm:text-2xl">
              I’m an experienced Software Engineer with over 6 years of expertise in designing and developing scalable, high-performance applications. My core strength lies in building secure backend systems using Java, Spring Boot, and microservices, with hands-on experience in RESTful and GraphQL APIs, JWT/OAuth2 authentication, and HIPAA/GDPR-compliant solutions. On the frontend, I create responsive applications with React.js, Next.js, and TypeScript, delivering seamless user experiences. I’m skilled in optimizing data workflows with PostgreSQL, MongoDB, Redis, and driving automation through CI/CD pipelines, Docker, Kubernetes, and cloud-native deployments (AWS & Azure). Currently pursuing my Master’s in Computer Science at California State University, Los Angeles, I specialize in AI and Data Science, with research spanning NLP (LLMs), deep learning (EfficientNet, ResNet), and predictive modeling (XGBoost, CatBoost). I’m passionate about building intelligent, secure, and scalable systems that make a measurable real-world impact.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <SocialIcons />
              
              <a 
                href="/Resume.pdf" 
                className="btn"
                target='_blank'
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Home;
