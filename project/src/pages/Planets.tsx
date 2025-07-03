import React, { useState } from 'react';
import { X, Globe, Thermometer, Ruler, Clock } from 'lucide-react';

interface Planet {
  name: string;
  color: string;
  size: string;
  distance: string;
  temperature: string;
  dayLength: string;
  description: string;
  facts: string[];
}

const planets: Planet[] = [
  {
    name: 'Mercury',
    color: 'bg-orange-400',
    size: 'w-8 h-8',
    distance: '57.9 million km',
    temperature: '427°C / -173°C',
    dayLength: '88 Earth days',
    description: 'The smallest planet in our solar system and the closest to the Sun.',
    facts: [
      'Has no atmosphere to retain heat',
      'One day on Mercury equals 88 Earth days',
      'Has extreme temperature variations',
      'Named after the Roman messenger god'
    ]
  },
  {
    name: 'Venus',
    color: 'bg-yellow-400',
    size: 'w-12 h-12',
    distance: '108.2 million km',
    temperature: '462°C',
    dayLength: '243 Earth days',
    description: 'The hottest planet in our solar system, often called Earth\'s twin.',
    facts: [
      'Has a thick, toxic atmosphere',
      'Rotates in the opposite direction to most planets',
      'Surface pressure is 90 times that of Earth',
      'Covered in thousands of volcanoes'
    ]
  },
  {
    name: 'Earth',
    color: 'bg-blue-500',
    size: 'w-12 h-12',
    distance: '149.6 million km',
    temperature: '15°C average',
    dayLength: '24 hours',
    description: 'Our home planet, the only known planet to harbor life.',
    facts: [
      'The only planet known to have life',
      '71% of the surface is covered by water',
      'Has one natural satellite (the Moon)',
      'Atmosphere contains 21% oxygen'
    ]
  },
  {
    name: 'Mars',
    color: 'bg-red-500',
    size: 'w-10 h-10',
    distance: '227.9 million km',
    temperature: '-65°C average',
    dayLength: '24.6 hours',
    description: 'The Red Planet, a cold desert world with the largest volcano in the solar system.',
    facts: [
      'Has two small moons: Phobos and Deimos',
      'Home to the largest volcano: Olympus Mons',
      'Has polar ice caps made of water and carbon dioxide',
      'A day on Mars is similar to Earth (24.6 hours)'
    ]
  },
  {
    name: 'Jupiter',
    color: 'bg-orange-600',
    size: 'w-20 h-20',
    distance: '778.3 million km',
    temperature: '-110°C',
    dayLength: '9.9 hours',
    description: 'The largest planet in our solar system, a gas giant with a Great Red Spot.',
    facts: [
      'Has more than 80 moons',
      'The Great Red Spot is a giant storm',
      'Could fit all other planets inside it',
      'Has a faint ring system'
    ]
  },
  {
    name: 'Saturn',
    color: 'bg-yellow-600',
    size: 'w-18 h-18',
    distance: '1.4 billion km',
    temperature: '-140°C',
    dayLength: '10.7 hours',
    description: 'Famous for its spectacular ring system, made of ice and rock particles.',
    facts: [
      'Has the most spectacular ring system',
      'Less dense than water',
      'Has more than 80 moons',
      'Titan, its largest moon, has a thick atmosphere'
    ]
  },
  {
    name: 'Uranus',
    color: 'bg-cyan-400',
    size: 'w-16 h-16',
    distance: '2.9 billion km',
    temperature: '-195°C',
    dayLength: '17.2 hours',
    description: 'An ice giant that rotates on its side, with a unique tilted axis.',
    facts: [
      'Rotates on its side',
      'Has a faint ring system',
      'Coldest planetary atmosphere in the solar system',
      'Has 27 known moons'
    ]
  },
  {
    name: 'Neptune',
    color: 'bg-blue-600',
    size: 'w-16 h-16',
    distance: '4.5 billion km',
    temperature: '-200°C',
    dayLength: '16.1 hours',
    description: 'The windiest planet with supersonic winds and a deep blue color.',
    facts: [
      'Has the strongest winds in the solar system',
      'Takes 165 Earth years to orbit the Sun',
      'Has 14 known moons',
      'The smallest of the four outer planets'
    ]
  }
];

