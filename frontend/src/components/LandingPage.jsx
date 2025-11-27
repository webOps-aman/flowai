import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Check, Star, Users, Zap, Shield, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Reusable animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center"
            >
              <Zap className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold text-white">FlowAI</span>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="hidden md:flex space-x-8"
            >
              <a href="#features" className="text-gray-300 hover:text-purple-400 transition">Features</a>
              <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition">Testimonials</a>
              <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition">Pricing</a>
            </motion.div>

            <div className="hidden md:flex items-center space-x-4">
              <motion.button 
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-gray-300 hover:text-white transition"
              >
                Sign In
              </motion.button>

              <motion.button 
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-slate-800 border-t border-purple-500/20"
            >
              <div className="px-4 pt-2 pb-4 space-y-2">
                <a href="#features" className="block text-gray-300 hover:text-purple-400 py-2">Features</a>
                <a href="#testimonials" className="block text-gray-300 hover:text-purple-400 py-2">Testimonials</a>
                <a href="#pricing" className="block text-gray-300 hover:text-purple-400 py-2">Pricing</a>

                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg mt-4"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
  <div className="max-w-7xl mx-auto">

    {/* Top Tag */}
    <motion.div
      initial={{ opacity: 0, y: -40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full"
    >
      <span className="text-purple-300 text-sm">✨ Introducing AI-Powered Workflows</span>
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
    >
      Automate Your Workflow
      <br />
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
      >
        With Intelligence
      </motion.span>
    </motion.h1>

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: true }}
      className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
    >
      Transform your business with AI-powered automation. Save time, reduce costs,
      and scale faster with FlowAI's intelligent workflow platform.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
      }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <motion.button
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center group"
      >
        Start Free Trial
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
      </motion.button>

      <motion.button
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="border border-purple-500/50 hover:border-purple-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
      >
        Watch Demo
      </motion.button>
    </motion.div>

    {/* Bottom Checkpoints */}
    <motion.div
      className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.25, delayChildren: 0.4 },
        },
      }}
    >
      {["No credit card required", "14-day free trial", "Cancel anytime"].map(
        (text, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="flex items-center gap-2"
          >
            <Check className="h-5 w-5 text-green-400" />
            <span>{text}</span>
          </motion.div>
        )
      )}
    </motion.div>

  </div>
</section>


      {/* FEATURES */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to automate, optimize, and scale your business operations
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >

            {/* 1 */}
            <motion.div 
              variants={fadeUp}
              className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition group"
            >
              <div className="bg-purple-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Zap className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-400 leading-relaxed">
                Process thousands of tasks per second with our optimized AI engine. 
                Experience unprecedented speed in workflow automation.
              </p>
            </motion.div>

            {/* 2 */}
            <motion.div 
              variants={fadeUp}
              className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition group"
            >
              <div className="bg-purple-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Shield className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-400 leading-relaxed">
                Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA. 
                Your data is always protected and private.
              </p>
            </motion.div>

            {/* 3 */}
            <motion.div 
              variants={fadeUp}
              className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition group"
            >
              <div className="bg-purple-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Users className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Team Collaboration</h3>
              <p className="text-gray-400 leading-relaxed">
                Work seamlessly with your team in real-real time. Share workflows, assign tasks, and track progress effortlessly.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Loved by Thousands of Teams
            </h2>
            <p className="text-xl text-gray-400">
              See what our customers have to say about FlowAI
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } }
            }}
          >
            {/* Testimonial Cards */}
            {[1,2,3].map((box,i)=>(
              <motion.div 
                key={i}
                variants={fadeUp}
                className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/20"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {i===0 && `"FlowAI transformed our operations completely. We've automated 80% of tasks and saved countless hours."`}
                  {i===1 && `"The best investment we've made. Productivity increased 300%."`}
                  {i===2 && `"Incredible platform! Endless automation possibilities. Highly recommended!"`}
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {i===0 && "SJ"}{i===1 && "MC"}{i===2 && "EP"}
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-semibold">
                      {i===0 && "Sarah Johnson"}
                      {i===1 && "Michael Chen"}
                      {i===2 && "Emily Parker"}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {i===0 && "CEO at TechCorp"}
                      {i===1 && "CTO at InnovateLab"}
                      {i===2 && "Founder at StartupHub"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">

          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Choose the perfect plan for your team
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.25 } }
            }}
          >

            {/* Starter */}
            <motion.div 
              variants={fadeUp}
              className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-gray-400 mb-6">Perfect for small teams</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$29</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> Up to 1,000 tasks/month</li>
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> 5 team members</li>
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> Basic integrations</li>
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> Email support</li>
              </ul>

              <button className="w-full border border-purple-500/50 hover:border-purple-400 text-white py-3 rounded-lg font-semibold transition">
                Start Free Trial
              </button>
            </motion.div>

            {/* Professional */}
            <motion.div 
              variants={fadeUp}
              className="bg-gradient-to-br from-purple-900/60 to-slate-900/60 p-8 rounded-2xl border-2 border-purple-500 relative transform scale-105 shadow-2xl"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <p className="text-gray-300 mb-6">For growing businesses</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$99</span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> Up to 10,000 tasks/month</li>
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> Unlimited team members</li>
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> All integrations</li>
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> Priority support</li>
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> Advanced analytics</li>
              </ul>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition">
                Start Free Trial
              </button>
            </motion.div>

            {/* Enterprise */}
            <motion.div 
              variants={fadeUp}
              className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">For large organizations</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">Custom</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> Unlimited tasks</li>
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> Unlimited team members</li>
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> Custom integrations</li>
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> Dedicated support</li>
                <li className="flex items-center text-gray-300"><Check className="h-5 w-5 text-green-400 mr-3" /> SLA guarantee</li>
              </ul>

              <button className="w-full border border-purple-500/50 hover:border-purple-400 text-white py-3 rounded-lg font-semibold transition">
                Contact Sales
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            variants={fadeUp}
            className="grid md:grid-cols-4 gap-8 mb-8"
          >

            <div>
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-purple-400" />
                <span className="ml-2 text-xl font-bold text-white">FlowAI</span>
              </div>
              <p className="text-gray-400">
                Next-gen automation platform for modern teams.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Integrations</li>
                <li>Pricing</li>
                <li>API</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Status</li>
                <li>Contact</li>
                <li>Security</li>
              </ul>
            </div>

          </motion.div>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-center text-gray-500 text-sm"
          >
            © 2025 FlowAI. All rights reserved.
          </motion.p>

        </div>
      </footer>

    </div>
  );
}
