import { motion } from 'framer-motion';
import { Tag, Truck, ArrowRight, Phone } from 'lucide-react';

const preOwnedInventory = [
  {
    id: 1,
    title: '2016 Western Star Tandem/Tandem Hydro Vac Truck',
    image: '/images/P1411310.jpg',
    category: 'Hydro Vac',
  },
  {
    id: 2,
    title: '2018 Rival T7 Hydrovac',
    image: '/images/P1411609.jpg',
    category: 'Hydro Vac',
  },
  {
    id: 3,
    title: '2023 Western Star Suction Excavator',
    image: '/images/P1355111.jpg',
    category: 'Suction Excavator',
  },
];

const newEquipment = [
  { name: 'MTS DINO 4.5', description: 'Compact and efficient dry suction excavator' },
  { name: 'MTS DINO 8', description: 'Mid-range power for demanding applications' },
  { name: 'MTS DINO 12', description: 'Maximum power and capacity' },
  { name: 'MTS City DINO', description: 'Urban-friendly compact excavator' },
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
            transition={{ duration: 0.3 }}
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
      <section className="py-20 bg-linear-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#f15a29] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#111111] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              PRE-OWNED EQUIPMENT
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Browse our current inventory of quality pre-owned equipment
            </p>
            <p className="text-sm text-gray-500 italic">
              All vehicles sold 'As Is'. Safety quotation available upon request. Inventory varies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {preOwnedInventory.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#f15a29] transform hover:-translate-y-3 hover:scale-[1.02]">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#f15a29] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#111111] mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <button className="w-full flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#f15a29] text-white px-6 py-3 rounded-lg font-semibold transition-colors group-hover:gap-4">
                      Contact for Details
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Equipment */}
      <section className="py-20 bg-linear-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#f15a29] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              NEW EQUIPMENT
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              MTS Suction Excavators - Industry-leading performance and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {newEquipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full p-8 bg-linear-to-br from-white to-gray-50 rounded-xl hover:from-gray-50 hover:to-white hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#f15a29] transform hover:-translate-y-2 hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#f15a29] text-white rounded-lg group-hover:scale-110 transition-transform">
                      <Truck size={28} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#111111] mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 text-[#f15a29] font-semibold text-sm">
                        <span>Learn More</span>
                        <ArrowRight size={16} />
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.3 }}
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
