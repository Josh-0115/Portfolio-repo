import { useState } from 'react';

function Navbar({ openHireModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-pacifico text-primary">
              logo
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary">
              Home
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-primary">
              Portfolio
            </a>
            <a href="#skills" className="text-gray-700 hover:text-primary">
              Skills
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary">
              Contact
            </a>
            <button
              onClick={openHireModal}
              className="bg-primary text-white px-6 py-2 rounded-button whitespace-nowrap hover:bg-primary/90"
            >
              Hire Me
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-primary">
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-primary">
            Home
          </a>
          <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-primary">
            Portfolio
          </a>
          <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-primary">
            Skills
          </a>
          <a
            href="#testimonials"
            className="block px-3 py-2 text-gray-700 hover:text-primary"
          >
            Testimonials
          </a>
          <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary">
            Contact
          </a>
          <button
            onClick={openHireModal}
            className="w-full bg-primary text-white px-6 py-2 rounded-button whitespace-nowrap hover:bg-primary/90 mt-2"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;