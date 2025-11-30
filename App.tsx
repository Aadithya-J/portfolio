import React, { useState, useEffect } from 'react';
import { Section } from './types';
import { Header } from './components/Header';
import { ProjectCard } from './components/ProjectCard';
import { PROJECTS, EXPERIENCE, SKILLS } from './constants';
import { ArrowDown, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  const scrollToSection = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(Section).forEach((section) => {
      const el = document.getElementById(section as string);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <section id={Section.HOME} className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 max-w-7xl mx-auto">
          <div className="max-w-4xl opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="font-hand text-3xl md:text-4xl text-clay mb-6 rotate-[-2deg] inline-block">
              Hello, I'm Aadithya.
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-stone-100 mb-8 leading-tight">
              I love building <span className="italic font-light text-stone-300">systems</span> and figuring out how things work.
            </h1>
            <p className="text-lg md:text-xl text-stone-400 max-w-2xl leading-relaxed mb-12">
              I'm a Full Stack Developer specializing in Go, TypeScript, and Cloud Native technologies. I enjoy building systems and web applications, experimenting with new ideas, and figuring out how things work.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <button 
                onClick={() => scrollToSection(Section.WORKS)}
                className="group flex items-center gap-2 border-b border-stone-100 pb-1 text-stone-100 font-medium hover:text-clay hover:border-clay transition-colors"
              >
                View Selected Works
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
              
              <div className="flex gap-4 text-stone-500">
                <a href="https://github.com/Aadithya-J/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-100 transition-colors"><Github size={20}/></a>
                <a href="https://www.linkedin.com/in/aadithya-jayakaran/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-100 transition-colors"><Linkedin size={20}/></a>
              </div>
            </div>
          </div>
        </section>

        <section id={Section.ABOUT} className="py-24 bg-stone-900">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-12">
               <div className="relative">
                <div className="aspect-[3/4] bg-stone-800 rounded-lg overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/aadithya/800/1000?grayscale" 
                    alt="Abstract Tech" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-50"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-stone-800 border border-stone-700 p-4 shadow-2xl rounded-sm transform rotate-3">
                   <p className="font-hand text-xl text-stone-200">Based in Chennai,<br/>Available for Remote.</p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-4xl text-stone-100 mb-6">About Me</h2>
                <div className="space-y-6 text-stone-400 text-lg leading-relaxed">
                  <p>
                    I'm a CS undergrad who loves building backend systems and experimenting with complex projects, even if most of them are just for fun. I enjoy contributing to open-source when something catches my interest.
                  </p>
                  <p>
                    When I'm not coding, you'll usually find me doing competitive programming, playing chess, or researching a new side project I'll swear I'm going to finish.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Skills & Experience */}
            <div className="space-y-12 md:pt-12">
              
              {/* Technical Skills */}
              <div>
                 <h3 className="font-serif text-2xl text-stone-100 mb-6 border-b border-stone-800 pb-2">Technical Skills</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {SKILLS.map((skillGroup) => (
                      <div key={skillGroup.category}>
                        <h4 className="text-clay font-medium text-sm uppercase tracking-wider mb-3">{skillGroup.category}</h4>
                        <ul className="text-stone-400 space-y-1">
                          {skillGroup.items.map(skill => (
                            <li key={skill} className="text-sm border-l border-stone-800 pl-2 hover:text-stone-200 transition-colors">{skill}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="font-serif text-2xl text-stone-100 mb-6 border-b border-stone-800 pb-2">Experience</h3>
                <div className="space-y-8">
                  {EXPERIENCE.map((exp) => (
                    <div key={exp.id} className="group pl-4 border-l-2 border-stone-800 hover:border-clay transition-colors duration-300">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-medium text-lg text-stone-100 group-hover:text-clay transition-colors">{exp.role}</h4>
                        <span className="text-xs font-mono text-stone-500">{exp.period}</span>
                      </div>
                      <p className="text-sm font-medium text-stone-400 mb-2">{exp.company}</p>
                      <p className="text-stone-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SELECTED WORKS */}
        <section id={Section.WORKS} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-4">Selected Works</h2>
              <p className="text-stone-400 max-w-md">Key projects showcasing expertise in cloud infrastructure, real-time systems, and full-stack development.</p>
            </div>
            <span className="hidden md:block font-hand text-xl text-stone-600 -rotate-6">2024 — Present</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {PROJECTS.map((project, idx) => (
              <div key={project.id} className={idx % 2 !== 0 ? 'md:mt-24' : ''}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id={Section.CONTACT} className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-hand text-2xl text-clay mb-6">What's next?</p>
            <h2 className="font-serif text-5xl md:text-7xl text-stone-100 mb-8">Let's build something.</h2>
            <p className="text-xl text-stone-400 mb-12">
              Open to collaborations, projects, and opportunities. Feel free to get in touch!
            </p>
            
            <a 
              href="mailto:aadithyajayakaran@gmail.com"
              className="inline-flex items-center gap-3 bg-stone-100 text-stone-900 px-8 py-4 rounded-full text-lg hover:bg-clay hover:text-white transition-colors duration-300"
            >
              <Mail size={20} />
              Say Hello
            </a>

            <div className="mt-24 pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-stone-600 text-sm">
              <p>&copy; 2025 Aadithya Jayakaran.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="https://github.com/Aadithya-J/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/aadithya-jayakaran/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;