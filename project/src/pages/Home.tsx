import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Sparkles, Globe, Zap, Users, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-gradient relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-nebula-gradient opacity-50"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Rocket className="h-24 w-24 mx-auto text-neon-cyan animate-rocket-launch" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-white mb-6 glow-text">
            SPACE EXPLORER
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-exo max-w-3xl mx-auto">
            Journey through the cosmos and discover the wonders of space exploration, 
            from distant galaxies to mysterious black holes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/planets"
              className="px-8 py-3 bg-neon-cyan/20 text-neon-cyan border border-neon-cyan rounded-full font-exo font-semibold hover:bg-neon-cyan hover:text-space-dark transition-all duration-300 glow-border animate-glow"
            >
              Explore Planets
            </Link>
            <Link
              to="/galaxies"
              className="px-8 py-3 bg-neon-purple/20 text-neon-purple border border-neon-purple rounded-full font-exo font-semibold hover:bg-neon-purple hover:text-white transition-all duration-300"
            >
              Discover Galaxies
            </Link>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
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

      {/* Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center text-white mb-16 glow-text">
            Explore the Universe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="Solar System"
              description="Interactive exploration of planets, moons, and celestial bodies in our solar system."
              link="/planets"
              color="neon-cyan"
            />
            
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Black Holes"
              description="Dive into the mysterious world of black holes and their gravitational effects."
              link="/black-holes"
              color="neon-purple"
            />
            
            <FeatureCard
              icon={<Sparkles className="h-8 w-8" />}
              title="Galaxies"
              description="Journey through different galaxy types and witness cosmic formations."
              link="/galaxies"
              color="neon-pink"
            />
            
            <FeatureCard
              icon={<Rocket className="h-8 w-8" />}
              title="NASA History"
              description="Timeline of space exploration milestones and groundbreaking missions."
              link="/nasa-history"
              color="neon-cyan"
            />
            
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Alien Theories"
              description="Explore theories about extraterrestrial life and UFO phenomena."
              link="/aliens"
              color="neon-purple"
            />
            
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Space Quiz"
              description="Test your knowledge with interactive quizzes about space and astronomy."
              link="/quiz"
              color="neon-pink"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link, color }) => {
  return (
    <Link to={link} className="group">
      <div className="holographic p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className={`text-${color} mb-4 group-hover:animate-float`}>
          {icon}
        </div>
        <h3 className="text-xl font-orbitron font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 font-exo">{description}</p>
      </div>
    </Link>
  );
};

export default Home;