import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Rooms', id: 'rooms' },
    { name: 'Restaurant', id: 'restaurant' },
    { name: 'Facilities', id: 'facilities' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white">
              HP
            </div>
            <div className="text-left">
              <div className="text-xl">HighPoint Resort</div>
              <div className="text-xs text-gray-600">Kitengela, Kajiado County</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`hover:text-red-600 transition-colors ${
                  currentPage === item.id ? 'text-red-600' : 'text-black'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => onNavigate('rooms')}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 hover:text-red-600 transition-colors ${
                  currentPage === item.id ? 'text-red-600' : 'text-black'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => {
                onNavigate('rooms');
                setMobileMenuOpen(false);
              }}
              className="bg-red-600 hover:bg-red-700 text-white w-full"
            >
              Book Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
