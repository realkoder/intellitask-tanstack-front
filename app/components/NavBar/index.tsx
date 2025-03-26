import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { useSession } from '~/lib/getBetterAuthRequestClient';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticated = useSession().data?.session.token !== undefined;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsAuthenticated(authenticated);
    return () => {
      setIsAuthenticated(false);
    };
  }, [authenticated]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-3' : 'py-6'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-heading font-bold text-foreground animate-enter">
            IntelliOptima
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#benefits" className="nav-link">
              Benefits
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>

            <a target='__blank' href='https://intellioptima.com/entry'>
              <Button className="hover:cursor-pointer">Access Beta</Button>
            </a>


          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 z-50 w-full glass-card p-4 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <nav className="flex flex-col space-y-4">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#benefits" className="nav-link">
            Benefits
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>


          <a target='__blank' href="https://intellioptima.com/entry" onClick={toggleMenu}>
            <Button className="w-full">Access Beta</Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
