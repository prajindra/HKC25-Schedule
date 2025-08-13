'use client';

import { useState } from 'react';
import Header from '../components/Header';
import ScheduleSection from '../components/ScheduleSection';
import Footer from '../components/Footer';

export default function Home() {
  const [activeDay, setActiveDay] = useState(1);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900">
      <Header />
      <ScheduleSection activeDay={activeDay} setActiveDay={setActiveDay} />
      <Footer />
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-yellow-500 hover:bg-yellow-600 text-purple-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer whitespace-nowrap z-50"
        aria-label="Back to top"
      >
        <i className="ri-arrow-up-line text-xl w-6 h-6 flex items-center justify-center"></i>
      </button>
    </div>
  );
}