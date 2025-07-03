import React, { useState } from 'react';
import { Eye, Zap, Radio, Telescope, FileText, Star } from 'lucide-react';

const Aliens: React.FC = () => {
  const [selectedTheory, setSelectedTheory] = useState<string | null>(null);

  const theories = [
    {
      id: 'fermi-paradox',
      title: 'Fermi Paradox',
      description: 'If the universe is so vast, where is everybody?',
      icon: <Star className="h-8 w-8" />,
      color: 'neon-cyan',
      details: 'The Fermi Paradox highlights the contradiction between the high probability of extraterrestrial life and the lack of evidence for it. With billions of stars and potentially habitable planets, statistical reasoning suggests that alien civilizations should be common, yet we have found no conclusive evidence of their existence.',
      evidence: [
        'Drake Equation suggests millions of civilizations',
        'Habitable exoplanets discovered regularly',
        'No confirmed alien contact or signals',
        'The "Great Filter" hypothesis'
      ]
    },
    {
      id: 'ancient-aliens',
      title: 'Ancient Astronaut Theory',
      description: 'Did extraterrestrials visit Earth in ancient times?',
      icon: <Telescope className="h-8 w-8" />,
      color: 'neon-purple',
      details: 'This theory suggests that extraterrestrial beings visited Earth in the distant past and influenced human civilization, technology, and religion. Proponents point to ancient texts, artifacts, and structures that seem to depict advanced technology or beings from the sky.',
      evidence: [
        'Ancient texts describing "gods" from the sky',
        'Unexplained ancient technologies',
        'Similarities in global mythologies',
        'Ancient artwork depicting spacecraft-like objects'
      ]
    },
    {
      id: 'seti',
      title: 'SETI & Radio Signals',
      description: 'The search for extraterrestrial intelligence.',
      icon: <Radio className="h-8 w-8" />,
      color: 'neon-pink',
      details: 'SETI (Search for Extraterrestrial Intelligence) uses radio telescopes to search for signals from alien civilizations. The most famous case is the "Wow! Signal" detected in 1977, which remains unexplained. Scientists continue to scan the skies for patterns that might indicate intelligent origin.',
      evidence: [
        'The unexplained "Wow! Signal" from 1977',
        'Fast Radio Bursts (FRBs) from deep space',
        'Ongoing SETI research and monitoring',
        'Breakthrough Listen project findings'
      ]
    },
    {
      id: 'ufo-phenomena',
      title: 'UFO Phenomena',
      description: 'Unidentified Aerial Phenomena and government disclosure.',
      icon: <Eye className="h-8 w-8" />,
      color: 'neon-cyan',
      details: 'Recent years have seen increased government transparency about UFO sightings, now termed UAP (Unidentified Aerial Phenomena). Military personnel have reported objects with flight characteristics beyond current known technology, leading to official investigations and reports.',
      evidence: [
        'Pentagon UAP videos released',
        'Military witness testimonies',
        'Government UAP investigation programs',
        'Unexplained flight characteristics'
      ]
    },
    {
      id: 'exoplanets',
      title: 'Habitable Exoplanets',
      description: 'Potentially life-supporting worlds beyond our solar system.',
      icon: <Telescope className="h-8 w-8" />,
      color: 'neon-purple',
      details: 'The discovery of thousands of exoplanets has revolutionized our understanding of planetary systems. Many of these worlds orbit in the "habitable zone" where liquid water could exist. Some show atmospheric compositions that could support life as we know it.',
      evidence: [
        'Over 5,000 confirmed exoplanets',
        'Kepler-452b and other "Earth-like" worlds',
        'Atmospheric analysis showing water vapor',
        'Goldilocks zone planet discoveries'
      ]
    },
    {
      id: 'biosignatures',
      title: 'Biosignatures',
      description: 'Chemical evidence of life in distant worlds.',
      icon: <Zap className="h-8 w-8" />,
      color: 'neon-pink',
      details: 'Scientists search for biosignatures - chemical indicators of life - in the atmospheres of exoplanets. These include oxygen, methane, and other gases that, in certain combinations, could indicate biological processes. The James Webb Space Telescope has enhanced our ability to detect these signatures.',
      evidence: [
        'Atmospheric oxygen and methane detections',
        'Seasonal variations in atmospheric composition',
        'Technosignatures from advanced civilizations',
        'James Webb Space Telescope observations'
      ]
    }
  ];

  const ufosightings = [
    { location: 'Roswell, New Mexico', year: '1947', description: 'Alleged crash of extraterrestrial spacecraft' },
    { location: 'Phoenix, Arizona', year: '1997', description: 'Massive V-shaped craft witnessed by thousands' },
    { location: 'Rendlesham Forest, UK', year: '1980', description: 'Military personnel report UFO landing' },
    { location: 'Belgian UFO Wave', year: '1989-1990', description: 'Triangular craft seen across Belgium' }
  ];

  return (
    <div className="min-h-screen bg-space-gradient pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center text-white mb-8 glow-text">
          Alien Theories & UFO Phenomena
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-12 font-exo max-w-3xl mx-auto">
          Explore the mysteries of extraterrestrial life, unexplained phenomena, and the ongoing search for intelligence beyond Earth.
        </p>

        {/* Floating UFO Animation */}
        <div className="relative flex justify-center mb-16">
          <div className="relative">
            <div className="w-16 h-8 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full animate-float opacity-80">
              <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-30"></div>
            </div>
            <div className="absolute top-2 left-2 w-2 h-2 bg-neon-cyan rounded-full animate-twinkle"></div>
            <div className="absolute top-3 right-3 w-1 h-1 bg-neon-purple rounded-full animate-twinkle"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-neon-cyan/50 to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Theory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {theories.map((theory) => (
            <div
              key={theory.id}
              className="holographic p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              onClick={() => setSelectedTheory(theory.id)}
            >
              <div className={`text-${theory.color} mb-4 group-hover:animate-float`}>
                {theory.icon}
              </div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                {theory.title}
              </h3>
              <p className="text-gray-300 font-exo text-sm">
                {theory.description}
              </p>
            </div>
          ))}
        </div>

        {/* Famous UFO Sightings */}
        <div className="holographic p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-orbitron font-bold text-center text-white mb-8 glow-text">
            Famous UFO Sightings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ufosightings.map((sighting, index) => (
              <div key={index} className="bg-space-dark/50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-orbitron font-bold text-white">{sighting.location}</h3>
                  <span className="text-neon-cyan font-exo">{sighting.year}</span>
                </div>
                <p className="text-gray-300 font-exo text-sm">{sighting.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SETI Signal Visualization */}
        <div className="holographic p-8 rounded-xl">
          <h2 className="text-3xl font-orbitron font-bold text-center text-white mb-8 glow-text">
            Listening for Signals
          </h2>
          <div className="relative flex items-center justify-center h-32">
            <div className="flex items-center space-x-2">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 bg-neon-cyan rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 60 + 20}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${1 + Math.random()}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          <p className="text-gray-300 font-exo text-center mt-4">
            Radio telescopes around the world continuously monitor space for artificial signals that might indicate intelligent life.
          </p>
        </div>
      </div>

      {/* Theory Modal */}
      {selectedTheory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="holographic max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-6 relative">
            <button
              onClick={() => setSelectedTheory(null)}
              className="absolute top-4 right-4 text-white hover:text-neon-cyan transition-colors"
            >
              ×
            </button>

            {theories.filter(theory => theory.id === selectedTheory).map(theory => (
              <div key={theory.id}>
                <div className="text-center mb-6">
                  <div className={`text-${theory.color} mb-4 flex justify-center animate-float`}>
                    {theory.icon}
                  </div>
                  <h2 className="text-3xl font-orbitron font-bold text-white glow-text">
                    {theory.title}
                  </h2>
                  <p className="text-gray-300 font-exo mt-2">
                    {theory.description}
                  </p>
                </div>

                <div className="bg-space-dark/50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-4">Theory Details</h3>
                  <p className="text-gray-300 font-exo leading-relaxed">
                    {theory.details}
                  </p>
                </div>

                <div className="bg-space-dark/50 p-6 rounded-lg">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-4">Evidence & Observations</h3>
                  <ul className="space-y-2">
                    {theory.evidence.map((evidence, index) => (
                      <li key={index} className="text-gray-300 font-exo flex items-start">
                        <span className="text-neon-cyan mr-2">•</span>
                        {evidence}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Aliens;