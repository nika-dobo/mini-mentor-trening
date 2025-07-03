import React, { useState } from 'react';
import { Calendar, Rocket, Users, Award, ChevronDown, ChevronUp } from 'lucide-react';

const NasaHistory: React.FC = () => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const milestones = [
    {
      id: 'nasa-founded',
      year: '1958',
      title: 'NASA Founded',
      description: 'The National Aeronautics and Space Administration is established.',
      details: 'NASA was created in response to the Soviet Union\'s launch of Sputnik 1. President Eisenhower signed the National Aeronautics and Space Act, establishing NASA as a civilian agency dedicated to peaceful space exploration.',
      icon: <Award className="h-6 w-6" />,
      color: 'neon-cyan'
    },
    {
      id: 'mercury-program',
      year: '1959-1963',
      title: 'Project Mercury',
      description: 'First human spaceflight program of the United States.',
      details: 'Project Mercury aimed to put a human in orbit around Earth and return them safely. Alan Shepard became the first American in space on May 5, 1961, followed by John Glenn as the first American to orbit Earth on February 20, 1962.',
      icon: <Rocket className="h-6 w-6" />,
      color: 'neon-purple'
    },
    {
      id: 'gemini-program',
      year: '1961-1966',
      title: 'Project Gemini',
      description: 'Bridge between Mercury and Apollo programs.',
      details: 'Gemini missions tested spacewalking, orbital rendezvous, and docking procedures essential for the Apollo moon missions. Ed White performed the first American spacewalk during Gemini 4 on June 3, 1965.',
      icon: <Users className="h-6 w-6" />,
      color: 'neon-pink'
    },
    {
      id: 'apollo-11',
      year: '1969',
      title: 'Apollo 11 Moon Landing',
      description: 'First humans land on the Moon.',
      details: 'Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon on July 20, 1969, while Michael Collins orbited above. Armstrong\'s famous words: "That\'s one small step for man, one giant leap for mankind."',
      icon: <Rocket className="h-6 w-6" />,
      color: 'neon-cyan'
    },
    {
      id: 'skylab',
      year: '1973-1974',
      title: 'Skylab Space Station',
      description: 'America\'s first space station.',
      details: 'Skylab hosted three crews for a total of 171 days, conducting experiments in solar astronomy, Earth observation, and zero-gravity research. It proved that humans could live and work in space for extended periods.',
      icon: <Award className="h-6 w-6" />,
      color: 'neon-purple'
    },
    {
      id: 'shuttle-program',
      year: '1981-2011',
      title: 'Space Shuttle Program',
      description: 'Reusable spacecraft system.',
      details: 'The Space Shuttle flew 135 missions over 30 years, deploying satellites, conducting experiments, and building the International Space Station. Five shuttles were built: Columbia, Challenger, Discovery, Atlantis, and Endeavour.',
      icon: <Rocket className="h-6 w-6" />,
      color: 'neon-pink'
    },
    {
      id: 'iss',
      year: '1998-Present',
      title: 'International Space Station',
      description: 'Multinational collaborative project.',
      details: 'The ISS is a joint project between NASA, Roscosmos, ESA, JAXA, and CSA. It has been continuously occupied since November 2000, serving as a microgravity research laboratory and testbed for future deep space missions.',
      icon: <Users className="h-6 w-6" />,
      color: 'neon-cyan'
    },
    {
      id: 'mars-rovers',
      year: '2004-Present',
      title: 'Mars Exploration',
      description: 'Robotic exploration of the Red Planet.',
      details: 'NASA has successfully landed multiple rovers on Mars, including Spirit, Opportunity, Curiosity, and Perseverance. These missions have discovered evidence of ancient water activity and continue to search for signs of past or present life.',
      icon: <Award className="h-6 w-6" />,
      color: 'neon-purple'
    },
    {
      id: 'jwst',
      year: '2021',
      title: 'James Webb Space Telescope',
      description: 'Next-generation space telescope.',
      details: 'JWST is the most powerful space telescope ever built, designed to observe the universe in infrared light. It can see the first galaxies that formed after the Big Bang and study the atmospheres of exoplanets.',
      icon: <Rocket className="h-6 w-6" />,
      color: 'neon-pink'
    },
    {
      id: 'artemis',
      year: '2024-Future',
      title: 'Artemis Program',
      description: 'Return to the Moon and beyond.',
      details: 'The Artemis program aims to land the first woman and next man on the Moon by 2026, establish a sustainable lunar presence, and serve as a stepping stone for future Mars missions.',
      icon: <Users className="h-6 w-6" />,
      color: 'neon-cyan'
    }
  ];

  const toggleExpanded = (id: string) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-space-gradient pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center text-white mb-8 glow-text">
          NASA History Timeline
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-12 font-exo max-w-3xl mx-auto">
          Explore the remarkable journey of space exploration from NASA's founding to future missions to Mars and beyond.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className="relative">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 bg-${milestone.color} rounded-full border-2 border-space-dark animate-pulse-slow`}></div>
                
                {/* Content */}
                <div className="ml-16">
                  <div 
                    className="holographic p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
                    onClick={() => toggleExpanded(milestone.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`text-${milestone.color} animate-float`}>
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="flex items-center space-x-4">
                            <span className={`text-${milestone.color} font-orbitron font-bold text-lg`}>
                              {milestone.year}
                            </span>
                            <h3 className="text-xl font-orbitron font-bold text-white">
                              {milestone.title}
                            </h3>
                          </div>
                          <p className="text-gray-300 font-exo mt-2">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                      
                      <button className="text-white hover:text-neon-cyan transition-colors">
                        {expandedEvent === milestone.id ? (
                          <ChevronUp className="h-6 w-6" />
                        ) : (
                          <ChevronDown className="h-6 w-6" />
                        )}
                      </button>
                    </div>
                    
                    {expandedEvent === milestone.id && (
                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <p className="text-gray-300 font-exo leading-relaxed">
                          {milestone.details}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="holographic p-6 rounded-xl text-center">
            <div className="text-4xl font-orbitron font-bold text-neon-cyan mb-2">135</div>
            <p className="text-gray-300 font-exo">Space Shuttle Missions</p>
          </div>
          
          <div className="holographic p-6 rounded-xl text-center">
            <div className="text-4xl font-orbitron font-bold text-neon-purple mb-2">12</div>
            <p className="text-gray-300 font-exo">Astronauts Walked on Moon</p>
          </div>
          
          <div className="holographic p-6 rounded-xl text-center">
            <div className="text-4xl font-orbitron font-bold text-neon-pink mb-2">20+</div>
            <p className="text-gray-300 font-exo">Years of ISS Operations</p>
          </div>
        </div>

        {/* Future Missions */}
        <div className="mt-16 holographic p-8 rounded-xl">
          <h2 className="text-3xl font-orbitron font-bold text-center text-white mb-6 glow-text">
            Looking to the Future
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <Rocket className="h-16 w-16 text-neon-cyan mx-auto mb-4 animate-rocket-launch" />
              <h3 className="text-xl font-orbitron font-bold text-white mb-2">Moon to Mars</h3>
              <p className="text-gray-300 font-exo">
                The Artemis program will establish a sustainable presence on the Moon as a stepping stone to Mars exploration.
              </p>
            </div>
            
            <div className="text-center">
              <Users className="h-16 w-16 text-neon-purple mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-orbitron font-bold text-white mb-2">Commercial Partnerships</h3>
              <p className="text-gray-300 font-exo">
                NASA collaborates with commercial partners like SpaceX and Boeing to advance human spaceflight capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NasaHistory;