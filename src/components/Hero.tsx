import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-linear-to-br from-[#111111] via-[#1a1a1a] to-[#111111] text-white overflow-hidden h-[calc(100vh-7rem)] md:h-[calc(100vh-8rem)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/images/P1411310.jpg" 
          alt="Fleet Equipment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#111111] via-transparent to-[#111111]"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#f15a29] opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[#f15a29] opacity-5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6">
              PERFORMANCE.
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-8 text-[#f15a29]">
              DRIVEN.
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
          >
            Premier fleet maintenance, repair, and equipment sales for medium to heavy-duty vehicles and specialty equipment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/services"
              className="group bg-[#f15a29] hover:bg-[#d94d1f] text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:shadow-orange-900/50 flex items-center justify-center gap-2"
            >
              Our Services
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/sales"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all border-2 border-white/30 hover:border-white/50 flex items-center justify-center gap-2"
            >
              View Inventory
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 2.0, ease: "easeInOut" }
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-white/50" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
