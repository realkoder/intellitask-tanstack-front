import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from '@tanstack/react-router';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    };

    window.addEventListener('scroll', handleScroll);
    checkAuth();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current route is a dashboard route
  const isDashboardRoute =
    location.pathname.startsWith('/dashboard') ||
    location.pathname.startsWith('/organizations') ||
    location.pathname.startsWith('/members') ||
    location.pathname.startsWith('/settings');

  // Don't show the navbar on dashboard routes
  if (isDashboardRoute) {
    return null;
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-heading font-bold text-foreground animate-enter">
            AICollaborate
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>

            {isAuthenticated ? (
              <Link to="/">
                <Button>Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link to="/">
                  <Button variant="outline" className="ml-2">
                    Log in
                  </Button>
                </Link>
                <Link to="/">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
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
        className={`md:hidden absolute top-full left-0 w-full glass-card p-4 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-4">
          <a href="#features" className="nav-link" onClick={toggleMenu}>
            Features
          </a>
          <a href="#testimonials" className="nav-link" onClick={toggleMenu}>
            Testimonials
          </a>
          <a href="#pricing" className="nav-link" onClick={toggleMenu}>
            Pricing
          </a>

          {isAuthenticated ? (
            <Link to="/" onClick={toggleMenu}>
              <Button className="w-full">Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link to="/" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link to="/" onClick={toggleMenu}>
                <Button className="w-full">Get Started</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
