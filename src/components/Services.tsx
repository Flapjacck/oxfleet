import { motion } from 'framer-motion';
import { Wrench, CheckCircle, Settings, Truck, Droplet, Container, Zap, Wind, Thermometer, Gauge, Construction, Shield } from 'lucide-react';

const equipmentTypes = [
  {
    icon: Truck,
    title: 'Autos, Light & Heavy-Duty Trucks',
    description: 'Complete maintenance and repair services'
  },
  {
    icon: Container,
    title: 'Tanker Trailers',
    description: 'Specialized tanker trailer service and repairs'
  },
  {
    icon: Droplet,
    title: 'Vac Trailers & Hydro Vacs',
    description: 'Expert vacuum and hydrovac equipment maintenance'
  },
  {
    icon: Settings,
    title: 'Specialty Equipment (SE\'s)',
    description: 'Custom solutions for specialty equipment'
  },
];

const technicalServices = [
  {
    icon: Droplet,
    title: 'High Pressure Water Pumps',
    services: ['Water pump replace/rebuilds', 'Pump diagnostics and repair']
  },
  {
    icon: Thermometer,
    title: 'Heater Systems',
    services: ['Espar heater repair/install', 'Hotsy water heater repair/service', 'Heating system diagnostics']
  },
  {
    icon: Zap,
    title: 'Electronic & Engine Diagnostics',
    services: ['Electronic engine diagnosis/repair*', 'PLC diagnosis/repair', 'Running repairs (lights, wiring, etc.)']
  },
  {
    icon: Wind,
    title: 'Pneumatic & Hydraulic Systems',
    services: ['Pneumatic diagnosis/repair', 'Hydraulic diagnosis/repair', 'PTO service/repair']
  },
  {
    icon: Gauge,
    title: 'Brakes & Tires',
    services: ['Air or hydraulic brakes', 'Tire repair/replace (heavy duty tires)', 'Brake system diagnostics']
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    services: ['AC repair and service', 'Climate control systems', 'Refrigerant service']
  },
  {
    icon: Construction,
    title: 'Excavation Equipment',
    services: ['Excavation equipment repairs', 'Heavy machinery service', 'Equipment diagnostics']
  },
  {
    icon: Shield,
    title: 'Safety Inspections',
    services: ['Light duty safety inspections', 'Heavy duty safety inspections', 'Compliance certification']
  },
];

const additionalServices = [
  'Preventative Maintenance Programs - contact to discuss',
  'Emergency Repair Services',
  'Fleet Management Support',
  'Custom Fabrication & Upfitting',
  'Parts Network & Inventory',
  'Skilled Journeyman Technicians',
  'PDI (Pre-Delivery Inspection)',
  'On-Site Service Available'
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
              General maintenance and repairs on autos, light and heavy-duty trucks, tanker trailers, vac trailers, hydro vacs, specialty equipment, and more. We keep your fleet running at peak performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment We Service */}
      <section className="py-16 bg-linear-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#f15a29] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#111111] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-5">
              EQUIPMENT WE SERVICE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              General maintenance and repairs on a wide range of vehicles and specialty equipment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {equipmentTypes.map((equipment, index) => {
              const Icon = equipment.icon;
              return (
                <motion.div
                  key={equipment.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                  className="group"
                >
                  <div className="h-full p-8 bg-linear-to-br from-white to-gray-50 rounded-xl hover:from-gray-50 hover:to-white hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#f15a29] transform hover:-translate-y-2 hover:scale-[1.02]">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-[#f15a29] text-white rounded-xl group-hover:scale-110 transition-transform shrink-0">
                        <Icon size={36} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#111111] mb-3">
                          {equipment.title}
                        </h3>
                        <p className="text-gray-700 text-lg leading-snug">
                          {equipment.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Technical Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#111111] mb-8 text-center">
              SPECIALIZED SERVICES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {technicalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#f15a29]"
                  >
                    <div className="flex flex-col h-full">
                      <div className="p-3 bg-[#f15a29] text-white rounded-lg w-fit mb-4">
                        <Icon size={28} strokeWidth={2} />
                      </div>
                      <h4 className="text-lg font-bold text-[#111111] mb-3">
                        {service.title}
                      </h4>
                      <ul className="space-y-2 grow">
                        {service.services.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                            <CheckCircle className="text-[#f15a29] shrink-0 mt-0.5" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.3 }}
              className="mt-6 text-center"
            >
              <p className="text-sm text-gray-600 italic">
                *Limited to certain makes due to software
              </p>
            </motion.div>
          </motion.div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.4 }}
            className="bg-linear-to-br from-[#111111] to-[#1a1a1a] text-white rounded-2xl p-10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.01] max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-[#f15a29] rounded-xl">
                <Wrench size={40} strokeWidth={2} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                ADDITIONAL CAPABILITIES
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.5 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-[#f15a29] shrink-0 mt-0.5" size={22} />
                  <span className="text-gray-200 text-base leading-snug">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facility Info */}
      <section className="py-16 bg-linear-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-[#f15a29] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              
              transition={{ duration: 0.3, delay: 1.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-5">
                STATE-OF-THE-ART FACILITY
              </h2>
              <p className="text-2xl text-gray-700 mb-7 leading-relaxed font-medium">
                Our 15,000 ft² facility with modern tools and technology
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#f15a29] shrink-0 mt-0.5" size={26} />
                  <span className="text-gray-800 text-lg leading-tight">Extensive parts inventory and supplier network</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#f15a29] shrink-0 mt-0.5" size={26} />
                  <span className="text-gray-800 text-lg leading-tight">Trained and certified technicians</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#f15a29] shrink-0 mt-0.5" size={26} />
                  <span className="text-gray-800 text-lg leading-tight">Well-equipped shop with advanced diagnostics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#f15a29] shrink-0 mt-0.5" size={26} />
                  <span className="text-gray-800 text-lg leading-tight">Custom fabrication capabilities</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              
              transition={{ duration: 0.3, delay: 1.4 }}
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
