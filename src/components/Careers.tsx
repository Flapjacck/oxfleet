import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Professional development and training opportunities to advance your skills'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear pathways for advancement and leadership opportunities'
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Work with a dedicated team of professionals who value excellence'
  },
  {
    icon: Briefcase,
    title: 'Industry Leader',
    description: 'Join North America\'s dry suction excavation experts'
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
              JOIN OUR TEAM
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Build your career with a company that values character, service, innovation, and community. We're looking for skilled professionals to join our growing team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-linear-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f15a29] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#111111] rounded-full blur-3xl"></div>
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
              WHY WORK WITH US
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in investing in our people and creating an environment where you can thrive
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="text-center group"
                >
                <div className="mb-6 inline-block p-6 bg-linear-to-br from-gray-50 to-white rounded-full group-hover:from-[#f15a29] group-hover:to-[#d94d1f] transition-all duration-500 shadow-lg group-hover:shadow-xl transform group-hover:scale-110">
                    <Icon size={40} strokeWidth={2} className="text-[#f15a29] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Postings */}
      <section className="py-20 bg-linear-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f15a29] rounded-full blur-3xl"></div>
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
              CURRENT OPENINGS
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Job Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#f15a29] transform hover:-translate-y-2 hover:scale-[1.01]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#111111] mb-3">
                    310T Journeyman Technician
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    We're seeking a certified 310T Journeyman to join our team of expert technicians. Work on a diverse fleet including heavy-duty trucks, hydrovacs, and specialty equipment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Full-Time
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Dundas, ON
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Competitive Salary
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 lg:shrink-0">
                  <a
                    href="mailto:info@ox-equipment.com?subject=Application for 310T Journeyman Position"
                    className="bg-[#f15a29] hover:bg-[#d94d1f] text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                  <a
                    href="tel:8882904044"
                    className="bg-white hover:bg-gray-50 text-[#111111] border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold text-center transition-colors whitespace-nowrap"
                  >
                    Call to Inquire
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Additional positions placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-dashed border-gray-300"
            >
              <p className="text-gray-600 text-lg">
                Don't see a position that fits? We're always looking for talented individuals.
              </p>
              <a
                href="mailto:info@ox-equipment.com?subject=General Career Inquiry"
                className="inline-block mt-4 text-[#f15a29] font-semibold hover:underline"
              >
                Send us your resume →
              </a>
            </motion.div>
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
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              READY TO GET STARTED?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Take the next step in your career. Contact us today to learn more about opportunities at Ox FleetCare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@ox-equipment.com"
                className="bg-[#f15a29] hover:bg-[#d94d1f] text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:shadow-orange-900/50"
              >
                Email Your Resume
              </a>
              <a
                href="tel:8882904044"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all border-2 border-white/30 hover:border-white/50"
              >
                Call (888) 290-4044
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
