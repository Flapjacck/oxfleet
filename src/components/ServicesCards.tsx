import { motion } from 'framer-motion';
import { Wrench, Settings, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Wrench,
    title: 'REPAIRS',
    description: 'General repairs on autos, light and heavy-duty trucks, Tanker trailers, Vac trailers, Hydro Vacs, SE\'s, and other specialty equipment.',
    link: '/services',
    gradient: 'from-red-600 to-red-800',
  },
  {
    icon: Settings,
    title: 'MAINTENANCE',
    description: 'General maintenance on autos, light and heavy-duty trucks, Tanker trailers, Vac trailers, Hydro Vacs, SE\'s, and other specialty equipment.',
    link: '/services',
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    icon: ShoppingCart,
    title: 'SALES',
    description: 'Our fleet vehicle remarketing program offers a variety of equipment for sale, both new and used.',
    link: '/sales',
    gradient: 'from-red-800 to-black',
  },
];

const ServicesCards = () => {
  return (
    <section className="py-20 bg-linear-to-b from-gray-50 via-gray-100 to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f15a29] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#111111] rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={service.link} className="group block h-full">
                  <div className={`relative h-full bg-linear-to-br ${service.gradient} rounded-2xl p-8 text-white overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]`}>
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                      <Icon size={160} strokeWidth={1} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6 inline-block p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 transition-colors">
                        <Icon size={40} strokeWidth={2} />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-200 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Link */}
                      <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                        <span className="uppercase text-sm tracking-wide">Learn More</span>
                        <ArrowRight size={20} />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
