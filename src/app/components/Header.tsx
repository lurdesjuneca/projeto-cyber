import { Gamepad2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold text-white">CyberJuneTec</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-purple-400 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-purple-400 transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-purple-400 transition-colors">
              Preços
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-purple-400 transition-colors">
              Galeria
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-purple-400 transition-colors">
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-purple-400 transition-colors text-left">
              Início
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-purple-400 transition-colors text-left">
              Serviços
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-purple-400 transition-colors text-left">
              Preços
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-purple-400 transition-colors text-left">
              Galeria
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-purple-400 transition-colors text-left">
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
