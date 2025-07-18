import React, { useState } from "react";

const plans = [
  {
    title: "Starter Plan",
    price: "₹12,000/mo",
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
    price: "₹15,000/mo",
    ribbon: "Best Value",
    features: [
      "2 social media handling",
      "Shoots (Videos + Photos)",
      "15 to 16 Posts/Month",
      "1 Storytelling Reel (Creative, Narrative-Based Content)",
      "DM Management (Replying to Queries & Engagement in DMs)",
      "1 Event Visit for Shooting Content",
      "2 Paid Ad Campaigns (Ad Budget Excluded)",
      "Email/WhatsApp Marketing (1 Campaigns/Month)",
      "SEO",
    ],
  },
  {
    title: "Pro Plan",
    price: "₹25,000/mo",
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
    <section className="py-20 bg-gradient-to-b from-yellow-100 via-white to-purple-100" id="plans">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">Our Plans</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const animation =
              index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left";

            return (
              <div
                key={index}
                data-aos={animation}
                data-aos-duration="1000"
                className="relative bg-white/70 backdrop-blur-lg border border-white rounded-2xl p-8 shadow-lg transition hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {plan.ribbon && (
                    <div className="absolute top-0 left-0 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-br-lg rounded-tl-2xl shadow-md">
                      {plan.ribbon}
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-lg font-semibold text-purple-700 mb-4">
                    {plan.price}
                  </p>
                  <ul className="text-gray-800 text-sm space-y-2 leading-relaxed">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openForm(plan.title)}
                  className="mt-6 w-full bg-gradient-to-r from-yellow-200 to-purple-200 text-gray-800 font-semibold py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        {/* Form Modal */}
{showForm && (
  <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
    <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full shadow-2xl relative">
      <button
        onClick={closeForm}
        className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl font-bold"
      >
        ×
      </button>
      <h3 className="text-xl sm:text-2xl font-bold mb-5 text-center text-gray-800">
        Get Started with {selectedPlan}
      </h3>
      <form
        action="https://formspree.io/f/mvgazvle"
        method="POST"
        className="space-y-4"
      >
        <input
          type="hidden"
          name="Selected Plan"
          value={selectedPlan}
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          pattern="[0-9]{10}"
          maxLength="10"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white font-semibold py-3 text-base sm:text-lg rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
)}

      </div>
    </section>
  );
};

export default PlansSection;
