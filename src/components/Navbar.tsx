import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <a href="#" className="z-[80] relative">
            <img 
              src="/lovable-uploads/a4b979b9-46ce-428b-8a5a-7486bfd8d53a.png" 
              alt="Let's Talk School" 
              className="h-12 md:h-16"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-brand-dark font-medium hover:text-brand-red transition-colors link-hover">
              O nas
            </a>
            <a href="#courses" className="text-brand-dark font-medium hover:text-brand-red transition-colors link-hover">
              Kursy
            </a>
            <a href="#testimonials" className="text-brand-dark font-medium hover:text-brand-red transition-colors link-hover">
              Opinie
            </a>
            <a href="#contact">
              <Button className="bg-brand-red hover:bg-brand-darkred text-white">
                Kontakt
              </Button>
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden z-[90] relative text-brand-dark p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="fixed inset-0 bg-white z-[85] flex flex-col items-center justify-center space-y-8 md:hidden overflow-hidden">
              <a 
                href="#about" 
                className="text-xl font-medium text-brand-dark hover:text-brand-red"
                onClick={() => setIsOpen(false)}
              >
                O nas
              </a>
              <a 
                href="#courses" 
                className="text-xl font-medium text-brand-dark hover:text-brand-red"
                onClick={() => setIsOpen(false)}
              >
                Kursy
              </a>
              <a 
                href="#testimonials" 
                className="text-xl font-medium text-brand-dark hover:text-brand-red"
                onClick={() => setIsOpen(false)}
              >
                Opinie
              </a>
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                <Button className="bg-brand-red hover:bg-brand-darkred text-white text-lg px-6 py-2">
                  Kontakt
                </Button>
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
