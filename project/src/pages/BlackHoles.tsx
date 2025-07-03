import React, { useState } from 'react';
import { Zap, Info, Star, Orbit } from 'lucide-react';

const BlackHoles: React.FC = () => {
  const [selectedHole, setSelectedHole] = useState<string | null>(null);

  const blackHoles = [
    {
      id: 'sagittarius',
      name: 'Sagittarius A*',
      mass: '4.3 million solar masses',
      location: 'Milky Way center',
      distance: '26,000 light-years',
      description: 'The supermassive black hole at the center of our galaxy.',
      facts: [
        'First image captured in 2022',
        'Surrounded by hot, glowing gas',
        'Gravity is 4 million times stronger than our Sun',
        'Event horizon is 17 times the size of our Sun'
      ]
    },
    {
      id: 'm87',
      name: 'M87*',
      mass: '6.5 billion solar masses',
      location: 'Galaxy M87',
      distance: '55 million light-years',
      description: 'The first black hole ever photographed by humans.',
      facts: [
        'First black hole image taken in 2019',
        'Has a powerful jet of particles',
        'Event horizon is larger than our solar system',
        'Located in the Virgo galaxy cluster'
      ]
    },
    {
      id: 'cygnus',
      name: 'Cygnus X-1',
      mass: '21 solar masses',
      location: 'Cygnus constellation',
      distance: '7,200 light-years',
      description: 'The first black hole confirmed to exist, discovered in 1971.',
      facts: [
        'First confirmed black hole',
        'Has a companion star',
        'Stellar-mass black hole',
        'X-ray source due to accretion disk'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-space-gradient pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center text-white mb-8 glow-text">
          Black Holes
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-12 font-exo max-w-3xl mx-auto">
          Explore the most mysterious objects in the universe - regions of spacetime where gravity is so strong that nothing can escape.
        </p>

        {/* Black Hole Visualization */}
        <div className="relative flex items-center justify-center mb-16 h-96">
          <div className="absolute inset-0 bg-nebula-gradient opacity-30 rounded-full"></div>
          
          {/* Event Horizon */}
          <div className="relative">
            <div className="w-32 h-32 bg-black rounded-full border-4 border-neon-cyan animate-pulse-slow">
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-neon-cyan/20 to-black rounded-full animate-spin-slow"></div>
            </div>
            
            {/* Accretion Disk */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-orange-500 rounded-full animate-spin opacity-70">
              <div className="absolute inset-0 bg-gradient-conic from-orange-500 via-red-500 to-yellow-500 rounded-full animate-spin-slow opacity-30"></div>
            </div>
            
            {/* Photon Sphere */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-yellow-400 rounded-full animate-pulse opacity-50"></div>
            
            {/* Jet */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-96 bg-gradient-to-t from-neon-cyan to-transparent rotate-90 animate-pulse"></div>
          </div>
          
          {/* Orbiting particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-orbit"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
                transform: `rotate(${i * 45}deg) translateX(${120 + i * 20}px) rotate(-${i * 45}deg)`,
              }}
            />
          ))}
        </div>

        {/* Black Hole Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blackHoles.map((hole) => (
            <div
              key={hole.id}
              className="holographic p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl black-hole-distortion"
              onClick={() => setSelectedHole(hole.id)}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-black rounded-full border-2 border-neon-purple animate-pulse-slow">
                    <div className="absolute inset-0 bg-gradient-radial from-transparent to-neon-purple/20 rounded-full animate-spin-slow"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-orange-400 rounded-full animate-spin opacity-50"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-orbitron font-bold text-white text-center mb-2">
                {hole.name}
              </h3>
              <p className="text-gray-300 font-exo text-center text-sm mb-4">
                {hole.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neon-cyan font-exo text-sm">Mass:</span>
                  <span className="text-white font-exo text-sm">{hole.mass}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neon-cyan font-exo text-sm">Distance:</span>
                  <span className="text-white font-exo text-sm">{hole.distance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="holographic p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Info className="h-6 w-6 text-neon-cyan mr-2" />
              <h2 className="text-2xl font-orbitron font-bold text-white">What are Black Holes?</h2>
            </div>
            <p className="text-gray-300 font-exo leading-relaxed">
              Black holes are regions of spacetime where gravity is so strong that nothing, not even light, can escape once it crosses the event horizon. They form when massive stars collapse at the end of their lives, creating a singularity - a point of infinite density.
            </p>
          </div>

          <div className="holographic p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Star className="h-6 w-6 text-neon-purple mr-2" />
              <h2 className="text-2xl font-orbitron font-bold text-white">How They Form</h2>
            </div>
            <p className="text-gray-300 font-exo leading-relaxed">
              When a massive star (at least 3 times the mass of our Sun) runs out of nuclear fuel, it can no longer support itself against gravitational collapse. The core collapses in less than a second, creating a black hole with an event horizon.
            </p>
          </div>

          <div className="holographic p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-neon-pink mr-2" />
              <h2 className="text-2xl font-orbitron font-bold text-white">Hawking Radiation</h2>
            </div>
            <p className="text-gray-300 font-exo leading-relaxed">
              Stephen Hawking discovered that black holes actually emit radiation due to quantum effects near the event horizon. This means that black holes slowly evaporate over time, with smaller black holes evaporating faster than larger ones.
            </p>
          </div>

          <div className="holographic p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Orbit className="h-6 w-6 text-neon-cyan mr-2" />
              <h2 className="text-2xl font-orbitron font-bold text-white">Spacetime Distortion</h2>
            </div>
            <p className="text-gray-300 font-exo leading-relaxed">
              Black holes warp spacetime itself, creating gravitational time dilation. Time passes slower near a black hole compared to farther away. This effect becomes extreme near the event horizon, where time nearly stops from an outside observer's perspective.
            </p>
          </div>
        </div>
      </div>

      {/* Selected Black Hole Modal */}
      {selectedHole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="holographic max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-6 relative">
            <button
              onClick={() => setSelectedHole(null)}
              className="absolute top-4 right-4 text-white hover:text-neon-cyan transition-colors"
            >
              ×
            </button>

            {blackHoles.filter(hole => hole.id === selectedHole).map(hole => (
              <div key={hole.id}>
                <div className="text-center mb-6">
                  <div className="relative mx-auto mb-4">
                    <div className="w-20 h-20 bg-black rounded-full border-2 border-neon-purple animate-pulse-slow mx-auto">
                      <div className="absolute inset-0 bg-gradient-radial from-transparent to-neon-purple/20 rounded-full animate-spin-slow"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-orange-400 rounded-full animate-spin opacity-50"></div>
                  </div>
                  <h2 className="text-3xl font-orbitron font-bold text-white glow-text">
                    {hole.name}
                  </h2>
                  <p className="text-gray-300 font-exo mt-2">
                    {hole.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-space-dark/50 p-4 rounded-lg">
                    <span className="text-neon-cyan font-exo font-semibold">Mass:</span>
                    <p className="text-white">{hole.mass}</p>
                  </div>
                  <div className="bg-space-dark/50 p-4 rounded-lg">
                    <span className="text-neon-cyan font-exo font-semibold">Location:</span>
                    <p className="text-white">{hole.location}</p>
                  </div>
                </div>

                <div className="bg-space-dark/50 p-4 rounded-lg">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-4">Fascinating Facts</h3>
                  <ul className="space-y-2">
                    {hole.facts.map((fact, index) => (
                      <li key={index} className="text-gray-300 font-exo flex items-start">
                        <span className="text-neon-cyan mr-2">•</span>
                        {fact}
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

export default BlackHoles;