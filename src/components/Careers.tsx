import { motion } from 'framer-motion';
import { Briefcase, Heart, TrendingUp, Users, Award } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Industry Leading Technology',
    description: 'Work with cutting-edge equipment and innovative solutions'
  },
  {
    icon: Award,
    title: 'Competitive Wages',
    description: 'Earn what you deserve with industry-leading compensation'
  },
  {
    icon: Heart,
    title: 'Health and Dental Benefits',
    description: 'Comprehensive benefits package for you and your family'
  },
  {
    icon: Users,
    title: 'Supportive Team Atmosphere',
    description: 'Join a collaborative team that values each member'
  },
  {
    icon: Briefcase,
    title: 'Exciting Employee Programs',
    description: 'Health and Wellness, Reward and Recognition programs'
  },
];

const Careers = () => {
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
              JOIN OUR GROWING TEAM!
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are always looking for outstanding people. Apply today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-linear-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f15a29] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#111111] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              We understand the importance of providing high-level service to customers. Our culture is focused on learning and promoting leadership among our workforce. We are always looking for outstanding individuals to join our team!
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-7 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="text-center group w-full md:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)]"
                >
                <div className="mb-6 inline-block p-6 bg-linear-to-br from-gray-50 to-white rounded-full group-hover:from-[#f15a29] group-hover:to-[#d94d1f] transition-all duration-500 shadow-lg group-hover:shadow-xl transform group-hover:scale-110">
                    <Icon size={44} strokeWidth={2} className="text-[#f15a29] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-snug">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Postings */}
      <section className="py-16 bg-linear-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f15a29] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            
            transition={{ duration: 0.3 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-8">
              JOB POSTINGS
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <a
                href="https://bartels-group.com/careers/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f15a29] hover:bg-[#d94d1f] text-white px-12 py-5 rounded-lg font-bold text-xl transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                View Current Openings
              </a>
              <p className="text-gray-600 mt-6 text-lg">
                Click above to see all available positions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-[#111111] to-[#1a1a1a] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              WANT TO JOIN OUR TEAM?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get in touch with us today to learn more about career opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@ox-equipment.com"
                className="bg-[#f15a29] hover:bg-[#d94d1f] text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:shadow-orange-900/50"
              >
                Email Us
              </a>
              <a
                href="tel:8882904044"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all border-2 border-white/30 hover:border-white/50"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
