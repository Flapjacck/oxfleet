import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:info@ox-equipment.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              CONTACT US
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get in touch with our team. We're here to answer your questions and discuss how we can help with your fleet needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-linear-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#f15a29] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#111111] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-8">
                GET IN TOUCH
              </h2>
              
              <div className="space-y-8 mb-12">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-[#f15a29] text-white rounded-xl">
                    <Phone size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111] mb-2">Phone</h3>
                    <a href="tel:8882904044" className="text-gray-600 hover:text-[#f15a29] transition-colors text-lg">
                      (888) 290-4044
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-[#f15a29] text-white rounded-xl">
                    <Mail size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111] mb-2">Email</h3>
                    <a href="mailto:info@ox-equipment.com" className="text-gray-600 hover:text-[#f15a29] transition-colors text-lg break-all">
                      INFO@OX-EQUIPMENT.COM
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-[#f15a29] text-white rounded-xl">
                    <MapPin size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111] mb-2">Location</h3>
                    <p className="text-gray-600 text-lg">
                      466 HWY 52<br />
                      Dundas, ON L9H 5E2<br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#111111] mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                  SEND US A MESSAGE
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f15a29] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f15a29] focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f15a29] focus:outline-none transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f15a29] focus:outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f15a29] hover:bg-[#d94d1f] text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:shadow-orange-900/50 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
            className="bg-white rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.869647886976!2d-79.96789!3d43.26667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b4c5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2s466%20Highway%2052%2C%20Dundas%2C%20ON%20L9H%205E2!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ox FleetCare Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
