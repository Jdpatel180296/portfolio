
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
              Experienced software engineer with 5+ years of experience in developing scalable web applications and REST APIs using Node.js and Express.js. Proficient in distributed computing, data structures and algorithms, and AI, with hands-on expertise in Python and machine learning. Strong background in SDLC, Agile, and continuous integration. Currently pursuing a master's in Computer Science, focused on AI and data analysis. Eager to contribute to cutting-edge projects that push technological boundaries and impact millions of users globally.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <SocialIcons />
              
              <a 
                href="/resume" 
                className="btn"
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
