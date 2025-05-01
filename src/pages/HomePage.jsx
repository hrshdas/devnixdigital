import React, { useEffect, useState } from "react";
import { BarChart3, Paintbrush, LayoutDashboard, Users2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '../assets/logo.png';

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [showForm, setShowForm] = useState(false);

  return (
    <>
    <div>
    <div className="page-container min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-r from-yellow-100 via-white to-purple-100">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('/path-to-pattern.svg')] bg-no-repeat bg-center opacity-10 pointer-events-none" />
    <div className="logo-container">
  <img src={logo} alt="DevNix Logo" className="logo" />
  
</div>
      {/* Hero Section */}
      <section className="hero-section" data-aos="fade-up">
        
      <h1 className="hero-heading text-5xl md:text-6xl font-extrabold text-center mb-6" data-aos="zoom-in">
  Driving <span className="text-gradient">Results</span> Through Digital Innovation
</h1>
        <p className="hero-subtext text-lg text-gray-600 text-center max-w-2xl mb-8" data-aos="fade-up" data-aos-delay="200">
          A results-driven agency helping modern brands grow with innovative strategy, branding, and marketing solutions tailored for today's digital landscape.
        </p>
        <div className="relative z-50">
        <button
  onClick={() => setShowForm(!showForm)}
  className="hero-button bg-gradient-to-r from-purple-500 to-yellow-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-500"
>
  Let's Collaborate
</button>


{showForm && (
  <div 
    className="form-container mt-10 flex flex-col items-center px-4 sm:px-6 animate-slideDown" // 🔧 Add responsive horizontal padding
  >
    <h3 className="form-heading text-3xl font-extrabold mb-6 text-gray-800 text-center">Start a Project</h3> {/* 🔧 Center title on mobile */}

    <form 
      action="https://formspree.io/f/mvgazvle" 
      method="POST"
      className="form-fields flex flex-col items-center gap-6 w-full max-w-lg bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl" // 🔧 Use sm:p-8 to scale up padding on larger screens
    >
      <input 
        type="text" 
        name="name"
        placeholder="Your Name" 
        required
        className="form-input w-full border-2 border-gray-300 rounded-xl py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all duration-300"
      />
      <input 
        type="tel" 
        name="phone"
        placeholder="Phone Number" 
        maxLength="10" 
        pattern="\d{10}" 
        required
        className="form-input w-full border-2 border-gray-300 rounded-xl py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all duration-300"
      />
      <input
        type="email"
        name="email"
        placeholder="email@example.com"
        required
        className="form-input w-full border-2 border-gray-300 rounded-xl py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all duration-300"
      />
      <button 
        type="submit" 
        className="form-submit w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Send Inquiry
      </button>
    </form>
  </div>
)}
</div>



      </section>
      {/* Background Blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 opacity-30 blur-3xl rounded-full z-0 animate-pulse"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-yellow-300 opacity-30 blur-3xl rounded-full z-0 animate-pulse"></div>
        
      </div>

      {/* Services Section */}
<section className="relative">
  {/* Background Gradient */}
  <div className="absolute inset-0 h-[400px] bg-gradient-to-r from-yellow-100 via-yellow-50 to-purple-100"></div>

  {/* White Fade */}
  <div className="absolute inset-0 h-[400px] bg-gradient-to-b from-transparent to-white"></div>
<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-white" style={{top: '300px'}}></div>


{/* Content */}
<div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
      Our Services
    </h2>

    {/* Services Grid */}
    <div className="services-grid">
      {[
        {
          title: "Performance Marketing",
          desc: "Data-backed campaigns that drive real growth.",
          icon: <BarChart3 className="icon-purple" />,
        },
        {
          title: "Creative Design",
          desc: "Compelling visuals to express your brand's story.",
          icon: <Paintbrush className="icon-yellow" />,
        },
        {
          title: "UI/UX & Web Design",
          desc: "Smooth, intuitive digital experiences your users love.",
          icon: <LayoutDashboard className="icon-pink" />,
        },
        {
          title: "Social Media Management",
          desc: "Engaging and strategic content for all platforms.",
          icon: <Users2 className="icon-indigo" />,
        },
      ].map((service, i) => (
        <div
          key={i}
          className="service-card"
          data-aos="fade-up"
          data-aos-delay={i * 300}
        >
          <div className="service-icon">{service.icon}</div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-desc">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Client Showcases Section */}
<section className="clients-section py-20">
  <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
    Our Showcases
  </h2>

  <div className="max-w-7xl mx-auto space-y-20">
    {/* Video Section */}
    <div data-aos="fade-up">
      <h3 className="text-2xl font-semibold mb-8 text-center">Videos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {["client-a", "client-b"].map((client) =>
          [1, 2].map((n) => (
            <div key={`${client}-video-${n}`} className="video-card rounded-2xl overflow-hidden shadow-md">
              <video
                controls
                className="w-full h-80 object-cover rounded-2xl"
              >
                <source
                  src={`/videos/${client}-video${n}.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          ))
        )}
      </div>
    </div>

    {/* Image Section */}
    <div data-aos="fade-up">
      <h3 className="text-2xl font-semibold mb-8 text-center">Photos</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {["client-a", "client-b"].map((client) =>
          [1, 2, 3, 4].map((n) => (
            <img
              key={`${client}-image-${n}`}
              src={`/images/${client}-image${n}.jpg`}
              alt={`${client} work ${n}`}
              className="rounded-xl shadow-sm hover:scale-105 transition-transform duration-300 object-cover w-full h-40"
            />
          ))
        )}
      </div>
    </div>
  </div>
</section>


    </div>
    </>
  );
}
