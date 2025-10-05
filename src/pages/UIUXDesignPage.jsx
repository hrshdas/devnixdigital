import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Figma, CheckCircle, ArrowLeft, Smartphone, Monitor, Users, Zap, Layers, Eye, Sun, Moon, X, Menu, ExternalLink } from 'lucide-react';
import logo from '../assets/logo.png';

const UIUXDesignPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const navigateToSection = (sectionId) => {
    navigate('/', { state: { scrollTo: sectionId } });
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    document.title = "UI/UX Design - DevNix Digital";
    
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDarkMode(shouldUseDark);
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Scroll detection for navigation styling
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const features = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies for optimal performance and user experience."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Design",
      description: "Intuitive mobile applications designed for iOS and Android with seamless user experiences."
    },
    {
      icon: <Figma className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "User-centered design approach that creates interfaces your customers will love to use."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Clean, efficient code that brings your designs to life with smooth interactions and animations."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Research",
      description: "In-depth user research and testing to ensure your product meets real user needs and expectations."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading times and optimized performance for better user engagement and SEO."
    }
  ];

  const benefits = [
    "Increase user engagement by 200%",
    "Reduce bounce rate by 60%",
    "Mobile-first responsive design",
    "Cross-browser compatibility",
    "SEO-optimized structure",
    "Accessibility compliance (WCAG)",
    "Performance optimization",
    "Ongoing maintenance and support"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
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
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-60 dark:bg-gradient-to-b dark:from-gray-400/30 dark:to-transparent"></div>
        
        {/* Enhanced Glass Border */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-gray-400/40 dark:to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-4 z-10">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => navigate('/')}>
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
                    onClick={() => navigateToSection(item.id)}
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
                className="group relative bg-white/20 backdrop-blur-2xl border border-white/40 text-gray-800 hover:text-white font-bold p-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center overflow-hidden dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              >
                {/* Simplified glass background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 backdrop-blur-2xl rounded-xl dark:bg-gradient-to-r dark:from-gray-600/20 dark:via-gray-500/10 dark:to-gray-600/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-xl"></div>
                
                {/* Glass reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent opacity-40 rounded-t-xl dark:bg-gradient-to-b dark:from-gray-400/25 dark:to-transparent"></div>
                
                <span className="relative z-10">
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-3xl border-b border-white/30 shadow-2xl dark:bg-gray-900/95 dark:border-gray-600/30">
            {/* Glass background layers for mobile menu */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 backdrop-blur-3xl dark:bg-gradient-to-r dark:from-gray-700/20 dark:via-gray-600/10 dark:to-gray-700/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-yellow-500/5"></div>
            
            <div className="relative px-6 py-6 space-y-4 z-10">
              {[
                { name: 'Services', id: 'services' },
                { name: 'Plans', id: 'plans' },
                { name: 'Portfolio', id: 'portfolio' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigateToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-800 hover:text-purple-600 font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white/50 dark:text-gray-200 dark:hover:text-purple-400 dark:hover:bg-gray-700/50"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Get Started Button */}
              <button
                onClick={() => {
                  setShowForm(true);
                  setIsMenuOpen(false);
                }}
                className="group relative w-full bg-gradient-to-r from-purple-500/80 to-yellow-400/80 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden dark:bg-gradient-to-r dark:from-gray-600 dark:via-gray-500 dark:to-gray-600"
              >
                {/* Glass background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-yellow-500/90 backdrop-blur-xl rounded-xl dark:bg-gradient-to-r dark:from-gray-700/90 dark:to-gray-600/90"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-xl"></div>
                
                {/* Glass reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-50 rounded-t-xl"></div>
                
                <span className="relative z-10 text-lg font-bold">Get Started</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        ></div>
        
        {/* Lighter Gradient Overlay with Blur */}
        <div className={`absolute inset-0 backdrop-blur-sm ${isDarkMode ? 'bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/50' : 'bg-gradient-to-br from-pink-500/40 via-rose-400/30 to-pink-600/35'}`}></div>
        
        {/* Enhanced Soft Color Overlay with Gradient and Blur */}
        <div className={`absolute inset-0 backdrop-blur-[2px] ${isDarkMode ? 'bg-gradient-to-tr from-gray-200/15 via-transparent to-gray-300/10' : 'bg-gradient-to-tr from-pink-200/25 via-pink-100/15 to-rose-200/20'}`}></div>

        {/* Back to Home Button - Top Left Corner */}
        <div className="absolute top-6 left-6 z-20">
          <Link 
            to="/" 
            className={`flex items-center ${isDarkMode ? 'text-white/90' : 'text-white/90'} hover:text-white transition-colors group ${isDarkMode ? 'bg-white/10' : 'bg-white/10'} backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20`}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-white'}`}>Back to Home</span>
          </Link>
        </div>

        {/* Animated Background Elements */}
        <div className={`absolute top-20 left-20 w-72 h-72 ${isDarkMode ? 'bg-gray-400/10' : 'bg-pink-400/10'} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 right-20 w-96 h-96 ${isDarkMode ? 'bg-gray-400/10' : 'bg-rose-400/10'} rounded-full blur-3xl animate-pulse delay-1000`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${isDarkMode ? 'bg-white/5' : 'bg-white/5'} rounded-full`}></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`w-20 h-20 ${isDarkMode ? 'bg-gray-400' : 'bg-gradient-to-r from-pink-500 to-rose-500'} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl`}>
              <Figma className={`w-10 h-10 ${isDarkMode ? 'text-white' : 'text-white'}`} />
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-white'}`}>
              UI/UX & <span className={`bg-gradient-to-r from-pink-300 to-rose-300 ${isDarkMode ? 'bg-clip-text text-transparent' : 'bg-clip-text text-transparent'}`}>Web Design</span>
            </h1>
            
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-white/80' : 'text-white/80'} mb-8 max-w-3xl mx-auto`}>
              Intuitive digital experiences that convert visitors into loyal customers
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`bg-pink-600 ${isDarkMode ? 'text-white' : 'text-white'} px-8 py-4 rounded-xl font-semibold hover:bg-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                Get Started Today
              </button>
              <Link to="/#portfolio" className={`border-2 border-white/30 ${isDarkMode ? 'text-white' : 'text-white'} px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm`}>
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Create Digital Experiences with 
                <span className={`bg-gradient-to-r from-pink-300 to-rose-400 ${isDarkMode ? 'bg-clip-text text-transparent' : 'bg-clip-text text-transparent'}`}> User-Centered Design</span>
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-600'} mb-6 leading-relaxed`}>
                Our UI/UX design approach puts your users at the center of everything we create. We combine beautiful aesthetics with intuitive functionality to deliver digital experiences that not only look amazing but also drive real business results.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-600'} mb-8 leading-relaxed`}>
                From wireframes to final implementation, our team ensures every pixel serves a purpose and every interaction feels natural. We create websites and applications that your users will love to use and return to again and again.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className={`text-center p-4 ${isDarkMode ? 'bg-white' : 'bg-white'} rounded-xl shadow-sm`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-pink-400' : 'text-pink-400'} mb-2`}>200%</div>
                  <div className={`text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>User Engagement Boost</div>
                </div>
                <div className={`text-center p-4 ${isDarkMode ? 'bg-white' : 'bg-white'} rounded-xl shadow-sm`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-pink-400' : 'text-pink-400'} mb-2`}>60%</div>
                  <div className={`text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>Bounce Rate Reduction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`bg-gradient-to-br from-pink-300 to-rose-400 rounded-2xl p-8 ${isDarkMode ? 'text-white' : 'text-white'}`}>
                <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-white'}`}>What You Get</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 mr-3 ${isDarkMode ? 'text-pink-100' : 'text-pink-100'} flex-shrink-0`} />
                      <span className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Our UI/UX & Web Design 
              <span className={`bg-gradient-to-r from-pink-300 to-rose-400 ${isDarkMode ? 'bg-clip-text text-transparent' : 'bg-clip-text text-transparent'}`}> Services</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-white/80' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Comprehensive design and development solutions that create exceptional user experiences and drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-200`}
              >
                <div className={`w-14 h-14 ${isDarkMode ? 'bg-gray-400' : 'bg-gradient-to-r from-pink-300 to-rose-400'} rounded-xl flex items-center justify-center ${isDarkMode ? 'text-white' : 'text-white'} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 group-hover:text-pink-400 transition-colors`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-600 ${isDarkMode ? 'text-white/80' : 'text-gray-600'} leading-relaxed`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-pink-300 via-pink-400 to-rose-400'} relative overflow-hidden`}>
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-white/10' : 'bg-white/10'}`}></div>
        <div className={`absolute inset-0 overflow-hidden`}>
          <div className={`absolute -top-40 -right-40 w-80 h-80 ${isDarkMode ? 'bg-gray-400/40' : 'bg-pink-200/40'} rounded-full mix-blend-multiply filter blur-xl animate-pulse`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 ${isDarkMode ? 'bg-gray-400/40' : 'bg-rose-200/40'} rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000`}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-white'} mb-6`}>
              Ready to Create Amazing Experiences?
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-white/80' : 'text-pink-50'} mb-8 max-w-2xl mx-auto`}>
              Let's design and build digital experiences that your users will love. Start your project with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contact"
                className={`bg-white ${isDarkMode ? 'text-pink-400' : 'text-pink-400'} px-8 py-4 rounded-xl font-semibold hover:bg-pink-50 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                Get Started Today
              </Link>
              <Link 
                to="/"
                className={`bg-pink-300/30 ${isDarkMode ? 'text-white' : 'text-white'} backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-pink-300/40 transition-all duration-300 border border-white/30`}
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Capture Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get Started</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-yellow-400 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </motion.div>
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
                <a href="#" className="group p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg dark:bg-gray-600">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="group p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg dark:bg-gray-600">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
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
                  <ExternalLink className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
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
    </motion.div>
  );
};

export default UIUXDesignPage;
