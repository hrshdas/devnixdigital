import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import PlansSection from '../components/PlansSection';
import { BarChart3, Paintbrush, LayoutDashboard, Users2, Menu, X, ArrowRight, Star, CheckCircle, Quote, Moon, Sun } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '../assets/logo.png';

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 100,
    });

    // Handle navigation from service pages
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    // Check for saved theme preference - default to light mode always
    const savedTheme = localStorage.getItem('theme');
    
    let shouldUseDark = false;
    
    // Only use dark mode if user has explicitly saved it
    if (savedTheme === 'dark') {
      shouldUseDark = true;
    } else {
      // Default to light mode and save it
      localStorage.setItem('theme', 'light');
      shouldUseDark = false;
    }
    
    setIsDarkMode(shouldUseDark);
    
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Work');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    console.log('Toggling theme from', isDarkMode ? 'dark' : 'light', 'to', newTheme ? 'dark' : 'light');
    
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Applied dark theme');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Applied light theme');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      {/* Professional Navigation with Enhanced Glassmorphism */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/15 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border-b border-white/30 dark:bg-gray-800/20 dark:border-gray-600/30' 
          : 'bg-white/10 backdrop-blur-2xl border-b border-white/20 dark:bg-gray-800/15 dark:border-gray-600/20'
      }`}>
        {/* Enhanced Glass Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-3xl dark:bg-gradient-to-r dark:from-gray-700/10 dark:via-gray-600/5 dark:to-gray-700/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-yellow-500/5"></div>
        
        {/* Glass Reflection Effect */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-60 dark:bg-gradient-to-b dark:from-gray-400/20 dark:to-transparent"></div>
        
        {/* Enhanced Glass Border */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-gray-400/40 dark:to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-4 z-10">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
              <div className="relative">
                <img src={logo} alt="DevNix Logo" className="h-12 w-auto transition-transform hover:scale-105 relative z-10" />
                {/* Glass glow effect around logo */}
                <div className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-gray-400/20"></div>
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
                    className="relative text-gray-800 hover:text-purple-600 font-medium transition-all duration-300 group py-2 px-3 dark:text-gray-200 dark:hover:text-purple-400"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-yellow-400 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
                  </button>
                ))}
              </div>
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="group relative bg-white/20 backdrop-blur-2xl border border-white/40 text-gray-800 hover:text-white font-bold px-3 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center overflow-hidden dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              >
                {/* Simplified glass background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 backdrop-blur-2xl rounded-xl dark:bg-gradient-to-r dark:from-gray-600/20 dark:via-gray-500/10 dark:to-gray-600/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-xl"></div>
                
                {/* Glass reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent opacity-40 rounded-t-xl dark:bg-gradient-to-b dark:from-gray-400/25 dark:to-transparent"></div>
                
                <span className="relative z-10">{isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}</span>
              </button>
              
              {/* Get Started Button */}
              <button
                onClick={() => setShowForm(true)}
                className="group relative bg-white/20 backdrop-blur-2xl border border-white/40 text-gray-800 hover:text-white font-bold px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center overflow-hidden dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              >
                {/* Simplified glass background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 backdrop-blur-2xl rounded-xl dark:bg-gradient-to-r dark:from-gray-600/20 dark:via-gray-500/10 dark:to-gray-600/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-xl dark:bg-gradient-to-r dark:from-gray-600 dark:via-gray-500 dark:to-gray-600"></div>
                
                {/* Glass reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent opacity-40 rounded-t-xl dark:bg-gradient-to-b dark:from-gray-400/25 dark:to-transparent"></div>
                
                <span className="relative z-10">Get Started</span>
              </button>
            </div>
            
            {/* Mobile Controls - Theme Toggle and Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Theme Toggle Button - Always visible on mobile */}
              <button
                onClick={toggleTheme}
                className="group relative bg-white/20 backdrop-blur-2xl border border-white/40 text-gray-800 hover:text-white font-bold p-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center overflow-hidden dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              >
                {/* Simplified glass background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 backdrop-blur-2xl rounded-xl dark:bg-gradient-to-r dark:from-gray-600/20 dark:via-gray-500/10 dark:to-gray-600/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-xl"></div>
                
                {/* Glass reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent opacity-40 rounded-t-xl dark:bg-gradient-to-b dark:from-gray-400/25 dark:to-transparent"></div>
                
                <span className="relative z-10">{isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}</span>
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 text-gray-400 hover:text-purple-600 transition-colors duration-300 relative group rounded-lg backdrop-blur-sm hover:bg-white/20 dark:text-gray-200"
              >
                {/* Glass hover effect for mobile button */}
                <div className="absolute inset-0 bg-white/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm dark:bg-gray-400/30"></div>
                <span className="relative z-10">
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <>
              {/* Enhanced blur background overlay */}
              <div className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-md z-40 dark:bg-black/50" onClick={() => setIsMenuOpen(false)}></div>
              
              <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-3xl border-b border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] mt-1 rounded-b-2xl overflow-hidden z-50 dark:bg-gray-900/95 dark:border-gray-700/50 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
                {/* Enhanced glass overlay with better dark mode */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/30 to-white/40 backdrop-blur-3xl rounded-b-2xl dark:bg-gradient-to-r dark:from-gray-800/60 dark:via-gray-700/40 dark:to-gray-800/60"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-yellow-500/5 rounded-b-2xl dark:bg-gradient-to-b dark:from-purple-600/10 dark:via-transparent dark:to-yellow-400/10"></div>
                
                {/* Enhanced Glass Reflection Effect */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-60 rounded-t-2xl dark:bg-gradient-to-b dark:from-white/10 dark:to-transparent dark:opacity-40"></div>
                
                <div className="relative px-6 py-6 space-y-3">
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
                      className="group relative block w-full text-left text-gray-800 hover:text-white font-medium py-4 px-5 mb-2 transition-all duration-300 rounded-xl bg-white/30 backdrop-blur-xl border border-white/40 hover:bg-white/40 hover:scale-[1.02] dark:bg-gray-800/60 dark:border-gray-600/60 dark:text-gray-100 dark:hover:bg-gray-700/80 dark:hover:text-white dark:hover:border-gray-500/80"
                    >
                      {/* Enhanced Glass background layers */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-white/40 backdrop-blur-xl rounded-xl dark:bg-gradient-to-r dark:from-gray-700/50 dark:via-gray-600/30 dark:to-gray-700/50"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/70 to-yellow-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-xl dark:bg-gradient-to-r dark:from-purple-500/40 dark:to-yellow-400/40"></div>
                      
                      {/* Enhanced Glass reflection */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-50 rounded-t-xl dark:bg-gradient-to-b dark:from-white/15 dark:to-transparent dark:opacity-30"></div>
                      
                      <span className="relative z-10 text-lg font-semibold">{item.name}</span>
                    </button>
                  ))}
                  
                  <div className="pt-6 mt-6 border-t border-white/30 dark:border-gray-600/50">
                    <button
                      onClick={() => {
                        setShowForm(true);
                        setIsMenuOpen(false);
                      }}
                      className="group relative w-full bg-gradient-to-r from-purple-500 to-yellow-500 text-white font-bold px-6 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden dark:bg-gradient-to-r dark:from-purple-600 dark:to-yellow-500 dark:shadow-purple-500/25"
                    >
                      {/* Enhanced glass background for CTA */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-yellow-500/90 backdrop-blur-xl rounded-full dark:bg-gradient-to-r dark:from-purple-700/90 dark:to-yellow-600/90"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-full dark:bg-gradient-to-r dark:from-white/15 dark:to-white/5"></div>
                      
                      {/* Enhanced Glass reflection for CTA */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-60 rounded-t-full dark:bg-gradient-to-b dark:from-white/25 dark:to-transparent dark:opacity-40"></div>
                      
                      <span className="relative z-10 text-lg font-bold">Get Started</span>
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
        <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-white to-purple-100 overflow-hidden dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse dark:bg-gray-600"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
            {/* Removed Logo */}
            <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight dark:text-white">
                Driving <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent dark:text-gray-200">Results</span> Through
                <br />Digital Innovation
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto dark:text-gray-300">
                Transform your brand with data-driven strategies, creative excellence, and cutting-edge digital solutions that deliver measurable growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={() => setShowForm(true)}
                className="group relative bg-white/20 backdrop-blur-2xl border border-white/40 text-gray-800 hover:text-white font-bold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              >
                {/* Simplified Glass button background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/15 to-white/30 backdrop-blur-2xl rounded-2xl dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-800"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/90 to-yellow-400/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-2xl dark:bg-gradient-to-r dark:from-gray-600 dark:via-gray-500 dark:to-gray-600"></div>
                
                {/* Glass reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-70 rounded-t-2xl dark:bg-gradient-to-b dark:from-gray-700 dark:to-transparent"></div>
                
                <span className="relative z-10 text-lg font-bold">Get Started</span>
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group bg-white/80 backdrop-blur-sm text-gray-700 font-semibold px-8 py-4 rounded-full border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 hover:bg-white transition-all duration-300 flex items-center dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              >
                View Our Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
                  <div className={`text-4xl font-bold ${metric.color} mb-2 group-hover:scale-110 transition-transform duration-300 dark:text-gray-200`}>
                    {metric.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium dark:text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section id="services" className="relative py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
                Our <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent dark:text-gray-200">Expertise</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions designed to accelerate your business growth and maximize your online presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Performance Marketing",
                  desc: "Data-driven campaigns that deliver measurable ROI and sustainable growth.",
                  icon: <BarChart3 className="w-8 h-8" />,
                  color: "from-purple-400 to-purple-500",
                  bgColor: "from-purple-300/5 to-purple-400/10",
                  borderColor: "border-purple-200/30",
                  features: ["PPC Campaigns", "SEO Optimization", "Analytics & Reporting"],
                  link: "/services/performance-marketing"
                },
                {
                  title: "Creative Design",
                  desc: "Compelling visuals that tell your brand story and captivate your audience.",
                  icon: <Paintbrush className="w-8 h-8" />,
                  color: "from-yellow-300 to-yellow-400",
                  bgColor: "bg-yellow-100/50",
                  features: ["Brand Identity", "Graphic Design", "Video Production"],
                  link: "/services/creative-design"
                },
                {
                  title: "UI/UX & Web Design",
                  desc: "Intuitive digital experiences that convert visitors into loyal customers.",
                  icon: <LayoutDashboard className="w-8 h-8" />,
                  color: "from-pink-300 to-pink-400",
                  bgColor: "bg-pink-100/50",
                  features: ["Web Development", "Mobile Apps", "User Research"],
                  link: "/services/ui-ux-design"
                },
                {
                  title: "Social Media Management",
                  desc: "Strategic content that builds communities and drives engagement.",
                  icon: <Users2 className="w-8 h-8" />,
                  color: "from-blue-300 to-blue-400",
                  bgColor: "bg-blue-100/50",
                  features: ["Content Strategy", "Community Management", "Influencer Marketing"],
                  link: "/services/social-media"
                },
              ].map((service, i) => (
                <Link
                  key={i}
                  to={service.link}
                  className={`group relative p-8 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-[1.02] dark:bg-gray-800 dark:border-gray-700 block`}
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  {/* Glass background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} backdrop-blur-sm dark:bg-gray-700`}></div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg dark:text-gray-200`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
                      {service.desc}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Learn More Arrow */}
                    <div className="mt-6 flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PlansSection />

        {/* Enhanced Portfolio Section */}
        <section id="portfolio" className="py-32 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
                Our <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">Client Showcase</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 dark:text-gray-300">
                Explore our portfolio of successful projects and see how we've transformed businesses across different industries.
              </p>
            </div>

            {/* Responsive Client Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 max-w-4xl mx-auto">
              
              {/* Left Section - Food & Restaurant Clients */}
              <div 
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                onClick={() => navigate('/client/food-restaurant-portfolio')}
                style={{
                  filter: 'drop-shadow(0 10px 25px rgba(147, 51, 234, 0.15))',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 20px 40px rgba(147, 51, 234, 0.4))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 10px 25px rgba(147, 51, 234, 0.15))';
                }}
                data-aos="fade-right"
              >
                <div className="aspect-[3/4] relative bg-white rounded-2xl overflow-hidden shadow-xl">
                  {/* Single Logo Image */}
                  <img
                    src="/images/momomagiccafe.png"
                    alt="Food & Restaurant Portfolio"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-800/95 via-yellow-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <img 
                        src="/images/momomagiccentreicon.png" 
                        alt="Momo Magic Cafe Logo" 
                        className="w-12 h-12 object-contain rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Hover Popup */}
                  <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="bg-white/95 backdrop-blur-sm p-4 m-4 rounded-xl shadow-2xl">
                      <h4 className="font-bold text-gray-900 text-lg mb-1">Food & Restaurant Clients</h4>
                      <p className="text-yellow-600 text-sm font-medium mb-2">Complete Portfolio Collection</p>
                      <div className="flex items-center text-yellow-600">
                        <span className="text-xs font-semibold">View Full Portfolio</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Tech & Electronics Repair Clients */}
              <div 
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                onClick={() => navigate('/client/tech-electronics-portfolio')}
                style={{
                  filter: 'drop-shadow(0 10px 25px rgba(59, 130, 246, 0.15))',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 20px 40px rgba(59, 130, 246, 0.4))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 10px 25px rgba(59, 130, 246, 0.15))';
                }}
                data-aos="fade-left"
              >
                <div className="aspect-[3/4] relative bg-white rounded-2xl overflow-hidden shadow-xl">
                  {/* Single Logo Image */}
                  <img
                    src="/images/maxiple.png"
                    alt="Tech & Electronics Portfolio"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <img 
                        src="/images/maxiplecentreicon.png" 
                        alt="Maxiple Tech Logo" 
                        className="w-12 h-12 object-contain rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Hover Popup */}
                  <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="bg-white/95 backdrop-blur-sm p-4 m-4 rounded-xl shadow-2xl">
                      <h4 className="font-bold text-gray-900 text-lg mb-1">Tech & Electronics Clients</h4>
                      <p className="text-blue-600 text-sm font-medium mb-2">Complete Portfolio Collection</p>
                      <div className="flex items-center text-blue-600">
                        <span className="text-xs font-semibold">View Full Portfolio</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center" data-aos="fade-up">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
                  Ready to Join Our Success Stories?
                </h3>
                <p className="text-xl text-gray-600 mb-8 dark:text-gray-300">
                  Let's create something amazing for your business
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="group relative bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  {/* Glass background for button */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-yellow-500/90 backdrop-blur-xl rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-full"></div>
                  
                  {/* Glass reflection */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-60 rounded-t-full"></div>
                  
                  <span className="relative z-10 text-xl font-bold flex items-center justify-center">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form Section */}
        <section className="py-32 bg-gray-50 dark:bg-gray-900 relative">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-yellow-500 text-white rounded-full text-sm font-semibold mb-6">
                Limited Time Offer
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-yellow-500 bg-clip-text text-transparent mb-6 dark:from-purple-400 dark:via-purple-500 dark:to-yellow-400">
                Apply for Your Free Shoot
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                We are offering a complimentary first shoot. Fill the form to claim your free session.
              </p>
            </div>

            <div className="max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="200">
              {/* Glassmorphism Form Container */}
              <div className="relative">
                {/* Glass Background */}
                <div className="absolute inset-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/30 shadow-2xl"></div>
                
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-yellow-500/20 rounded-3xl blur-sm"></div>
                
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-10 border border-white/30 dark:border-gray-700/30 shadow-2xl">
                  <form 
                    action="https://formspree.io/f/xeoralnr"
                    method="POST"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const name = formData.get('fullName');
                      const phone = formData.get('phoneNumber');
                      
                      // Validation
                      if (!name || !phone) {
                        alert('Please fill in all required fields.');
                        return;
                      }
                      
                      if (!/^\d+$/.test(phone)) {
                        alert('Please enter a valid phone number (numbers only).');
                        return;
                      }
                      
                      if (phone.length !== 10) {
                        alert('Please enter a 10-digit phone number.');
                        return;
                      }
                      
                      // Submit to Formspree
                      fetch(e.target.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                          'Accept': 'application/json'
                        }
                      }).then(response => {
                        if (response.ok) {
                          alert('Thank you! We will contact you soon for your free shoot.');
                          e.target.reset();
                        } else {
                          alert('There was a problem submitting your form. Please try again.');
                        }
                      }).catch(error => {
                        alert('There was a problem submitting your form. Please try again.');
                      });
                    }}
                    className="space-y-8"
                  >
                    {/* Full Name Field */}
                    <div className="group">
                      <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-3 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors duration-300">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          className="w-full px-6 py-4 rounded-2xl border-2 border-gray-300/50 dark:border-gray-500/50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 text-lg"
                          placeholder="Enter your full name"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-yellow-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Phone Number Field */}
                    <div className="group">
                      <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-3 group-focus-within:text-purple-600 dark:group-focus-within:text-purple-400 transition-colors duration-300">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          required
                          pattern="[0-9]+"
                          maxLength="10"
                          className="w-full px-6 py-4 rounded-2xl border-2 border-gray-300/50 dark:border-gray-500/50 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 text-lg"
                          placeholder="Enter your phone number"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-yellow-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Hidden field for form identification */}
                    <input type="hidden" name="_subject" value="New Free Shoot Application - DevNix Digital" />
                    <input type="hidden" name="_next" value={window.location.href} />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group relative w-full bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                      {/* Glass background for button */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-yellow-500/90 backdrop-blur-xl rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-full"></div>
                      
                      {/* Glass reflection */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-60 rounded-t-full"></div>
                      
                      <span className="relative z-10 text-xl font-bold flex items-center justify-center">
                        Apply Now
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-300/30 dark:border-gray-600/30">
                <div className="relative">
                  {/* Glass Background for Trust Indicators */}
                  <div className="absolute inset-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/30"></div>
                  
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-white/30 dark:border-gray-700/30">
                    <div className="flex items-center justify-center space-x-8">
                      {[
                        { text: "100% Free" },
                        { text: "No Commitment" },
                        { text: "Quick Response" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 max-w-xs sm:max-w-md w-full shadow-2xl relative transform animate-scale-in border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 text-lg sm:text-2xl font-bold transition-colors hover:rotate-90 duration-300 dark:text-gray-200"
              >
                ×
              </button>
              
              <div className="text-center mb-4 sm:mb-8">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg dark:bg-gray-600">
                  <Star className="w-5 h-5 sm:w-8 sm:h-8 text-white animate-pulse" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">Start Your Project</h3>
                <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300">Let's bring your vision to life</p>
              </div>
              
              <form 
                action="https://formspree.io/f/YOUR_FORM_ID" 
                method="POST" 
                className="space-y-3 sm:space-y-6"
              >
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required
                    className="relative z-10 w-full border-2 border-gray-200 rounded-xl py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 peer dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
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
                    className="relative z-10 w-full border-2 border-gray-200 rounded-xl py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 peer dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-yellow-400/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    required
                    className="relative z-10 w-full border-2 border-gray-200 rounded-xl py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 peer dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-yellow-400/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows="3"
                    className="relative z-10 w-full border-2 border-gray-200 rounded-xl py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 resize-none peer dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  ></textarea>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-yellow-400/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
                </div>
                <button 
                  type="submit" 
                  className="group relative w-full bg-white/20 backdrop-blur-xl border border-white/40 text-gray-800 hover:text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                >
                  {/* Simplified Glass button background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/15 to-white/30 backdrop-blur-xl rounded-2xl dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-800"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/90 to-yellow-400/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-2xl dark:bg-gradient-to-r dark:from-gray-600 dark:via-gray-500 dark:to-gray-600"></div>
                  
                  {/* Glass reflection */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-70 rounded-t-2xl dark:bg-gradient-to-b dark:from-gray-700 dark:to-transparent"></div>
                  
                  <span className="relative z-10 flex items-center justify-center">
                    Send Inquiry
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-16 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-purple-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <div className="flex items-center mb-6">
                  <img src={logo} alt="DevNix Digital" className="h-12 w-auto mr-4" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-yellow-300 dark:to-purple-300">
                    DevNix Digital
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed dark:text-gray-400">
                  Transforming businesses through innovative digital solutions. We're your partners in growth, creativity, and success.
                </p>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/devnixdigital" className="group p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg dark:bg-gray-600">
                    <FaInstagram className="w-5 h-5 text-white" />
                  </a>
                  <a href="https://linkedin.com/company/devnixdigital" className="group p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg dark:bg-gray-600">
                    <FaLinkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-yellow-400 dark:text-yellow-300">Services</h4>
                <ul className="space-y-3">
                  {[
                    { name: 'Performance Marketing', path: '/services/performance-marketing' },
                    { name: 'Creative Design', path: '/services/creative-design' },
                    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
                    { name: 'Social Media Management', path: '/services/social-media' }
                  ].map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.path}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 dark:text-gray-400 dark:hover:text-yellow-300"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-yellow-400 dark:text-yellow-300">Get In Touch</h4>
                <div className="space-y-3">
                  <p className="text-gray-300 dark:text-gray-400">
                    <span className="text-yellow-400 dark:text-yellow-300">Email:</span><br />
                    devnixdigital@gmail.com
                  </p>
                  <p className="text-gray-300 dark:text-gray-400">
                    <span className="text-yellow-400 dark:text-yellow-300">Available:</span><br />
                    24/7 Support
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="border-t border-gray-700 pt-12 mb-12 dark:border-gray-800">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-yellow-300 dark:to-purple-300">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto dark:text-gray-400">

                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="group relative bg-gradient-to-r from-yellow-400 to-purple-500 text-white font-bold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden dark:bg-gradient-to-r dark:from-yellow-300 dark:to-purple-400"
                >
                  {/* Enhanced glass background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/90 to-purple-600/90 backdrop-blur-xl rounded-2xl dark:bg-gradient-to-r dark:from-yellow-400/90 dark:to-purple-500/90"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-2xl dark:bg-gradient-to-r dark:from-white/15 dark:to-white/5"></div>
                  
                  {/* Glass reflection */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-50 rounded-t-2xl dark:bg-gradient-to-b dark:from-white/20 dark:to-transparent dark:opacity-40"></div>
                  
                  <span className="relative z-10 flex items-center justify-center text-lg font-bold">
                    Start a Project
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center dark:border-gray-800">
              <p className="text-gray-400 text-sm mb-4 md:mb-0 dark:text-gray-500">
                2024 DevNix Digital. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300 dark:text-gray-500 dark:hover:text-yellow-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300 dark:text-gray-500 dark:hover:text-yellow-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
