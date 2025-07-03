import React from 'react';
import { Rocket, Users, Mail, Github, Linkedin, Globe } from 'lucide-react';

const About: React.FC = () => {
  const developers = [
    {
      name: 'Alex Starbound',
      role: 'Frontend Developer',
      bio: 'Passionate about creating immersive web experiences and space exploration.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      linkedin: '#',
      email: 'alex@spaceexplorer.com'
    },
    {
      name: 'Luna Cosmic',
      role: 'UI/UX Designer',
      bio: 'Designing beautiful interfaces inspired by the wonders of the universe.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      linkedin: '#',
      email: 'luna@spaceexplorer.com'
    },
    {
      name: 'Orion Nebula',
      role: 'Space Content Expert',
      bio: 'Bringing accurate and fascinating space science to everyone.',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      linkedin: '#',
      email: 'orion@spaceexplorer.com'
    }
  ];

  const features = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Interactive Exploration',
      description: 'Engage with 3D models, animations, and interactive elements that bring space to life.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Educational Content',
      description: 'Learn from scientifically accurate information presented in an engaging format.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Responsive Design',
      description: 'Experience the universe seamlessly across all devices and screen sizes.'
    }
  ];

  return (
    <div className="min-h-screen bg-space-gradient pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center text-white mb-8 glow-text">
          About Space Explorer
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 font-exo max-w-3xl mx-auto">
          Space Explorer is a passion project dedicated to making the wonders of space accessible and engaging for everyone. 
          Our mission is to inspire curiosity about the cosmos through beautiful, interactive experiences.
        </p>

        {/* Floating Astronaut */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center animate-float">
              <Rocket className="h-10 w-10 text-white animate-rocket-launch" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-full blur-lg animate-pulse"></div>
          </div>
        </div>

        {/* Project Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="holographic p-6 rounded-xl text-center">
              <div className="text-neon-cyan mb-4 flex justify-center animate-float">
                {feature.icon}
              </div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 font-exo">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Development Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-orbitron font-bold text-center text-white mb-12 glow-text">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developers.map((dev, index) => (
              <div key={index} className="holographic p-6 rounded-xl text-center group">
                <div className="relative mb-4">
                  <img
                    src={dev.avatar}
                    alt={dev.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-1">{dev.name}</h3>
                <p className="text-neon-cyan font-exo mb-3">{dev.role}</p>
                <p className="text-gray-300 font-exo text-sm mb-4">{dev.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={dev.github}
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={dev.linkedin}
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${dev.email}`}
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="holographic p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-orbitron font-bold text-center text-white mb-8 glow-text">
            Project Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-neon-cyan mb-2">8</div>
              <p className="text-gray-300 font-exo">Interactive Pages</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-neon-purple mb-2">50+</div>
              <p className="text-gray-300 font-exo">Animations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-neon-pink mb-2">100+</div>
              <p className="text-gray-300 font-exo">Space Facts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-neon-cyan mb-2">∞</div>
              <p className="text-gray-300 font-exo">Possibilities</p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="holographic p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-orbitron font-bold text-center text-white mb-8 glow-text">
            Built With Modern Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'React', color: 'text-blue-400' },
              { name: 'TypeScript', color: 'text-blue-500' },
              { name: 'Tailwind CSS', color: 'text-cyan-400' },
              { name: 'Vite', color: 'text-purple-400' }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl font-orbitron font-bold ${tech.color} mb-2`}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="holographic p-8 rounded-xl text-center">
          <h2 className="text-3xl font-orbitron font-bold text-white mb-4 glow-text">
            Get In Touch
          </h2>
          <p className="text-gray-300 font-exo mb-8 max-w-2xl mx-auto">
            Have questions about space, suggestions for new features, or just want to say hello? 
            We'd love to hear from you!
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:hello@spaceexplorer.com"
              className="px-8 py-3 bg-neon-cyan/20 text-neon-cyan border border-neon-cyan rounded-full font-exo font-semibold hover:bg-neon-cyan hover:text-space-dark transition-all duration-300 glow-border animate-glow"
            >
              <Mail className="h-5 w-5 inline mr-2" />
              Contact Us
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-neon-purple/20 text-neon-purple border border-neon-purple rounded-full font-exo font-semibold hover:bg-neon-purple hover:text-white transition-all duration-300"
            >
              <Github className="h-5 w-5 inline mr-2" />
              View Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;