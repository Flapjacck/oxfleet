import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2, Wrench, Shield, Users, TrendingUp, Award, Package, Cog } from 'lucide-react';

const values = [
  { icon: Award, title: 'Premium Service', description: '15+ years of excellence in fleet care' },
  { icon: Shield, title: 'Safety Focused', description: 'Compliance and quality are our top priorities' },
  { icon: CheckCircle2, title: 'Quality Workmanship', description: 'Expert technicians delivering superior results' },
  { icon: Users, title: 'Professional Staff', description: 'Trained, certified, and dedicated team members' },
  { icon: TrendingUp, title: 'Value Centered', description: 'Maximizing your fleet\'s performance and longevity' },
];

const areasOfWork = [
  { icon: Package, title: 'Acquisition', description: 'PDI and professional upfitting services' },
  { icon: Shield, title: 'Safety & Compliance', description: 'Comprehensive inspection and certification' },
  { icon: Wrench, title: 'Preventative Maintenance', description: 'Proactive care to avoid costly breakdowns' },
  { icon: TrendingUp, title: 'Remarketing', description: 'Fleet vehicle sales and remarketing programs' },
  { icon: Cog, title: 'Repairs', description: 'Expert diagnostics and repair services' },
  { icon: Award, title: 'Custom Fabrication', description: 'Specialized modifications and custom work' },
];

const capabilities = [
  '15,000 ft² modern service facility',
  'Extensive parts network & inventory',
  'Certified & trained technicians',
  'Advanced diagnostic equipment',
  'Skilled journeyman mechanics',
  'Well-equipped service bays',
  'Custom fabrication capabilities',
  'Fleet management expertise'
];

const About = () => {
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
              OUR STORY
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Building excellence in fleet care through people of character, dedicated service, and continuous innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              OUR VALUES
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="h-full p-6 bg-linear-to-br from-white to-gray-50 rounded-xl hover:from-gray-50 hover:to-white hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#f15a29] transform hover:-translate-y-2 hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#f15a29] text-white rounded-lg group-hover:scale-110 transition-transform">
                        <Icon size={28} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#111111] mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.3 }}
              className="bg-linear-to-br from-[#111111] to-[#1a1a1a] text-white rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#f15a29] rounded-xl">
                  <Target size={32} strokeWidth={2} />
                </div>
                <h3 className="text-3xl font-bold">OUR MISSION</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To optimize fleet performance through proactive fleet management, expert repairs, comprehensive maintenance programs, and unwavering commitment to safety and quality. We strive to be the trusted partner that keeps your operations running smoothly and efficiently.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.3 }}
              className="bg-linear-to-br from-[#f15a29] to-[#d94d1f] text-white rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Eye size={32} strokeWidth={2} />
                </div>
                <h3 className="text-3xl font-bold">OUR VISION</h3>
              </div>
              <p className="text-gray-100 text-lg leading-relaxed">
                To be recognized as North America's leading fleet care provider through people of character, exceptional service, continuous innovation, and positive impact on the communities we serve. We envision a future where every fleet operates at peak performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas of Work */}
      <section className="py-20 bg-linear-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#f15a29] rounded-full blur-3xl"></div>
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
              AREAS OF WORK
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive fleet solutions from acquisition to remarketing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfWork.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#f15a29] transform hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 text-[#f15a29] rounded-lg">
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#111111] mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-linear-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#111111] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#f15a29] rounded-full blur-3xl"></div>
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
                WHAT WE OFFER
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                State-of-the-art facility and expert team equipped to handle all your fleet needs
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-[#f15a29] shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/Dino-12-zelco-shoot00001.jpg" 
                alt="Fleet Equipment" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-br from-[#111111] to-[#1a1a1a] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              JOIN OUR TEAM
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for talented individuals who share our values and commitment to excellence.
            </p>
            <a
              href="/careers"
              className="inline-block bg-[#f15a29] hover:bg-[#d94d1f] text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:shadow-orange-900/50"
            >
              View Career Opportunities
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
