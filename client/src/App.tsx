import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { RoomsPage } from './components/RoomsPage';
import { RestaurantPage } from './components/RestaurantPage';
import { FacilitiesPage } from './components/FacilitiesPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'rooms':
        return <RoomsPage />;
      case 'restaurant':
        return <RestaurantPage />;
      case 'facilities':
        return <FacilitiesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
      <Chatbot />
    </div>
  );
}
