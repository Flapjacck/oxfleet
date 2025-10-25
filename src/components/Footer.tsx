import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/images/logo-banner-06.png" 
              alt="Ox FleetCare" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              North America's premier fleet care and dry suction excavation experts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#f15a29] uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/sales" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sales
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#f15a29] uppercase tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:8882904044" 
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <Phone size={18} className="mt-0.5 group-hover:text-[#f15a29] transition-colors" />
                  <span>(888) 290-4044</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@ox-equipment.com" 
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <Mail size={18} className="mt-0.5 group-hover:text-[#f15a29] transition-colors" />
                  <span>INFO@OX-EQUIPMENT.COM</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin size={18} className="mt-0.5" />
                  <span>466 HWY 52<br />Dundas, ON L9H 5E2</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Affiliation */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#f15a29] uppercase tracking-wide">
              Affiliation
            </h3>
            <p className="text-gray-400 text-sm mb-3 leading-relaxed">
              Ox FleetCare is a division of Ox Equipment
            </p>
            <a 
              href="https://ox-equipment.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-[#f15a29] transition-colors text-sm font-semibold group"
            >
              Visit Ox Equipment
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Ox FleetCare. All rights reserved.</p>
            <p className="text-center md:text-right">
              North America's Dry Suction Excavation Experts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
