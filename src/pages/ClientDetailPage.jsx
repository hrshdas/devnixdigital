import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, ExternalLink, Calendar, MapPin, Star, Sun, Moon, X, Menu } from 'lucide-react';
import logo from '../assets/logo.png';

const ClientDetailPage = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('gallery');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    document.title = "Client Details - DevNix Digital";
    window.scrollTo(0, 0);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const shouldUseDark = savedTheme === 'dark';
    
    setIsDarkMode(shouldUseDark);
    
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Client data based on ID
  const clientData = {
    'momo-magic-cafe': {
      name: 'Momo Magic Café',
      category: 'Restaurant Branding',
      description: 'A vibrant Nepalese restaurant that needed a complete digital transformation to match their authentic cuisine with modern dining experience.',
      location: 'Downtown District',
      year: '2023',
      services: ['Brand Identity', 'Digital Marketing', 'Social Media Management', 'Photography'],
      challenge: 'Momo Magic Café wanted to establish a strong digital presence while maintaining their authentic Nepalese heritage and attracting modern food enthusiasts.',
      solution: 'We created a comprehensive brand identity that blends traditional Nepalese elements with contemporary design, developed their digital marketing strategy, and created engaging social media content.',
      results: ['300% increase in social media engagement', '150% boost in online orders', '200% growth in brand recognition'],
      images: [
        '/images/momo-magic-signboard.jpg',
        '/images/momo-magic-interior.jpg',
        '/images/momo-magic-food1.jpg',
        '/images/momo-magic-food2.jpg',
        '/images/momo-magic-menu.jpg',
        '/images/momo-magic-social.jpg'
      ],
      videos: [
        { title: 'Brand Story Video', thumbnail: '/images/momo-magic-video1.jpg', duration: '2:30', videoUrl: '/videos/momo-magic-video1.mp4' },
        { title: 'Food Preparation Process', thumbnail: '/images/momo-magic-video2.jpg', duration: '1:45', videoUrl: '/videos/momo-magic-video2.mp4' }
      ],
      gradient: 'from-purple-500 to-pink-500',
      primaryColor: 'purple'
    },
    'pizza-palace': {
      name: 'Pizza Palace',
      category: 'Food Photography',
      description: 'An artisan pizza restaurant that needed stunning food photography and visual content to showcase their premium ingredients and craftsmanship.',
      location: 'Food District',
      year: '2023',
      services: ['Food Photography', 'Website Design', 'Online Ordering System', 'Menu Design'],
      challenge: 'Pizza Palace needed high-quality visual content that would make their artisan pizzas stand out in a competitive market.',
      solution: 'We conducted professional food photography sessions, designed an appetizing website, and created an intuitive online ordering system.',
      results: ['400% increase in online orders', '250% boost in social media followers', '180% growth in website traffic'],
      images: [
        '/images/pizza-showcase.jpg',
        '/images/pizza-making.jpg',
        '/images/pizza-oven.jpg',
        '/images/pizza-ingredients.jpg',
        '/images/pizza-restaurant.jpg',
        '/images/pizza-team.jpg'
      ],
      videos: [
        { title: 'Pizza Making Process', thumbnail: '/images/pizza-video1.jpg', duration: '3:15', videoUrl: '/videos/pizza-video1.mp4' },
        { title: 'Restaurant Tour', thumbnail: '/images/pizza-video2.jpg', duration: '2:00', videoUrl: '/videos/pizza-video2.mp4' }
      ],
      gradient: 'from-pink-500 to-yellow-500',
      primaryColor: 'pink'
    },
    'pasta-corner': {
      name: 'Pasta Corner',
      category: 'Menu Design',
      description: 'An authentic Italian pasta restaurant that needed a complete menu redesign and visual identity to reflect their traditional recipes.',
      location: 'Little Italy',
      year: '2023',
      services: ['Menu Design', 'Photography', 'Social Content', 'Brand Guidelines'],
      challenge: 'Pasta Corner wanted to modernize their menu design while preserving the authentic Italian feel of their restaurant.',
      solution: 'We created an elegant menu design with beautiful food photography and developed comprehensive brand guidelines.',
      results: ['220% increase in average order value', '180% boost in customer satisfaction', '160% growth in repeat customers'],
      images: [
        '/images/pasta-showcase.jpg',
        '/images/pasta-menu.jpg',
        '/images/pasta-cooking.jpg',
        '/images/pasta-ingredients.jpg',
        '/images/pasta-plating.jpg',
        '/images/pasta-restaurant.jpg'
      ],
      videos: [
        { title: 'Pasta Making Tradition', thumbnail: '/images/pasta-video1.jpg', duration: '2:45', videoUrl: '/videos/pasta-video1.mp4' },
        { title: 'Chef Interview', thumbnail: '/images/pasta-video2.jpg', duration: '3:30', videoUrl: '/videos/pasta-video2.mp4' }
      ],
      gradient: 'from-yellow-500 to-purple-500',
      primaryColor: 'yellow'
    },
    'neon-bistro': {
      name: 'Neon Bistro',
      category: '3D Installation',
      description: 'A modern bistro that wanted to create an immersive dining experience with stunning 3D light installations and contemporary design.',
      location: 'Arts District',
      year: '2023',
      services: ['Interior Design', '3D Visualization', 'Branding', 'Digital Marketing'],
      challenge: 'Neon Bistro wanted to create a unique dining atmosphere that would attract modern diners and create Instagram-worthy moments.',
      solution: 'We designed and implemented stunning 3D light installations, created a cohesive brand identity, and developed a digital marketing strategy.',
      results: ['500% increase in social media mentions', '300% boost in reservations', '250% growth in brand awareness'],
      images: [
        '/images/3d-light-installation.jpg',
        '/images/neon-bistro-interior.jpg',
        '/images/neon-bistro-bar.jpg',
        '/images/neon-bistro-dining.jpg',
        '/images/neon-bistro-lights.jpg',
        '/images/neon-bistro-exterior.jpg'
      ],
      videos: [
        { title: '3D Light Installation Showcase', thumbnail: '/images/neon-video1.jpg', duration: '4:00', videoUrl: '/videos/neon-video1.mp4' },
        { title: 'Restaurant Ambiance', thumbnail: '/images/neon-video2.jpg', duration: '2:15', videoUrl: '/videos/neon-video2.mp4' }
      ],
      gradient: 'from-purple-500 to-yellow-500',
      primaryColor: 'purple'
    },
    'tech-repair-pro': {
      name: 'Tech Repair Pro',
      category: 'Electronics Repair',
      description: 'A professional electronics repair service that needed a modern digital presence and booking system to streamline their operations.',
      location: 'Tech Hub',
      year: '2023',
      services: ['Website Design', 'Booking System', 'Digital Marketing', 'SEO'],
      challenge: 'Tech Repair Pro needed to modernize their business operations and create an efficient online booking system for their customers.',
      solution: 'We developed a comprehensive website with integrated booking system, implemented SEO strategies, and created digital marketing campaigns.',
      results: ['350% increase in online bookings', '280% boost in website traffic', '200% growth in customer base'],
      images: [
        '/images/repair-tools.jpg',
        '/images/tech-repair-workshop.jpg',
        '/images/tech-repair-team.jpg',
        '/images/tech-repair-equipment.jpg',
        '/images/tech-repair-process.jpg',
        '/images/tech-repair-results.jpg'
      ],
      videos: [
        { title: 'Repair Process Overview', thumbnail: '/images/tech-video1.jpg', duration: '3:00', videoUrl: '/videos/tech-video1.mp4' },
        { title: 'Customer Testimonials', thumbnail: '/images/tech-video2.jpg', duration: '2:30', videoUrl: '/videos/tech-video2.mp4' }
      ],
      gradient: 'from-blue-500 to-purple-500',
      primaryColor: 'blue'
    },
    'circuit-masters': {
      name: 'Circuit Masters',
      category: 'Component Repair',
      description: 'Specialized motherboard and component repair experts who needed an e-commerce platform and inventory management system.',
      location: 'Electronics District',
      year: '2023',
      services: ['E-commerce Platform', 'Inventory System', 'SEO', 'Technical Documentation'],
      challenge: 'Circuit Masters needed a sophisticated e-commerce platform to sell components and manage their complex inventory.',
      solution: 'We built a custom e-commerce platform with advanced inventory management, implemented SEO strategies, and created technical documentation.',
      results: ['400% increase in online sales', '300% improvement in inventory efficiency', '250% growth in customer satisfaction'],
      images: [
        '/images/motherboard-tools.jpg',
        '/images/circuit-masters-lab.jpg',
        '/images/circuit-masters-components.jpg',
        '/images/circuit-masters-testing.jpg',
        '/images/circuit-masters-inventory.jpg',
        '/images/circuit-masters-team.jpg'
      ],
      videos: [
        { title: 'Component Testing Process', thumbnail: '/images/circuit-video1.jpg', duration: '3:45', videoUrl: '/videos/circuit-video1.mp4' },
        { title: 'Quality Assurance', thumbnail: '/images/circuit-video2.jpg', duration: '2:20', videoUrl: '/videos/circuit-video2.mp4' }
      ],
      gradient: 'from-purple-500 to-pink-500',
      primaryColor: 'purple'
    },
    'pc-solutions': {
      name: 'PC Solutions Hub',
      category: 'PC Services',
      description: 'Complete PC repair and upgrade services that needed a customer management system and service portal.',
      location: 'Computer Plaza',
      year: '2023',
      services: ['Service Portal', 'Customer Management', 'Branding', 'Digital Marketing'],
      challenge: 'PC Solutions Hub needed to streamline their service operations and improve customer communication.',
      solution: 'We developed a comprehensive service portal with customer management features, created new branding, and implemented digital marketing strategies.',
      results: ['320% increase in service bookings', '260% improvement in customer satisfaction', '190% growth in repeat business'],
      images: [
        '/images/pc-back-panel.jpg',
        '/images/pc-solutions-workshop.jpg',
        '/images/pc-solutions-upgrades.jpg',
        '/images/pc-solutions-testing.jpg',
        '/images/pc-solutions-customer.jpg',
        '/images/pc-solutions-team.jpg'
      ],
      videos: [
        { title: 'PC Upgrade Process', thumbnail: '/images/pc-video1.jpg', duration: '4:15', videoUrl: '/videos/pc-video1.mp4' },
        { title: 'Customer Service Excellence', thumbnail: '/images/pc-video2.jpg', duration: '2:45', videoUrl: '/videos/pc-video2.mp4' }
      ],
      gradient: 'from-pink-500 to-yellow-500',
      primaryColor: 'pink'
    },
    'micro-tech': {
      name: 'Micro Tech Labs',
      category: 'Circuit Diagnostics',
      description: 'Precision circuit board repair and diagnostics specialists who needed technical documentation and process automation.',
      location: 'Innovation Center',
      year: '2023',
      services: ['Technical Documentation', 'Process Automation', 'Digital Presence', 'Training Materials'],
      challenge: 'Micro Tech Labs needed to document their complex diagnostic processes and automate their workflow.',
      solution: 'We created comprehensive technical documentation, implemented process automation systems, and established their digital presence.',
      results: ['450% improvement in diagnostic efficiency', '300% reduction in processing time', '280% increase in accuracy'],
      images: [
        '/images/circuit-boards.jpg',
        '/images/micro-tech-lab.jpg',
        '/images/micro-tech-microscope.jpg',
        '/images/micro-tech-diagnostics.jpg',
        '/images/micro-tech-repair.jpg',
        '/images/micro-tech-quality.jpg'
      ],
      videos: [
        { title: 'Precision Diagnostics', thumbnail: '/images/micro-video1.jpg', duration: '3:30', videoUrl: '/videos/micro-video1.mp4' },
        { title: 'Advanced Repair Techniques', thumbnail: '/images/micro-video2.jpg', duration: '4:00', videoUrl: '/videos/micro-video2.mp4' }
      ],
      gradient: 'from-yellow-500 to-blue-500',
      primaryColor: 'yellow'
    },
    'food-restaurant-portfolio': {
      name: 'MOMO MAGIC CAFE',
      category: 'Complete Collection',
      description: 'A comprehensive showcase of our work with restaurants, cafes, and food businesses. From brand identity to digital marketing, we help food businesses create memorable experiences.',
      location: 'Multiple Locations',
      year: '2023',
      services: ['Brand Identity', 'Food Photography', 'Menu Design', 'Digital Marketing', 'Social Media Management', '3D Installations'],
      challenge: 'Food businesses needed to establish strong digital presences while maintaining their authentic culinary heritage and attracting modern food enthusiasts in competitive markets.',
      solution: 'We created comprehensive brand identities that blend traditional elements with contemporary design, developed digital marketing strategies, created engaging social media content, and provided stunning food photography and menu designs.',
      results: ['300% average increase in social media engagement', '200% boost in online orders across clients', '250% growth in brand recognition'],
      images: [
        '/images/cafe1.jpg',
        '/images/cafe2.jpg',
        '/images/cafe3.jpg',
        '/images/cafe4.jpg',
        '/images/cafe5.jpg',
        '/images/cafe6.jpg',
      ],
      videos: [
        { title: 'Cafe Ambiance Showcase', thumbnail: '/images/cafe1.jpg', duration: '2:15', videoUrl: '/videos/cafe1.mp4' },
        { title: 'Food Preparation Process', thumbnail: '/images/cafe2.jpg', duration: '3:30', videoUrl: '/videos/cafe2.mp4' },
        { title: 'Customer Experience Journey', thumbnail: '/images/cafe3.jpg', duration: '2:45', videoUrl: '/videos/cafe3.mp4' }
      ],
      gradient: 'from-purple-500 to-pink-500',
      primaryColor: 'purple'
    },
    'tech-electronics-portfolio': {
      name: 'MAXIPLE TECHNOLOGIES',
      category: 'Complete Collection',
      description: 'Our comprehensive work with electronics repair services, tech companies, and component specialists. We help technology businesses modernize their operations and reach more customers.',
      location: 'Laxmi Nagar, New Delhi',
      year: '2025',
      services: ['Website Design', 'E-commerce Platforms', 'Booking Systems', 'Digital Marketing', 'SEO', 'Technical Documentation'],
      challenge: 'Technology and electronics businesses needed to modernize their digital presence, streamline operations, and create efficient systems for customer management and service delivery.',
      solution: 'We developed comprehensive websites with integrated booking systems, built custom e-commerce platforms with advanced inventory management, implemented SEO strategies, and created technical documentation and process automation systems.',
      results: ['375% average increase in online bookings', '290% improvement in operational efficiency', '240% growth in customer satisfaction'],
      images: [
        '/images/repair-tools.jpg',
        '/images/motherboard-tools.jpg',
        '/images/pc-back-panel.jpg',
        '/images/max1.jpg',
        '/images/max2.jpg',
        '/images/max3.jpg',
      ],
      videos: [
        { title: 'Tech Repair Process Overview', thumbnail: '/images/max1.jpg', duration: '0:18', videoUrl: '/videos/max1.mp4' },
        { title: 'Repair Demo', thumbnail: '/images/max2.jpg', duration: '0:29', videoUrl: '/videos/max2.mp4' },
        { title: 'Fun Reel', thumbnail: '/images/max1.jpg', duration: '0:23', videoUrl: '/videos/max3.mp4' },
        { title: 'Services post', thumbnail: '/images/max2.jpg', duration: '0:10', videoUrl: '/videos/max4.mp4' },
      ],
      gradient: 'from-blue-500 to-purple-500',
      primaryColor: 'blue'
    },
  };

  const client = clientData[clientId];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const handleImageClick = (image, index) => {
    setSelectedImage({ src: image, alt: `${client.name} - Image ${index + 1}`, index });
    setIsImageModalOpen(true);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The client you're looking for doesn't exist.</p>
          <Link to="/" className="bg-gradient-to-r from-purple-600 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
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
                    onClick={() => navigate('/', { state: { scrollTo: item.id } })}
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
                    navigate('/', { state: { scrollTo: item.id } });
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${client.gradient} text-white rounded-full text-sm font-semibold mb-6`}>
                {client.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {client.name}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {client.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{client.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{client.year}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {client.services.map((service, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium dark:bg-purple-900/30 dark:text-purple-300">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                {clientId === 'tech-electronics-portfolio' ? (
                  <div className="w-full h-full bg-white dark:bg-gray-800 flex items-center justify-center p-4">
                    <img
                      src="/images/maxiple.png"
                      alt="Maxiple Technologies"
                      className="w-full h-auto object-contain scale-125"
                    />
                  </div>
                ) : clientId === 'food-restaurant-portfolio' ? (
                  <div className="w-full h-full bg-white dark:bg-gray-800 flex items-center justify-center p-4">
                    <img
                      src="/images/momomagiccafe.png"
                      alt="Momo Magic Cafe"
                      className="w-full h-auto object-contain scale-125"
                    />
                  </div>
                ) : (
                  <img
                    src={client.images[0]}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r ${client.gradient} rounded-3xl opacity-20`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg">
              {[
                { id: 'gallery', label: 'Gallery', icon: '🖼️' },
                { id: 'videos', label: 'Videos', icon: '🎥' },
                { id: 'story', label: 'Project Story', icon: '📖' },
                { id: 'reviews', label: 'Our Project Review', icon: '⭐' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${client.gradient} text-white shadow-lg`
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'gallery' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {client.images.map((image, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105" onClick={() => handleImageClick(image, index)}>
                    <div className="aspect-square">
                      <img
                        src={image}
                        alt={`${client.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${client.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center`}>
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'videos' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {client.videos.map((video, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer" onClick={() => handleVideoClick(video)}>
                    <div className="aspect-video">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <h4 className="font-bold text-gray-900 mb-1">{video.title}</h4>
                        <p className="text-sm text-gray-600">{video.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'story' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl">
                  <div className="space-y-12">
                    {/* Challenge */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Challenge</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {client.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Solution</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {client.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Results Achieved</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {client.results.map((result, index) => (
                          <div key={index} className={`bg-gradient-to-r ${client.gradient} p-6 rounded-2xl text-white text-center`}>
                            <Star className="w-8 h-8 mx-auto mb-3" />
                            <p className="font-semibold text-lg">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="space-y-8">
                  {/* Reviews Header */}
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Client Review</h3>
                    <div className="flex items-center justify-center space-x-1">
                      {clientId === 'food-restaurant-portfolio' ? (
                        // 5 stars for cafe
                        <>
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-xl font-semibold text-gray-700 dark:text-gray-300 ml-2">5.0</span>
                        </>
                      ) : (
                        // 4.5 stars for tech
                        <>
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                          ))}
                          <div className="relative">
                            <Star className="w-6 h-6 text-gray-300 fill-current" />
                            <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                              <Star className="w-6 h-6 text-yellow-400 fill-current" />
                            </div>
                          </div>
                          <span className="text-xl font-semibold text-gray-700 dark:text-gray-300 ml-2">4.5</span>
                        </>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">What our client says about working with us</p>
                  </div>

                  {/* Single Client Review */}
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${client.gradient} rounded-full flex items-center justify-center`}>
                          <span className="text-white text-3xl font-bold">"</span>
                        </div>
                      </div>
                      
                      {/* Review Text */}
                      <blockquote className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-8 italic">
                        {clientId === 'food-restaurant-portfolio' ? 
                          "We loved the photoshoot done by DevNix. The pictures came out vibrant and perfectly captured the essence of our café. The team was very humble, professional, creative, and easy to work with." :
                          "The services from DevNix Digital were really helpful in improving our brand's online presence. The team is professional, supportive, and delivers exactly what they promise. We are satisfied with the results and happy to work with them."
                        }
                      </blockquote>
                      
                      {/* Client Info */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                          {clientId === 'tech-electronics-portfolio' ? (
                            <img
                              src="/images/maxiplecentreicon.png"
                              alt="Maxiple Technologies"
                              className="w-full h-full object-cover"
                            />
                          ) : clientId === 'food-restaurant-portfolio' ? (
                            <img
                              src="/images/momomagiccafe.png"
                              alt="Momo Magic Cafe"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                              {client.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          Owner
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">{client.name}</p>
                        <div className="flex items-center justify-center space-x-1">
                          {clientId === 'food-restaurant-portfolio' ? (
                            // 5 stars for cafe
                            <>
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                              <span className="text-xl font-semibold text-gray-700 dark:text-gray-300 ml-2">5.0</span>
                            </>
                          ) : (
                            // 4.5 stars for tech
                            <>
                              {[...Array(4)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                              <div className="relative">
                                <Star className="w-4 h-4 text-gray-300 fill-current" />
                                <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                </div>
                              </div>
                              <span className="text-xl font-semibold text-gray-700 dark:text-gray-300 ml-2">4.5</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Highlights */}
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl mt-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Project Highlights</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { metric: "Brand Growth", value: "250%", description: "Increased Recognition" },
                        { metric: "Engagement", value: "300%", description: "Social Media Boost" },
                        { metric: "ROI", value: "290%", description: "Return on Investment" }
                      ].map((item, index) => (
                        <div key={index} className="text-center">
                          <div className={`w-16 h-16 bg-gradient-to-r ${client.gradient} rounded-full flex items-center justify-center mx-auto mb-3`}>
                            <span className="text-white font-bold text-sm">{item.value}</span>
                          </div>
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-1">{item.metric}</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setIsVideoModalOpen(false)}>
          <div className="relative bg-gray-900 rounded-3xl shadow-2xl w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition-colors duration-200 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-300 text-lg">{selectedVideo.duration}</p>
              </div>
              
              <div className="relative bg-black rounded-2xl overflow-hidden max-w-4xl max-h-[80vh] mx-auto">
                <video
                  key={selectedVideo.videoUrl}
                  controls
                  preload="auto"
                  autoPlay
                  muted
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: '70vh' }}
                  onLoadStart={() => {
                    console.log('Video loading started:', selectedVideo.videoUrl);
                    console.log('Attempting to load from:', `${window.location.origin}${selectedVideo.videoUrl}`);
                  }}
                  onCanPlay={() => {
                    console.log('Video can play:', selectedVideo.videoUrl);
                  }}
                  onLoadedData={() => {
                    console.log('Video data loaded:', selectedVideo.videoUrl);
                  }}
                  onError={(e) => {
                    console.error('Video error:', e.target.error);
                    console.log('Failed video URL:', selectedVideo.videoUrl);
                    console.log('Error code:', e.target.error?.code);
                    console.log('Error message:', e.target.error?.message);
                  }}
                  onPlay={() => console.log('Video started playing')}
                  onLoadedMetadata={(e) => {
                    console.log('Video metadata loaded - Duration:', e.target.duration);
                  }}
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  <p className="text-white p-4 text-center">
                    Your browser does not support the video tag or the video failed to load.
                    <br />
                    <a href={selectedVideo.videoUrl} className="text-blue-400 underline mt-2 inline-block" target="_blank" rel="noopener noreferrer">
                      Try opening video directly: {selectedVideo.videoUrl}
                    </a>
                  </p>
                </video>
              </div>
              
              {/* Debug info */}
              <div className="mt-4 text-xs text-gray-400 text-center">
                Video URL: {selectedVideo.videoUrl}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setIsImageModalOpen(false)}>
          <div className="relative bg-gray-900 rounded-3xl shadow-2xl w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 z-20 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition-colors duration-200 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.alt}</h3>
              </div>
              
              <div className="relative bg-black rounded-2xl overflow-hidden max-w-4xl max-h-[80vh] mx-auto">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: '70vh' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-100 to-yellow-100 dark:from-purple-900/20 dark:to-yellow-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how we can help transform your business like we did for {client.name}
          </p>
          <button
            onClick={() => navigate('/')}
            className={`bg-gradient-to-r ${client.gradient} text-white font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300`}
          >
            Start Your Project
          </button>
        </div>
      </section>

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
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/devnixdigital" className="group p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg dark:bg-gray-600">
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

export default ClientDetailPage;
