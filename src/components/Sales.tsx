import { motion } from 'framer-motion';
import { Tag, Truck, ArrowRight, Phone, CheckCircle, Droplet, Zap, Wind } from 'lucide-react';

const preOwnedCategories = [
  'Hydro Vacs',
  'Highway Tractors',
  'Trailers',
  'Tankers',
  'Heavy Duty and Medium Duty',
  'Farming Tools and Equipment',
  'Specialty Equipment (Including Pumps)',
  'Construction Equipment'
];

const newEquipment = [
  { 
    name: 'DINO 4.5', 
    description: 'Compact and efficient dry suction excavator for tight spaces and urban applications',
    specs: ['Powerful suction capability', 'Compact design', 'Water-free excavation']
  },
  { 
    name: 'DINO 8', 
    description: 'Mid-range power and versatility for demanding excavation applications',
    specs: ['Enhanced suction power', 'Greater capacity', 'All-terrain capability']
  },
  { 
    name: 'DINO 12', 
    description: 'Maximum power and capacity for the most demanding excavation projects',
    specs: ['Industry-leading power', 'Maximum debris capacity', 'Heavy-duty performance']
  },
  { 
    name: 'CITY DINO', 
    description: 'Urban-friendly compact excavator designed for city infrastructure work',
    specs: ['Compact footprint', 'Noise reduction', 'Urban-optimized']
  },
];

const mtsFeatures = [
  { icon: Wind, title: 'Over 24,000 CFM Suction', description: 'Powerful excavation performance' },
  { icon: Zap, title: '10" Diameter System', description: 'Dig tube and suction hose for maximum efficiency' },
  { icon: Truck, title: 'Fully Mechanical Power Arm', description: 'Precise control and durability' },
  { icon: Droplet, title: 'Functional Side-Tipping', description: 'Easy debris disposal' },
];

const Sales = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#111111] via-[#1a1a1a] to-[#111111] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">
              EQUIPMENT SALES
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our fleet vehicle remarketing program offers a variety of equipment for sale, both new and used. Quality equipment backed by expert service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pre-Owned Equipment */}
      <section className="py-16 bg-linear-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#f15a29] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#111111] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-5">
              EQUIPMENT SALES (PRE-OWNED)
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-3 font-medium">
              Our fleet vehicle remarketing program offers a variety of equipment for sale
            </p>
            <p className="text-base text-gray-600 italic mb-6">
              *All vehicles sold 'As Is'. Quotation for vehicle safety available upon request. Inventory varies.
            </p>
          </motion.div>

          {/* Equipment Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-12 max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-[#111111] mb-6 text-center">Available Equipment Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {preOwnedCategories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#f15a29] hover:text-white transition-all duration-300 group"
                  >
                    <CheckCircle className="text-[#f15a29] group-hover:text-white shrink-0" size={20} />
                    <span className="text-gray-800 group-hover:text-white font-medium text-sm">{category}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Equipment */}
      <section className="py-16 bg-linear-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#f15a29] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-5">
              EQUIPMENT SALES (NEW)
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-3 font-medium">
              MTS Advanced Suction Excavators
            </p>
            <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ox Equipment is the exclusive North American distributor for industry-leading MTS GmbH Dry Suction Vacuum Excavators. 
              Currently the industry standard for safe excavation technologies throughout Europe and the U.K., dry suction excavation 
              powerfully excavates without the use of water, eliminating issues related to slurry disposal and overweight loads.
            </p>
          </motion.div>

          {/* MTS Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="mb-12 max-w-6xl mx-auto"
          >
            <div className="bg-linear-to-br from-[#111111] to-[#1a1a1a] text-white rounded-2xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold mb-8 text-center">Key Features & Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mtsFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="inline-flex p-4 bg-[#f15a29] rounded-xl mb-4">
                        <Icon size={36} strokeWidth={2} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Model Lineup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold text-[#111111] mb-8 text-center">MTS DINO Model Lineup</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {newEquipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                className="group"
              >
                <div className="h-full p-8 bg-linear-to-br from-white to-gray-50 rounded-xl hover:from-gray-50 hover:to-white hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#f15a29] transform hover:-translate-y-2 hover:scale-[1.02]">
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-[#f15a29] text-white rounded-lg group-hover:scale-110 transition-transform shrink-0">
                      <Truck size={32} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#111111] mb-3">
                        MTS {item.name}
                      </h3>
                      <p className="text-gray-700 mb-4 text-base leading-snug">
                        {item.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {item.specs.map((spec) => (
                          <li key={spec} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle className="text-[#f15a29] shrink-0 mt-0.5" size={16} />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-[#f15a29] font-semibold text-base group-hover:gap-3 transition-all">
                        <span>Request Information</span>
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-[#111111] to-[#1a1a1a] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            
            transition={{ duration: 0.3, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6 inline-block p-6 bg-[#f15a29] rounded-full">
              <Tag size={48} strokeWidth={2} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              INTERESTED IN OUR EQUIPMENT?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Contact us today for pricing, availability, and detailed specifications on any of our equipment.
            </p>
            <a
              href="tel:8882904044"
              className="inline-flex items-center gap-3 bg-[#f15a29] hover:bg-[#d94d1f] text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:shadow-orange-900/50"
            >
              <Phone size={20} />
              Call (888) 290-4044
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sales;
