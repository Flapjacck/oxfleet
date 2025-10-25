import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Sales', path: '/sales' },
    { name: 'Our Story', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-[#111111] text-white sticky top-0 z-50 shadow-lg">
      {/* Top Bar */}
      <div className="bg-[#f15a29] py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6 text-sm">
          <a href="tel:8882904044" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone size={16} />
            <span className="hidden sm:inline">(888) 290-4044</span>
          </a>
          <a href="mailto:info@ox-equipment.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail size={16} />
            <span className="hidden sm:inline">INFO@OX-EQUIPMENT.COM</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/images/logo-banner-06.png" 
              alt="Ox FleetCare" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white hover:text-[#f15a29] transition-colors font-semibold tracking-wide uppercase text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/sales"
              className="bg-[#f15a29] hover:bg-[#d94d1f] text-white px-6 py-2 rounded-md font-semibold uppercase text-sm tracking-wide transition-colors"
            >
              View Inventory
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-[#f15a29] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#1a1a1a]"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-[#f15a29] transition-colors font-semibold tracking-wide uppercase text-sm py-2 border-b border-gray-800"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/sales"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#f15a29] hover:bg-[#d94d1f] text-white px-6 py-3 rounded-md font-semibold uppercase text-sm tracking-wide transition-colors text-center mt-4"
              >
                View Inventory
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
