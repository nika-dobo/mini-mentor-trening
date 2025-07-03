import React, { useState } from 'react';
import { Sparkles, Star, Zap, Eye } from 'lucide-react';

const Galaxies: React.FC = () => {
  const [selectedGalaxy, setSelectedGalaxy] = useState<string | null>(null);

  const galaxies = [
    {
      id: 'milky-way',
      name: 'Milky Way',
      type: 'Spiral',
      distance: '0 ly (Our Galaxy)',
      stars: '100-400 billion',
      diameter: '100,000 ly',
      description: 'Our home galaxy, a barred spiral galaxy containing our solar system.',
      image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800',
      facts: [
        'Contains our solar system',
        'Has a supermassive black hole at its center',
        'Part of the Local Group galaxy cluster',
        'Visible as a band of light across the night sky'
      ]
    },
    {
      id: 'andromeda',
      name: 'Andromeda Galaxy',
      type: 'Spiral',
      distance: '2.5 million ly',
      stars: '1 trillion',
      diameter: '220,000 ly',
      description: 'The closest major galaxy to the Milky Way and the largest in the Local Group.',
      image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800',
      facts: [
        'Will collide with the Milky Way in 4.5 billion years',
        'Visible to the naked eye from Earth',
        'Contains approximately 1 trillion stars',
        'Has multiple satellite galaxies'
      ]
    },
    {
      id: 'whirlpool',
      name: 'Whirlpool Galaxy',
      type: 'Spiral',
      distance: '23 million ly',
      stars: '160 billion',
      diameter: '76,000 ly',
      description: 'A classic spiral galaxy with prominent spiral arms and a smaller companion galaxy.',
      image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800',
      facts: [
        'Has a smaller companion galaxy (M51b)',
        'One of the most photographed galaxies',
        'Perfect example of a grand design spiral',
        'Active star formation in spiral arms'
      ]
    },
    {
      id: 'centaurus',
      name: 'Centaurus A',
      type: 'Elliptical',
      distance: '13.7 million ly',
      stars: '100 billion',
      diameter: '97,000 ly',
      description: 'A giant elliptical galaxy with a distinctive dark dust lane and active galactic nucleus.',
      image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800',
      facts: [
        'Has a prominent dust lane',
        'Contains an active supermassive black hole',
        'Result of a galaxy merger',
        'Strong radio source'
      ]
    },
    {
      id: 'sombrero',
      name: 'Sombrero Galaxy',
      type: 'Spiral',
      distance: '31 million ly',
      stars: '100 billion',
      diameter: '49,000 ly',
      description: 'A spiral galaxy with a large central bulge and prominent dust lane, resembling a sombrero hat.',
      image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800',
      facts: [
        'Has an unusually large central bulge',
        'Contains a bright nucleus',
        'Rich in globular clusters',
        'Named for its hat-like appearance'
      ]
    },
    {
      id: 'pinwheel',
      name: 'Pinwheel Galaxy',
      type: 'Spiral',
      distance: '21 million ly',
      stars: '100 billion',
      diameter: '170,000 ly',
      description: 'A face-on spiral galaxy with well-defined spiral arms and active star formation regions.',
      image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800',
      facts: [
        'One of the largest and brightest galaxies',
        'Perfect face-on orientation',
        'Contains many star-forming regions',
        'Has asymmetric spiral structure'
      ]
    }
  ];

  const galaxyTypes = [
    {
      type: 'Spiral',
      description: 'Disk-shaped galaxies with spiral arms containing young stars and gas.',
      color: 'text-neon-cyan',
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      type: 'Elliptical',
      description: 'Smooth, featureless galaxies with older stars and little gas.',
      color: 'text-neon-purple',
      icon: <Star className="h-6 w-6" />
    },
    {
      type: 'Irregular',
      description: 'Galaxies with no defined shape, often rich in gas and star formation.',
      color: 'text-neon-pink',
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-space-gradient pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center text-white mb-8 glow-text">
          Galaxy Explorer
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-12 font-exo max-w-3xl mx-auto">
          Journey through the cosmos and discover the magnificent galaxies that populate our universe.
        </p>

        {/* Galaxy Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {galaxyTypes.map((type, index) => (
            <div key={type.type} className="holographic p-6 rounded-xl text-center">
              <div className={`${type.color} mb-4 flex justify-center animate-float`}>
                {type.icon}
              </div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-2">{type.type}</h3>
              <p className="text-gray-300 font-exo text-sm">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Galaxy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galaxies.map((galaxy) => (
            <div
              key={galaxy.id}
              className="holographic p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              onClick={() => setSelectedGalaxy(galaxy.id)}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={galaxy.image}
                  alt={galaxy.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-2 right-2">
                  <span className="bg-neon-cyan/20 text-neon-cyan px-2 py-1 rounded-full text-xs font-exo">
                    {galaxy.type}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                {galaxy.name}
              </h3>
              
              <p className="text-gray-300 font-exo text-sm mb-4">
                {galaxy.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neon-cyan font-exo text-sm">Distance:</span>
                  <span className="text-white font-exo text-sm">{galaxy.distance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neon-cyan font-exo text-sm">Stars:</span>
                  <span className="text-white font-exo text-sm">{galaxy.stars}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neon-cyan font-exo text-sm">Diameter:</span>
                  <span className="text-white font-exo text-sm">{galaxy.diameter}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Galaxy Visualization */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-orbitron font-bold text-white mb-8 glow-text">
            Galaxy Formation
          </h2>
          <div className="holographic p-8 rounded-xl">
            <div className="relative flex items-center justify-center h-64">
              {/* Spiral Galaxy Animation */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-radial from-yellow-400 via-orange-500 to-red-600 galaxy-core">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60"></div>
                </div>
                
                {/* Spiral Arms */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-blue-400 rounded-full galaxy-arm-1 opacity-70"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-purple-400 rounded-full galaxy-arm-2 opacity-50"></div>
                
                {/* Stars */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  />
                ))}
              </div>
            </div>
            
            <p className="text-gray-300 font-exo mt-4 max-w-2xl mx-auto">
              Galaxies form through the gravitational collapse of gas and dark matter over billions of years. 
              Spiral galaxies like our Milky Way maintain their shape through density waves that trigger star formation.
            </p>
          </div>
        </div>
      </div>

      {/* Galaxy Modal */}
      {selectedGalaxy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="holographic max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-6 relative">
            <button
              onClick={() => setSelectedGalaxy(null)}
              className="absolute top-4 right-4 text-white hover:text-neon-cyan transition-colors z-10"
            >
              ×
            </button>

            {galaxies.filter(galaxy => galaxy.id === selectedGalaxy).map(galaxy => (
              <div key={galaxy.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={galaxy.image}
                      alt={galaxy.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-orbitron font-bold text-white glow-text mb-4">
                      {galaxy.name}
                    </h2>
                    <p className="text-gray-300 font-exo mb-6">
                      {galaxy.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-space-dark/50 p-4 rounded-lg">
                        <span className="text-neon-cyan font-exo font-semibold">Type:</span>
                        <p className="text-white">{galaxy.type}</p>
                      </div>
                      <div className="bg-space-dark/50 p-4 rounded-lg">
                        <span className="text-neon-cyan font-exo font-semibold">Distance:</span>
                        <p className="text-white">{galaxy.distance}</p>
                      </div>
                      <div className="bg-space-dark/50 p-4 rounded-lg">
                        <span className="text-neon-cyan font-exo font-semibold">Stars:</span>
                        <p className="text-white">{galaxy.stars}</p>
                      </div>
                      <div className="bg-space-dark/50 p-4 rounded-lg">
                        <span className="text-neon-cyan font-exo font-semibold">Diameter:</span>
                        <p className="text-white">{galaxy.diameter}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-space-dark/50 p-6 rounded-lg">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-4">Fascinating Facts</h3>
                  <ul className="space-y-2">
                    {galaxy.facts.map((fact, index) => (
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

export default Galaxies;