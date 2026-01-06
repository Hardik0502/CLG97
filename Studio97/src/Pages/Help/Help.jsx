import React, { useEffect, useRef, useState } from 'react';
import { Camera, Zap, Shield, CreditCard, Users, HelpCircle, Search, X } from 'lucide-react';
import Navbar from '../../Constants/Navbar/Navbar';
import Footer from '../../Constants/Footer';

const HelpSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const cardsRef = useRef([]);

  const categories = [
    {
      icon: Camera,
      title: "Camera & Equipment",
      description: "Technical support for cameras, lenses, and gear recommendations",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Booking & Sessions",
      description: "Manage bookings, reschedule shoots, and session preparation",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Rights & Licensing",
      description: "Photo rights, usage licenses, and copyright information",
      color: "from-green-500 to-green-600"
    },
    {
      icon: CreditCard,
      title: "Pricing & Payments",
      description: "Package pricing, payment methods, and invoice queries",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Client Portal",
      description: "Access your photos, download images, and share galleries",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: HelpCircle,
      title: "General Support",
      description: "Other questions, feedback, and general assistance",
      color: "from-gray-500 to-gray-600"
    }
  ];

  const searchDatabase = [
    {
      question: "How do I cancel or reschedule my photography session?",
      answer: "You can cancel or reschedule up to 48 hours before your session through your client portal. Go to 'My Bookings' and select 'Reschedule'. For cancellations within 48 hours, please contact us directly.",
      category: "Booking & Sessions"
    },
    {
      question: "What camera settings should I use for portrait photography?",
      answer: "For portraits, use aperture priority mode (f/1.8-f/5.6) for beautiful background blur. ISO 100-400 in good light, 800-1600 indoors. Shutter speed 1/125s or faster to avoid blur.",
      category: "Camera & Equipment"
    },
    {
      question: "How long until I receive my edited photos?",
      answer: "Standard turnaround is 2-3 weeks for edited photos. Rush delivery (1 week) is available for an additional fee. You'll receive an email notification when your gallery is ready.",
      category: "Booking & Sessions"
    },
    {
      question: "Can I use the photos for commercial purposes?",
      answer: "Personal use is included in all packages. Commercial licensing requires an additional agreement. Contact us to discuss commercial usage rights and pricing.",
      category: "Rights & Licensing"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards (Visa, Mastercard, Amex), PayPal, bank transfers, and payment plans for packages over $500. A 30% deposit is required to secure your booking.",
      category: "Pricing & Payments"
    },
    {
      question: "How do I download my photos from the gallery?",
      answer: "Log into your client portal, open your gallery, and click 'Download All' or select individual photos. High-resolution downloads are included in your package.",
      category: "Client Portal"
    },
    {
      question: "What should I wear for my photoshoot?",
      answer: "Choose solid colors that complement your skin tone. Avoid busy patterns and logos. Bring 2-3 outfit options. We'll send a detailed style guide after booking.",
      category: "Booking & Sessions"
    },
    {
      question: "Do you offer refunds?",
      answer: "Deposits are non-refundable but can be transferred to a future date within 6 months. Full refunds available if we cancel due to unforeseen circumstances.",
      category: "Pricing & Payments"
    },
    {
      question: "What's the best lens for landscape photography?",
      answer: "Wide-angle lenses (16-35mm) are ideal for landscapes. For details, use 24-70mm. A tripod is essential for sharp images at low ISO (100-200) and smaller apertures (f/8-f/16).",
      category: "Camera & Equipment"
    },
    {
      question: "Can I share my gallery with family and friends?",
      answer: "Yes! Your gallery has a shareable link. You can also set a password for privacy. Share the link via email or social media directly from the portal.",
      category: "Client Portal"
    },
    {
      question: "How do I fix overexposed photos?",
      answer: "Reduce exposure compensation (-1 to -2 EV), use spot metering for bright scenes, shoot in RAW for better recovery, and check your histogram to avoid blown highlights.",
      category: "Camera & Equipment"
    },
    {
      question: "What's included in your photography packages?",
      answer: "All packages include professional editing, online gallery, and high-resolution digital downloads. Print rights included. Add-ons: prints, albums, extra hours, and second shooter available.",
      category: "Pricing & Payments"
    }
  ];

  const filteredResults = searchDatabase.filter(item =>
    searchQuery.length > 0 && (
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  useEffect(() => {
    const cards = cardsRef.current;
    cards.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchQuery]);

  return (
    <>


      < Navbar />

      <div className="extra h-[30vh] bg-white "></div>


      <div className="min-h-screen bg-white w-full">
        <div className="w-full h-full flex flex-col items-center">

          <div className="h-12 lg:h-20"></div>

          {/* Header Section */}
          <div className="w-11/12 max-w-6xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Photography Help Center
            </h1>
            <div className="h-6"></div>
            <p className="text-lg sm:text-xl text-gray-600">
              Find answers to your questions about photography services, bookings, and technical support
            </p>
          </div>

          <div className="h-12"></div>

          {/* Search Section */}
          <div className="w-11/12 max-w-3xl relative">
            <div className="relative w-full">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help... (e.g., 'cancel booking', 'camera settings')"
                className="w-full h-16 text-lg border-2 border-gray-200 rounded-2xl focus:border-gray-900 focus:outline-none transition-colors shadow-lg box-border"
                style={{ paddingLeft: '3.5rem', paddingRight: searchQuery ? '3.5rem' : '1.5rem' }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-900"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {showResults && (
              <div className="absolute w-full bg-white border-2 border-gray-200 rounded-2xl shadow-2xl z-50 max-h-96 overflow-y-auto" style={{ top: '5rem' }}>
                {filteredResults.length > 0 ? (
                  <div>
                    {filteredResults.map((result, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => {
                          setActiveCategory(result);
                          setShowResults(false);
                        }}
                      >
                        <div className="h-4"></div>
                        <div className="w-11/12 inline-block">
                          <div className="flex items-start gap-3">
                            <HelpCircle className="w-5 h-5 text-gray-400 shrink-0" style={{ marginTop: '0.125rem' }} />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 text-left">{result.question}</h4>
                              <div className="h-2"></div>
                              <p className="text-sm text-gray-600 text-left line-clamp-2">{result.answer}</p>
                              <div className="h-2"></div>
                              <span className="text-xs text-gray-500 bg-gray-100 rounded-full inline-block" style={{ padding: '0.25rem 0.75rem' }}>
                                {result.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="h-4"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="h-8"></div>
                    <p className="text-gray-500">No results found for "{searchQuery}"</p>
                    <div className="h-2"></div>
                    <p className="text-sm text-gray-400">Try different keywords or browse categories below</p>
                    <div className="h-8"></div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="h-16"></div>

          {/* Category Cards */}
          <div className="w-11/12 max-w-6xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">Browse by Category</h2>
            <div className="h-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    ref={el => cardsRef.current[index] = el}
                    className="bg-white border-2 border-gray-100 rounded-3xl hover:border-gray-300 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-2xl overflow-hidden"
                    style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}
                    onClick={() => setActiveCategory(activeCategory === category.title ? null : category)}
                  >
                    <div className={`w-full h-2 bg-linear-to-r ${category.color}`}></div>
                    <div className="h-6"></div>
                    <div className="w-11/12 inline-block">
                      <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <div className="h-4"></div>

                      <h3 className="text-xl font-bold text-gray-900 text-left">
                        {category.title}
                      </h3>

                      <div className="h-3"></div>

                      <p className="text-gray-600 text-sm text-left leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="h-6"></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="h-16"></div>

          {/* Contact Section */}
          <div className="w-11/12 max-w-6xl">
            <div className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="relative">
                <div className="h-16"></div>
                <div className="w-11/12 inline-block text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full">
                    <HelpCircle className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="h-6"></div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">Need Direct Support?</h2>
                  <div className="h-4"></div>
                  <p className="text-lg text-gray-300 max-w-2xl inline-block">
                    Our photography team is ready to help you with personalized assistance
                  </p>
                  <div className="h-10"></div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-white text-gray-900 h-14 w-full sm:w-52 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 transform">
                      Email Support
                    </button>
                    <button className="border-2 border-white text-white h-14 w-full sm:w-52 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105">
                      Live Chat
                    </button>
                    <button className="border-2 border-white text-white h-14 w-full sm:w-52 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105">
                      Call Us
                    </button>
                  </div>
                </div>
                <div className="h-16"></div>
              </div>
            </div>
          </div>

          <div className="h-20"></div>

        </div>
      </div>

      <div className="footer h-[45vh] w-full bg-white ">
        < Footer />
      </div>


    </>
  );
};

export default HelpSection;