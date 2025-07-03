import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import StarField from './components/StarField';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Planets = React.lazy(() => import('./pages/Planets'));
const BlackHoles = React.lazy(() => import('./pages/BlackHoles'));
const Galaxies = React.lazy(() => import('./pages/Galaxies'));
const NasaHistory = React.lazy(() => import('./pages/NasaHistory'));
const Aliens = React.lazy(() => import('./pages/Aliens'));
const Quiz = React.lazy(() => import('./pages/Quiz'));
const About = React.lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-space-dark relative">
        <StarField />
        <Navigation />
        <main className="relative z-10">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/black-holes" element={<BlackHoles />} />
              <Route path="/galaxies" element={<Galaxies />} />
              <Route path="/nasa-history" element={<NasaHistory />} />
              <Route path="/aliens" element={<Aliens />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;