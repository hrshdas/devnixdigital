import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart3, CheckCircle, ArrowLeft, Target, TrendingUp, Users, DollarSign, Search, BarChart, Zap, Sun, Moon, X, Menu, ExternalLink } from 'lucide-react';
import logo from '../assets/logo.png';

const PerformanceMarketingPage = () => {
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
    
    document.title = "Performance Marketing - DevNix Digital";
    
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
      icon: <Target className="w-6 h-6" />,
      title: "Targeted PPC Campaigns",
      description: "Precision-targeted Google Ads and social media campaigns that reach your ideal customers at the right moment."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Comprehensive search engine optimization to improve your organic rankings and drive sustainable traffic."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Analytics & Reporting",
      description: "Detailed performance tracking with actionable insights to continuously optimize your marketing ROI."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Conversion Optimization",
      description: "A/B testing and landing page optimization to maximize your conversion rates and revenue."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Keyword Research",
      description: "In-depth keyword analysis to identify high-value opportunities and competitive advantages."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Campaign Automation",
      description: "Smart automation tools to optimize bidding, targeting, and budget allocation in real-time."
    }
  ];

  const benefits = [
    "Increase qualified leads by 300%+",
    "Reduce cost per acquisition by 40%",
    "Improve conversion rates by 150%",
    "24/7 campaign monitoring and optimization",
    "Detailed monthly performance reports",
    "Dedicated account manager",
    "Custom dashboard access",
    "Competitor analysis and insights"
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
            backgroundImage: `url('https://images.unsplash.com/photo-1535446937720-e4cad0145efe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        ></div>
        
        {/* Lighter Gradient Overlay with Blur */}
        <div className={`absolute inset-0 backdrop-blur-sm ${isDarkMode ? 'bg-gray-900/60' : 'bg-gradient-to-br from-purple-500/40 via-purple-400/30 to-indigo-500/35'}`}></div>
        
        {/* Enhanced Soft Color Overlay with Gradient and Blur */}
        <div className={`absolute inset-0 backdrop-blur-[2px] ${isDarkMode ? 'bg-gray-900/15' : 'bg-gradient-to-tr from-purple-200/25 via-purple-100/15 to-indigo-200/20'}`}></div>

        {/* Back to Home Button - Top Left Corner */}
        <div className="absolute top-6 left-6 z-20">
          <Link 
            to="/" 
            className={`flex items-center ${isDarkMode ? 'text-gray-100' : 'text-white'} hover:text-white transition-colors group bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-white/20`}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className={`font-medium ${isDarkMode ? 'text-gray-100' : 'text-white'}`}>Back to Home</span>
          </Link>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Icon */}
            <motion.div 
              className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-gray-800 mb-8 mx-auto shadow-2xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <BarChart3 className="w-12 h-12" />
            </motion.div>

            {/* Title */}
            <motion.h1 
              className={`text-6xl md:text-7xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-white'} mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Performance <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Marketing</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-white/80'} mb-12 max-w-3xl mx-auto leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Data-driven campaigns that deliver measurable ROI and sustainable growth for your business
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button className={`bg-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}>
                Get Started Today
              </button>
              <button className={`border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm`}>
                Learn More
              </button>
            </motion.div>
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
              <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-6`}>
                Drive Growth with 
                <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> Data-Backed Strategies</span>
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                Our performance marketing approach combines cutting-edge analytics, strategic targeting, and continuous optimization to deliver exceptional results. We don't just run campaigns – we engineer growth engines that scale with your business.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
                From Google Ads and Facebook campaigns to SEO and conversion optimization, our team leverages the latest tools and techniques to maximize your marketing investment and drive sustainable business growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className={`text-center p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-purple-600'} mb-2`}>300%+</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Average Lead Increase</div>
                </div>
                <div className={`text-center p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-purple-600'} mb-2`}>40%</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Cost Reduction</div>
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
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-white">What You Get</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-purple-200 flex-shrink-0" />
                      <span className="text-white">{benefit}</span>
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
            <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-6`}>
              Our Performance Marketing 
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> Services</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Comprehensive solutions designed to maximize your marketing ROI and drive sustainable business growth.
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
                className={`group p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200`}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 group-hover:text-purple-600 transition-colors`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800'} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-100'} mb-6`}>
              Ready to Scale Your Business?
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-300'} mb-8 max-w-2xl mx-auto`}>
              Let's create a performance marketing strategy that drives real results for your business. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contact"
                className={`bg-purple-600 ${isDarkMode ? 'text-gray-100' : 'text-gray-100'} font-semibold px-8 py-4 rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                Get Started Today
              </Link>
              <Link 
                to="/"
                className={`bg-purple-500/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl hover:bg-purple-500/40 transition-all duration-300 border border-white/30`}
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`bg-gray-900 ${isDarkMode ? 'text-gray-100' : 'text-white'} py-16`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <img src={logo} alt="DevNix Digital" className="w-8 h-8" />
                <span className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-100'}`}>DevNix Digital</span>
              </div>
              <p className={`text-gray-400 ${isDarkMode ? 'text-gray-300' : 'text-gray-400'} mb-6 max-w-md`}>
                Transforming businesses through innovative digital marketing strategies and creative solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <Users className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-yellow-400'} mb-6`}>Services</h4>
              <ul className="space-y-3">
                <li><Link to="/services/performance-marketing" className={`${isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-yellow-400'} transition-colors`}>Performance Marketing</Link></li>
                <li><Link to="/services/creative-design" className={`${isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-yellow-400'} transition-colors`}>Creative Design</Link></li>
                <li><Link to="/services/ui-ux-design" className={`${isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-yellow-400'} transition-colors`}>UI/UX Design</Link></li>
                <li><Link to="/services/social-media" className={`${isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-yellow-400'} transition-colors`}>Social Media</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-yellow-400'} mb-6`}>Contact</h4>
              <ul className="space-y-3">
                <li className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-300'}`}>devnixdigital@gmail.com</li>
                <li><Link to="/#contact" className={`${isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-yellow-400'} transition-colors`}>Get in Touch</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DevNix Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default PerformanceMarketingPage;
