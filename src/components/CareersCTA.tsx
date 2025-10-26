import { motion } from 'framer-motion';
import { Briefcase, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareersCTA = () => {
  return (
    <section className="py-20 bg-[#111111] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="mb-6 inline-block p-6 bg-[#f15a29] rounded-full">
            <Briefcase size={48} strokeWidth={2} />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            LOOKING FOR A NEW CAREER?
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join our team of skilled professionals and be part of North America's leading fleet care and dry suction excavation experts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/careers"
              className="bg-[#f15a29] hover:bg-[#d94d1f] text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:shadow-orange-900/50"
            >
              View Open Positions
            </Link>
            <div className="flex gap-4">
              <a
                href="tel:8882904044"
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-lg transition-all border-2 border-white/30 hover:border-white/50 flex items-center gap-2"
                title="Call us"
              >
                <Phone size={20} />
                <span className="hidden sm:inline font-semibold">(888) 290-4044</span>
              </a>
              <a
                href="mailto:info@ox-equipment.com"
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-lg transition-all border-2 border-white/30 hover:border-white/50 flex items-center gap-2"
                title="Email us"
              >
                <Mail size={20} />
                <span className="hidden sm:inline font-semibold">Email</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersCTA;