const Planets: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  return (
    <div className="min-h-screen bg-space-gradient pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center text-white mb-8 glow-text">
          Solar System Explorer
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-12 font-exo max-w-3xl mx-auto">
          Click on any planet to learn more about its fascinating characteristics and unique features.
        </p>

        {/* Solar System Visualization */}
        <div className="relative flex items-center justify-center mb-16 overflow-x-auto">
          <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-12 min-w-max p-8">
            {/* Sun */}
            <div className="relative">
              <div className="w-16 h-16 bg-yellow-500 rounded-full animate-pulse-slow shadow-2xl">
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-spin-slow opacity-50"></div>
              </div>
              <p className="text-center text-white font-exo mt-2 text-sm">Sun</p>
            </div>
            
            {/* Planets */}
            {planets.map((planet, index) => (
              <div
                key={planet.name}
                className="relative cursor-pointer group"
                onClick={() => setSelectedPlanet(planet)}
              >
                <div
                  className={`${planet.color} ${planet.size} rounded-full planet-shadow transition-all duration-300 hover:scale-110 group-hover:animate-bounce-slow`}
                  style={{
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: `${8 + index * 2}s`
                  }}
                >
                  <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-pulse"></div>
                </div>
                <p className="text-center text-white font-exo mt-2 text-sm group-hover:text-neon-cyan transition-colors">
                  {planet.name}
                </p>
                
                {/* Orbit ring */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div 
                    className="border border-white/10 rounded-full animate-spin-slow"
                    style={{
                      width: `${100 + index * 20}px`,
                      height: `${100 + index * 20}px`,
                      animationDuration: `${10 + index * 5}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Planet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {planets.map((planet) => (
            <div
              key={planet.name}
              className="holographic p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedPlanet(planet)}
            >
              <div className="flex items-center justify-center mb-4">
                <div className={`${planet.color} ${planet.size} rounded-full planet-shadow animate-float`}>
                  <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-xl font-orbitron font-bold text-white text-center mb-2">
                {planet.name}
              </h3>
              <p className="text-gray-300 font-exo text-center text-sm">
                {planet.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Planet Modal */}
      {selectedPlanet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="holographic max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-6 relative">
            <button
              onClick={() => setSelectedPlanet(null)}
              className="absolute top-4 right-4 text-white hover:text-neon-cyan transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center mb-6">
              <div className={`${selectedPlanet.color} w-20 h-20 rounded-full mx-auto mb-4 planet-shadow animate-float`}>
                <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-pulse"></div>
              </div>
              <h2 className="text-3xl font-orbitron font-bold text-white glow-text">
                {selectedPlanet.name}
              </h2>
              <p className="text-gray-300 font-exo mt-2">
                {selectedPlanet.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-space-dark/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Ruler className="h-5 w-5 text-neon-cyan mr-2" />
                  <span className="text-white font-exo font-semibold">Distance from Sun</span>
                </div>
                <p className="text-gray-300">{selectedPlanet.distance}</p>
              </div>

              <div className="bg-space-dark/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Thermometer className="h-5 w-5 text-neon-cyan mr-2" />
                  <span className="text-white font-exo font-semibold">Temperature</span>
                </div>
                <p className="text-gray-300">{selectedPlanet.temperature}</p>
              </div>

              <div className="bg-space-dark/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-neon-cyan mr-2" />
                  <span className="text-white font-exo font-semibold">Day Length</span>
                </div>
                <p className="text-gray-300">{selectedPlanet.dayLength}</p>
              </div>

              <div className="bg-space-dark/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-neon-cyan mr-2" />
                  <span className="text-white font-exo font-semibold">Planet Type</span>
                </div>
                <p className="text-gray-300">
                  {['Mercury', 'Venus', 'Earth', 'Mars'].includes(selectedPlanet.name) ? 'Terrestrial' : 'Gas Giant'}
                </p>
              </div>
            </div>

            <div className="bg-space-dark/50 p-4 rounded-lg">
              <h3 className="text-xl font-orbitron font-bold text-white mb-4">Interesting Facts</h3>
              <ul className="space-y-2">
                {selectedPlanet.facts.map((fact, index) => (
                  <li key={index} className="text-gray-300 font-exo flex items-start">
                    <span className="text-neon-cyan mr-2">•</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planets;