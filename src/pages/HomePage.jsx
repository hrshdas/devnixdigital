import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import PlansSection from '../components/PlansSection';
import { BarChart3, Paintbrush, LayoutDashboard, Users2, Menu, X, ArrowRight, Star, CheckCircle, Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '../assets/logo.png';

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
    });
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Work');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Professional Navigation with Enhanced Glassmorphism */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/5 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border-b border-white/20' 
          : 'bg-white/3 backdrop-blur-2xl border-b border-white/10'
      }`}>
        {/* Enhanced Glass Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-yellow-500/5"></div>
        
        {/* Glass Reflection Effect */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-60"></div>
        
        {/* Enhanced Glass Border */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-4 z-10">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
              <div className="relative">
                <img src={logo} alt="DevNix Logo" className="h-12 w-auto transition-transform hover:scale-105 relative z-10" />
                {/* Glass glow effect around logo */}
                <div className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Desktop Navigation - Moved to Right Side */}
            <div className="hidden md:flex items-center space-x-8 ml-auto">
              {/* Navigation Items */}
              <div className="flex items-center space-x-8">
                {[
                  { name: 'Services', id: 'services' },
                  { name: 'Plans', id: 'plans' },
                  { name: 'Portfolio', id: 'portfolio' }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="relative text-gray-800 hover:text-purple-600 font-medium transition-all duration-300 group py-2 px-3"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-yellow-400 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
                  </button>
                ))}
              </div>
              
              {/* Get Started Button */}
              <button
                onClick={() => setShowForm(true)}
                className="group relative bg-white/20 backdrop-blur-2xl border border-white/40 text-gray-800 hover:text-white font-bold px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center overflow-hidden"
              >
                {/* Simplified glass background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 backdrop-blur-2xl rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-xl"></div>
                
                {/* Glass reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent opacity-40 rounded-t-xl"></div>
                
                <span className="relative z-10">Get Started</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 text-gray-800 hover:text-purple-600 transition-colors duration-300 relative group rounded-lg backdrop-blur-sm hover:bg-white/20"
            >
              {/* Glass hover effect for mobile button */}
              <div className="absolute inset-0 bg-white/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
              <span className="relative z-10">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </span>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <>
              {/* Blur background overlay */}
              <div className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-md z-40" onClick={() => setIsMenuOpen(false)}></div>
              
              <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-3xl border-b border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] mt-1 rounded-b-2xl overflow-hidden z-50">
                {/* Enhanced glass overlay matching header */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/30 to-white/40 backdrop-blur-3xl rounded-b-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-yellow-500/5 rounded-b-2xl"></div>
                
                {/* Glass Reflection Effect matching header */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-60 rounded-t-2xl"></div>
                
                <div className="relative px-6 py-4 space-y-4">
                  {[
                    { name: 'Services', id: 'services' },
                    { name: 'Plans', id: 'plans' },
                    { name: 'Portfolio', id: 'portfolio' }
                  ].map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsMenuOpen(false);
                      }}
                      className="group relative block w-full text-left text-gray-800 hover:text-white font-medium py-3 px-4 mb-2 transition-all duration-300 rounded-lg bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white/30"
                    >
                      {/* Glass background layers */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/15 to-white/30 backdrop-blur-xl rounded-lg"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/70 to-yellow-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-lg"></div>
                      
                      {/* Glass reflection */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent opacity-50 rounded-t-lg"></div>
                      
                      <span className="relative z-10">{item.name}</span>
                    </button>
                  ))}
                  
                  <div className="pt-6 mt-4 border-t border-white/20">
                    <button
                      onClick={() => {
                        setShowForm(true);
                        setIsMenuOpen(false);
                      }}
                      className="group relative w-full bg-white/30 backdrop-blur-xl border border-white/40 text-gray-800 hover:text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {/* Enhanced glass background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-white/40 backdrop-blur-xl rounded-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      {/* Glass reflection */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-60 rounded-t-xl"></div>
                      
                      <span className="relative z-10">Get Started</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>

      <div>
        {/* Hero Section - Enhanced Typography & Layout */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-white to-purple-100 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
            {/* Removed Logo */}
            <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
                Driving <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">Results</span> Through
                <br />Digital Innovation
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                Transform your brand with data-driven strategies, creative excellence, and cutting-edge digital solutions that deliver measurable growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={() => setShowForm(true)}
                className="group relative bg-white/20 backdrop-blur-2xl border border-white/40 text-gray-800 hover:text-white font-bold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                {/* Simplified Glass button background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/15 to-white/30 backdrop-blur-2xl rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/90 to-yellow-400/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-2xl"></div>
                
                {/* Glass reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-70 rounded-t-2xl"></div>
                
                <span className="relative z-10 text-lg font-bold">Get Started</span>
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group bg-white/80 backdrop-blur-sm text-gray-700 font-semibold px-8 py-4 rounded-full border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 hover:bg-white transition-all duration-300 flex items-center"
              >
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="600">
              {[
                { number: '30+', label: 'Projects Delivered', color: 'text-purple-600' },
                { number: '98%', label: 'Client Satisfaction', color: 'text-yellow-500' },
                { number: '2x', label: 'Average ROI Increase', color: 'text-pink-500' },
                { number: '24/7', label: 'Support Available', color: 'text-indigo-500' }
              ].map((metric, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`text-4xl font-bold ${metric.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {metric.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section id="services" className="relative py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital solutions designed to accelerate your business growth and maximize your online presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Performance Marketing",
                  desc: "Data-driven campaigns that deliver measurable ROI and sustainable growth.",
                  icon: <BarChart3 className="w-8 h-8" />,
                  color: "from-purple-600 to-purple-700",
                  bgColor: "from-purple-500/5 to-purple-600/10",
                  borderColor: "border-purple-200/30",
                  features: ["PPC Campaigns", "SEO Optimization", "Analytics & Reporting"]
                },
                {
                  title: "Creative Design",
                  desc: "Compelling visuals that tell your brand story and captivate your audience.",
                  icon: <Paintbrush className="w-8 h-8" />,
                  color: "from-yellow-500 to-yellow-600",
                  bgColor: "bg-yellow-50",
                  features: ["Brand Identity", "Graphic Design", "Video Production"]
                },
                {
                  title: "UI/UX & Web Design",
                  desc: "Intuitive digital experiences that convert visitors into loyal customers.",
                  icon: <LayoutDashboard className="w-8 h-8" />,
                  color: "from-pink-500 to-pink-600",
                  bgColor: "bg-pink-50",
                  features: ["Web Development", "Mobile Apps", "User Research"]
                },
                {
                  title: "Social Media Management",
                  desc: "Strategic content that builds communities and drives engagement.",
                  icon: <Users2 className="w-8 h-8" />,
                  color: "from-indigo-500 to-indigo-600",
                  bgColor: "bg-indigo-50",
                  features: ["Content Strategy", "Community Management", "Influencer Marketing"]
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className={`group relative p-8 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-[1.02]`}
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  {/* Glass background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} backdrop-blur-sm`}></div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 max-w-xs sm:max-w-md w-full shadow-2xl relative transform animate-scale-in border border-gray-100">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 text-lg sm:text-2xl font-bold transition-colors hover:rotate-90 duration-300"
              >
                ×
              </button>
              
              <div className="text-center mb-4 sm:mb-8">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                  <Star className="w-5 h-5 sm:w-8 sm:h-8 text-white animate-pulse" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">Start Your Project</h3>
                <p className="text-xs sm:text-base text-gray-600">Let's bring your vision to life</p>
              </div>
              
              <form action="https://formspree.io/f/mvgazvle" method="POST" className="space-y-3 sm:space-y-6">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required
                    className="relative z-10 w-full border-2 border-gray-200 rounded-xl py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 peer"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-yellow-400/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    maxLength="10" 
                    pattern="\d{10}" 
                    required
                    className="relative z-10 w-full border-2 border-gray-200 rounded-xl py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 peer"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-yellow-400/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    required
                    className="relative z-10 w-full border-2 border-gray-200 rounded-xl py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 peer"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-yellow-400/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows="3"
                    className="relative z-10 w-full border-2 border-gray-200 rounded-xl py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 resize-none peer"
                  ></textarea>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-yellow-400/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
                </div>
                <button 
                  type="submit" 
                  className="group relative w-full bg-white/20 backdrop-blur-xl border border-white/40 text-gray-800 hover:text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  {/* Simplified Glass button background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/15 to-white/30 backdrop-blur-xl rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/90 to-yellow-400/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-2xl"></div>
                  
                  {/* Glass reflection */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-70 rounded-t-2xl"></div>
                  
                  <span className="relative z-10 flex items-center justify-center">
                    Send Inquiry
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        )}

        <PlansSection />

        {/* Enhanced Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">Portfolio</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Explore our latest work and see how we've helped businesses achieve remarkable digital transformations.
              </p>
              
              {/* Portfolio Categories */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['All Work', 'Videos', 'Design'].map((category, index) => (
                  <button
                    key={category}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === category 
                        ? 'bg-gradient-to-r from-purple-500 to-yellow-400 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Portfolio */}
            {(activeFilter === 'All Work' || activeFilter === 'Videos') && (
              <div data-aos="fade-up">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Video Portfolio</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: "Brand Campaign Video", client: "Tech Startup", category: "Marketing" },
                    { title: "Product Launch", client: "E-commerce Brand", category: "Commercial" },
                    { title: "Social Media Content", client: "Fashion Brand", category: "Social Media" }
                  ].map((video, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
                      <div className="aspect-video bg-gradient-to-br from-purple-100 to-yellow-100 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <div className="w-0 h-0 border-l-[12px] border-l-purple-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-semibold">{video.title}</h4>
                          <p className="text-sm opacity-90">{video.category}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Image Portfolio */}
            {(activeFilter === 'All Work' || activeFilter === 'Design') && (
              <div data-aos="fade-up">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Creative Design Showcase</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {["client-a", "client-b"].map((client) =>
                    [1, 2, 3, 4].map((n) => (
                      <div key={`${client}-image-${n}`} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                        <img
                          src={`/images/${client}-image${n}.jpg`}
                          alt={`${client} design work ${n}`}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute bottom-3 left-3 text-white">
                            <p className="text-sm font-medium">Client Shoots</p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="text-center mt-16" data-aos="fade-up">
              <button
                onClick={() => setShowForm(true)}
                className="group relative w-full bg-white/20 backdrop-blur-xl border border-white/40 text-gray-800 hover:text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
              >
                {/* Simplified Glass button background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/15 to-white/30 backdrop-blur-xl rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/90 to-yellow-400/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-2xl"></div>
                
                {/* Glass reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-70 rounded-t-2xl"></div>
                
                <span className="relative z-10 text-lg font-bold">Start a Project</span>
              </button>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <img src={logo} alt="DevNix Logo" className="h-12 w-auto" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
                    DevNix Digital
                  </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  Transforming businesses through innovative digital solutions. We're your partners in growth, creativity, and success.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/devnixdigital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/devnixdigital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-yellow-400">Services</h3>
                <ul className="space-y-3">
                  {['Performance Marketing', 'Creative Design', 'UI/UX Design', 'Social Media Management'].map((service) => (
                    <li key={service}>
                      <button
                        onClick={() => scrollToSection('services')}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                      >
                        {service}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-yellow-400">Get In Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:devnixdigital@gmail.com"
                    className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v1l-10 6L2 5V4zm0 3.236l10 6 10-6V20a2 2 0 01-2 2H4a2 2 0 01-2-2V7.236z" />
                    </svg>
                    devnixdigital@gmail.com
                  </a>
                  <button
                    onClick={() => setShowForm(true)}
                    className="group relative w-full bg-white/20 backdrop-blur-xl border border-white/40 text-gray-800 hover:text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                  >
                    {/* Simplified Glass button background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/15 to-white/30 backdrop-blur-xl rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/90 to-yellow-400/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-2xl"></div>
                    
                    {/* Glass reflection */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-70 rounded-t-2xl"></div>
                    
                    <span className="relative z-10 text-lg font-bold">Start a Project</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                {new Date().getFullYear()} <strong>DevNix Digital</strong>. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <button className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</button>
                <button className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</button>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Enhanced Footer */}
    </>
  );
}
