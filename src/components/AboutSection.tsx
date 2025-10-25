import { motion } from 'framer-motion';
import { CheckCircle2, Users, Award, Wrench, Shield, TrendingUp } from 'lucide-react';

const features = [
  { icon: Award, title: 'Premium Service', description: '15+ years of excellence' },
  { icon: Shield, title: 'Safety Focused', description: 'Compliance & quality first' },
  { icon: Wrench, title: 'Expert Workmanship', description: 'Certified technicians' },
  { icon: Users, title: 'Professional Staff', description: 'Trained & dedicated team' },
  { icon: TrendingUp, title: 'Value Centered', description: 'Optimal performance' },
  { icon: CheckCircle2, title: '15,000 ft² Shop', description: 'State-of-the-art facility' },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-linear-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#f15a29] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-[#111111] rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6 tracking-wide">
            WHY CHOOSE OX FLEETCARE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We optimize fleet performance through proactive management, expert service, and unwavering commitment to safety and quality.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
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
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="p-8 bg-linear-to-br from-[#111111] to-[#1a1a1a] text-white rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4 text-[#f15a29]">OUR MISSION</h3>
            <p className="text-gray-300 leading-relaxed">
              To optimize fleet performance through proactive maintenance, expert repairs, and comprehensive fleet management solutions that keep your operations running smoothly.
            </p>
          </div>
          <div className="p-8 bg-linear-to-br from-[#f15a29] to-[#d94d1f] text-white rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(241,90,41,0.5)] transition-all duration-500 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4">OUR VISION</h3>
            <p className="text-gray-100 leading-relaxed">
              To be recognized as the industry leader in fleet care through innovation, service excellence, and a commitment to building strong communities through people of character.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
