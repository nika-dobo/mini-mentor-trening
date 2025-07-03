import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Planets', path: '/planets' },
    { name: 'Black Holes', path: '/black-holes' },
    { name: 'Galaxies', path: '/galaxies' },
    { name: 'NASA History', path: '/nasa-history' },
    { name: 'Aliens', path: '/aliens' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-space-dark/90 backdrop-blur-md border-b border-neon-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Rocket className="h-8 w-8 text-neon-cyan animate-float group-hover:animate-rocket-launch" />
              <span className="text-xl font-orbitron font-bold text-white glow-text">
                Space Explorer
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-neon-cyan/20 text-neon-cyan glow-border'
                      : 'text-white hover:bg-neon-cyan/10 hover:text-neon-cyan'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neon-cyan hover:text-white hover:bg-neon-cyan/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neon-cyan"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-space-dark/95 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-neon-cyan/20 text-neon-cyan glow-border'
                    : 'text-white hover:bg-neon-cyan/10 hover:text-neon-cyan'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;