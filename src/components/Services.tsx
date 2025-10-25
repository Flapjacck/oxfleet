import { motion } from 'framer-motion';
import { Wrench, CheckCircle, Settings, Truck, Droplet, Container } from 'lucide-react';

const servicesList = [
  {
    icon: Truck,
    title: 'Light & Heavy-Duty Trucks',
    description: 'Comprehensive repairs and maintenance for all truck classes'
  },
  {
    icon: Container,
    title: 'Tanker Trailers',
    description: 'Specialized service for liquid and dry bulk tanker trailers'
  },
  {
    icon: Droplet,
    title: 'Vac Trailers & Hydro Vacs',
    description: 'Expert maintenance for vacuum and hydrovac equipment'
  },
  {
    icon: Settings,
    title: 'Specialty Equipment',
    description: 'Custom solutions for unique fleet equipment needs'
  },
];

const capabilities = [
  'Preventative Maintenance Programs',
  'Safety & Compliance Inspections',
  'Custom Fabrication & Upfitting',
  'Parts Network & Inventory',
  'Emergency Repair Services',
  'Fleet Remarketing Support',
  'PDI (Pre-Delivery Inspection)',
  'Skilled Journeyman Technicians'
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#111111] via-[#1a1a1a] to-[#111111] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">
              OUR SERVICES
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Medium to heavy-duty fleet servicing with expertise in dry suction excavation equipment. We keep your fleet running at peak performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#f15a29] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#111111] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              WHAT WE SERVICE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="h-full p-8 bg-linear-to-br from-white to-gray-50 rounded-xl hover:from-gray-50 hover:to-white hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#f15a29] transform hover:-translate-y-2 hover:scale-[1.02]">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-[#f15a29] text-white rounded-xl group-hover:scale-110 transition-transform">
                        <Icon size={32} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#111111] mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.3 }}
            className="bg-linear-to-br from-[#111111] to-[#1a1a1a] text-white rounded-2xl p-8 md:p-12 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.01]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-[#f15a29] rounded-xl">
                <Wrench size={40} strokeWidth={2} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                OUR CAPABILITIES
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-[#f15a29] shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{capability}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facility Info */}
      <section className="py-20 bg-linear-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-[#f15a29] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
                STATE-OF-THE-ART FACILITY
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Our 15,000 ft² service facility is equipped with modern tools and technology to handle all your fleet maintenance needs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#f15a29] shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg">Extensive parts inventory and supplier network</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#f15a29] shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg">Trained and certified technicians</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#f15a29] shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg">Well-equipped shop with advanced diagnostics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#f15a29] shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg">Custom fabrication capabilities</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img 
                src="/images/IMG_9183.jpg" 
                alt="Ox FleetCare Facility" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
