import React, { useState } from "react";

const plans = [
  {
    title: "Starter Plan",
    features: [
      "1 social media handling",
      "Shoots (Videos + Photos)",
      "7 to 8 Posts/Month",
      "1 Paid Ad Setup (Ad Budget Excluded)",
      "SEO",
    ],
  },
  {
    title: "Growth Plan",
    ribbon: "Best Value",
    features: [
      "2 social media handling",
      "Shoots (Videos + Photos)",
      "15 to 16 Posts/Month",
      "1 Storytelling Reel (Creative, Narrative-Based Content)",
      "DM Management (Replying to Queries & Engagement in DMs)",
      "2 Paid Ad Campaigns (Ad Budget Excluded)",
      "Email and WhatsApp Marketing (1 Campaigns/Month)",
      "SEO",
    ],
  },
  {
    title: "Pro Plan",
    features: [
      "3 social media handling",
      "Shoots (Videos + Photos)",
      "25 to 30 Posts/Month",
      "2 to 3 Storytelling Reels (Creative, Narrative-Based Content)",
      "DM Management (Replying to Queries, Lead Nurturing & Engagement in DMs)",
      "2–3 Event Visits for Shooting Content",
      "3–4 Paid Ad Campaigns (Ad Budget Excluded)",
      "Email and WhatsApp Marketing (1 Campaigns/Month)",
      "Dedicated Account Manager",
      "We will provide influencer if available at that time (Paid or unpaid)",
      "SEO",
    ],
  },
];

const PlansSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showForm, setShowForm] = useState(false);

  const openForm = (planTitle) => {
    setSelectedPlan(planTitle);
    setShowForm(true);
  };

  const closeForm = () => {
    setSelectedPlan("");
    setShowForm(false);
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800" id="plans">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:bg-gray-600 dark:opacity-10"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:bg-gray-500 dark:opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block mb-6">
            <span className="text-lg font-bold text-purple-600 uppercase tracking-widest dark:text-purple-400">Choose Your Plan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight dark:text-white">
            Our <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed dark:text-gray-300">
            Choose the perfect plan that fits your business needs and growth goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const animation =
              index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left";

            return (
              <div
                key={index}
                data-aos={animation}
                data-aos-duration="1000"
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-white/30 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-700 cursor-pointer hover:scale-[1.02] hover:-translate-y-2 overflow-hidden flex flex-col justify-between dark:bg-gray-800/30 dark:border-gray-700/20"
              >
                {/* Glass background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-white/10 rounded-3xl dark:bg-gradient-to-br dark:from-gray-800/15 dark:via-gray-700/5 dark:to-gray-800/10"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/5 via-transparent to-yellow-500/5 rounded-3xl dark:bg-gradient-to-tl dark:from-purple-400/5 dark:via-transparent dark:to-yellow-400/5"></div>
                
                {/* Enhanced Glass Border */}
                <div className="absolute inset-[1px] bg-white/5 rounded-3xl backdrop-blur-xl dark:bg-gray-700/5"></div>
                
                {/* Glass Reflection Effect */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent opacity-60 rounded-t-3xl dark:bg-gradient-to-b dark:from-gray-600/25 dark:to-transparent"></div>
                
                {/* Hover Glass Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none dark:bg-gradient-to-br dark:from-gray-600/30 dark:via-gray-700/10 dark:to-gray-800/5"></div>

                <div className="relative z-10">
                  {plan.ribbon && (
                    <div className="absolute -top-8 -left-8 bg-gradient-to-r from-purple-600 to-yellow-500 text-white text-sm font-bold px-6 py-2 rounded-br-2xl rounded-tl-3xl shadow-lg">
                      {plan.ribbon}
                    </div>
                  )}

                  <h3 className="text-2xl font-black text-gray-900 mb-6 group-hover:text-purple-700 transition-colors duration-300 dark:text-white dark:group-hover:text-purple-400">
                    {plan.title}
                  </h3>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0 dark:bg-white"></div>
                        <span className="text-black font-medium leading-relaxed dark:text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openForm(plan.title)}
                  className="group relative w-full bg-white/25 backdrop-blur-xl border border-white/40 text-gray-800 hover:text-white font-bold py-4 px-6 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all duration-300 overflow-hidden dark:bg-gray-700/25 dark:border-gray-600/40 dark:text-gray-200"
                >
                  {/* Enhanced Glass button background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-white/30 backdrop-blur-xl rounded-2xl dark:bg-gradient-to-r dark:from-gray-800/30 dark:via-gray-700/20 dark:to-gray-800/30"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-2xl"></div>
                  
                  {/* Glass reflection */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-60 rounded-t-2xl dark:bg-gradient-to-b dark:from-gray-600/40 dark:to-transparent"></div>
                  
                  <span className="relative z-10">Get Started</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 max-w-md w-full shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative overflow-hidden dark:bg-gray-800/10 dark:border-gray-700/20">
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-white/10 rounded-3xl dark:bg-gradient-to-br dark:from-gray-800/20 dark:via-gray-700/5 dark:to-gray-800/10"></div>
            
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-2xl font-bold transition-colors hover:rotate-90 duration-300 z-20 dark:text-gray-300 dark:hover:text-white"
            >
              ×
            </button>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">Get Started with {selectedPlan}</h3>
                <p className="text-gray-700 dark:text-gray-300">Let's bring your vision to life</p>
              </div>
              
              <form
                action="https://formspree.io/f/mvgazvle"
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="Selected Plan"
                  value={selectedPlan}
                />
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full border-2 border-white/30 bg-white/20 backdrop-blur-sm rounded-xl py-4 px-6 text-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 peer dark:border-gray-600/30 dark:bg-gray-700/20 dark:text-gray-200 dark:placeholder-gray-400"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-yellow-400/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                    className="w-full border-2 border-white/30 bg-white/20 backdrop-blur-sm rounded-xl py-4 px-6 text-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 peer dark:border-gray-600/30 dark:bg-gray-700/20 dark:text-gray-200 dark:placeholder-gray-400"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-yellow-400/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full border-2 border-white/30 bg-white/20 backdrop-blur-sm rounded-xl py-4 px-6 text-lg text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 peer dark:border-gray-600/30 dark:bg-gray-700/20 dark:text-gray-200 dark:placeholder-gray-400"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-yellow-400/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Submit Inquiry
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PlansSection;
