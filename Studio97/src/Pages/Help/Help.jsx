import React, { useEffect, useRef, useState } from 'react';
import { Camera, Zap, Shield, CreditCard, Users, HelpCircle, Search, X, Phone, MessageCircle, Package } from 'lucide-react';
import Navbar from '../../Constants/Navbar/Navbar';
import Footer from '../../Constants/Footer';


const HelpSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
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
      question: "How do I make a payment?",
      answer: "We accept credit cards (Visa, Mastercard, Amex), PayPal, bank transfers, and UPI. You can make payment through your client portal or via the payment link sent to your email.",
      category: "Pricing & Payments",
      keywords: ["payment", "pay", "how to pay"]
    },
    {
      question: "What are the payment options available?",
      answer: "Multiple payment options: Credit/Debit Cards, PayPal, Bank Transfer, UPI (PhonePe, Google Pay, Paytm), and EMI options for packages above ₹10,000.",
      category: "Pricing & Payments",
      keywords: ["payment options", "payment methods", "how to pay"]
    },
    {
      question: "How do I get a refund?",
      answer: "Refund requests must be submitted within 48 hours of payment. Deposits are non-refundable but transferable. Full refunds processed in 7-10 business days to original payment method.",
      category: "Pricing & Payments",
      keywords: ["refund", "money back", "return"]
    },
    {
      question: "What if my payment fails?",
      answer: "Payment failures can occur due to insufficient funds, bank issues, or network problems. Please retry after 30 minutes or contact your bank. You can also try an alternate payment method.",
      category: "Pricing & Payments",
      keywords: ["payment failed", "payment failure", "transaction failed"]
    },
    {
      question: "How do I get a payment receipt?",
      answer: "Payment receipts are automatically emailed after successful payment. You can also download receipts from 'My Bookings' section in your client portal under 'Payment History'.",
      category: "Pricing & Payments",
      keywords: ["receipt", "invoice", "payment proof"]
    },
    {
      question: "Do I need to pay advance?",
      answer: "Yes, 30% advance payment is required to confirm your booking. The remaining amount can be paid before or on the day of the shoot.",
      category: "Pricing & Payments",
      keywords: ["advance", "advance payment", "deposit"]
    },
    {
      question: "What are your package prices?",
      answer: "We offer various packages starting from ₹5,000. Visit our packages page to explore detailed pricing and what's included in each package.",
      category: "Pricing & Payments",
      keywords: ["pricing", "price", "cost", "packages"],
      redirectToPackages: true
    },
    {
      question: "View all photography packages",
      answer: "Click below to explore our comprehensive photography packages with detailed pricing, inclusions, and special offers.",
      category: "Pricing & Payments",
      keywords: ["packages", "plans", "pricing plans"],
      redirectToPackages: true
    },
    {
      question: "How do I cancel or reschedule my photography session?",
      answer: "You can cancel or reschedule up to 48 hours before your session through your client portal. Go to 'My Bookings' and select 'Reschedule'. For cancellations within 48 hours, please contact us directly.",
      category: "Booking & Sessions",
      keywords: ["cancel", "reschedule", "change date"]
    },
    {
      question: "How long until I receive my edited photos?",
      answer: "Standard turnaround is 2-3 weeks for edited photos. Rush delivery (1 week) is available for an additional fee. You'll receive an email notification when your gallery is ready.",
      category: "Booking & Sessions",
      keywords: ["delivery", "when photos", "turnaround"]
    },
    {
      question: "What should I wear for my photoshoot?",
      answer: "Choose solid colors that complement your skin tone. Avoid busy patterns and logos. Bring 2-3 outfit options. We'll send a detailed style guide after booking.",
      category: "Booking & Sessions",
      keywords: ["wear", "dress", "outfit", "clothing"]
    },
    {
      question: "What camera settings should I use for portrait photography?",
      answer: "For portraits, use aperture priority mode (f/1.8-f/5.6) for beautiful background blur. ISO 100-400 in good light, 800-1600 indoors. Shutter speed 1/125s or faster to avoid blur.",
      category: "Camera & Equipment",
      keywords: ["camera settings", "portrait", "settings"]
    },
    {
      question: "What's the best lens for landscape photography?",
      answer: "Wide-angle lenses (16-35mm) are ideal for landscapes. For details, use 24-70mm. A tripod is essential for sharp images at low ISO (100-200) and smaller apertures (f/8-f/16).",
      category: "Camera & Equipment",
      keywords: ["lens", "landscape", "equipment"]
    },
    {
      question: "How do I fix overexposed photos?",
      answer: "Reduce exposure compensation (-1 to -2 EV), use spot metering for bright scenes, shoot in RAW for better recovery, and check your histogram to avoid blown highlights.",
      category: "Camera & Equipment",
      keywords: ["overexposed", "bright photos", "exposure"]
    },
    {
      question: "Can I use the photos for commercial purposes?",
      answer: "Personal use is included in all packages. Commercial licensing requires an additional agreement. Contact us to discuss commercial usage rights and pricing.",
      category: "Rights & Licensing",
      keywords: ["commercial", "business use", "licensing"]
    },
    {
      question: "How do I download my photos from the gallery?",
      answer: "Log into your client portal, open your gallery, and click 'Download All' or select individual photos. High-resolution downloads are included in your package.",
      category: "Client Portal",
      keywords: ["download", "get photos", "gallery"]
    },
    {
      question: "Can I share my gallery with family and friends?",
      answer: "Yes! Your gallery has a shareable link. You can also set a password for privacy. Share the link via email or social media directly from the portal.",
      category: "Client Portal",
      keywords: ["share", "sharing", "gallery link"]
    }
  ];

  const frequentlyAskedQuestions = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-4 weeks in advance, especially for weekends and peak seasons. However, we can accommodate last-minute bookings based on availability."
    },
    {
      question: "Do you provide prints and albums?",
      answer: "Yes! We offer premium quality prints, canvas, frames, and custom albums. These can be added to any package or ordered separately after your shoot."
    },
    {
      question: "What happens if it rains on the day of outdoor shoot?",
      answer: "We monitor weather closely. If conditions are unfavorable, we'll reschedule at no extra cost or suggest indoor alternatives. Your satisfaction is our priority."
    },
    {
      question: "Can I request specific photos or poses?",
      answer: "Absolutely! We encourage you to share your Pinterest boards or reference photos. We'll incorporate your ideas while adding our creative touch."
    },
    {
      question: "Do you offer video services?",
      answer: "Yes, we offer professional videography services for events, weddings, and promotional content. Contact us for video package details and pricing."
    },
    {
      question: "How many edited photos will I receive?",
      answer: "The number varies by package, typically ranging from 50-200 professionally edited photos. All packages include unlimited cloud storage of your gallery."
    }
  ];

  const getSmartResults = (query) => {
    if (!query || query.trim().length === 0) return [];
    
    const queryLower = query.toLowerCase().trim();
    const firstWord = queryLower.split(' ')[0];
    
    return searchDatabase.filter(item => {
      const questionLower = item.question.toLowerCase();
      const answerLower = item.answer.toLowerCase();
      const categoryLower = item.category.toLowerCase();
      const keywordsMatch = item.keywords?.some(keyword => 
        keyword.includes(firstWord) || firstWord.includes(keyword)
      );
      
      return keywordsMatch || 
             questionLower.includes(queryLower) || 
             answerLower.includes(queryLower) ||
             categoryLower.includes(queryLower);
    });
  };

  const filteredResults = getSmartResults(searchQuery);

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
      <Navbar />

      <div className="relative h-[30vh] bg-white"></div>

      <div className="relative w-full bg-white">
        <div className="relative w-full flex flex-col items-center">

          <div className="relative h-12 lg:h-20"></div>

          {/* Header Section */}
          <div className="relative w-11/12" style={{maxWidth: '72rem'}}>
            <div className="relative text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Studio 97 Help Center
              </h1>
              <div className="relative h-6"></div>
              <p className="text-lg sm:text-xl text-gray-600">
                Find answers to your questions about photography services, bookings, and technical support
              </p>
            </div>
          </div>

          <div className="relative h-12"></div>

          {/* Search Section */}
          <div className="relative w-11/12" style={{maxWidth: '48rem'}}>
            <div className="relative w-full">
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Search className="text-gray-400 w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help... (e.g., 'payment options', 'camera settings')"
                className="w-full h-16 text-lg text-gray-900 border-2 border-gray-200 rounded-2xl focus:border-gray-900 focus:outline-none transition-colors shadow-lg box-border bg-white"
                style={{ 
                  paddingLeft: '3.5rem', 
                  paddingRight: searchQuery ? '3.5rem' : '1.5rem'
                }}
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
                  <div className="relative">
                    {filteredResults.map((result, index) => (
                      <div
                        key={index}
                        className="relative border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className="relative h-4"></div>
                        <div className="relative flex items-start gap-3" style={{width: 'calc(100% - 4rem)', left: '2rem'}}>
                          <div className="relative shrink-0" style={{top: '0.125rem'}}>
                            <HelpCircle className="w-5 h-5 text-gray-400" />
                          </div>
                          <div className="relative flex-1">
                            <h4 className="font-semibold text-gray-900 text-left">{result.question}</h4>
                            <div className="relative h-2"></div>
                            <p className="text-sm text-gray-600 text-left line-clamp-2">{result.answer}</p>
                            <div className="relative h-2"></div>
                            {result.redirectToPackages ? (
                              <button 
                                onClick={() => window.location.href = '/packages'}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-linear-to-r from-blue-500 to-purple-500 rounded-full hover:shadow-lg transition-all"
                                style={{paddingTop: '0.5rem', paddingBottom: '0.5rem', paddingLeft: '1rem', paddingRight: '1rem'}}
                              >
                                <Package className="w-4 h-4" />
                                View Packages
                              </button>
                            ) : (
                              <span className="text-xs text-gray-500 bg-gray-100 rounded-full inline-block" style={{ padding: '0.25rem 0.75rem' }}>
                                {result.category}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="relative h-4"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative">
                    <div className="relative h-8"></div>
                    <div className="relative" style={{width: 'calc(100% - 4rem)', left: '2rem'}}>
                      <div className="relative bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200">
                        <div className="relative h-6"></div>
                        <div className="relative text-center">
                          <div className="relative inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-500 to-purple-500 rounded-full">
                            <HelpCircle className="w-8 h-8 text-white" />
                          </div>
                          <div className="relative h-4"></div>
                          <h3 className="text-xl font-bold text-gray-900">Can't find what you're looking for?</h3>
                          <div className="relative h-3"></div>
                          <p className="text-gray-600">No worries! Our team is here to help you personally</p>
                          <div className="relative h-6"></div>
                          
                          <div className="relative flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <a 
                              href="tel:7777988897"
                              className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-green-500 to-green-600 text-white h-12 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                              style={{width: '100%', maxWidth: '12rem'}}
                            >
                              <Phone className="w-5 h-5" />
                              Call Us
                            </a>
                            <a 
                              href="https://wa.me/917777988897"
                              className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-500 to-blue-600 text-white h-12 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                              style={{width: '100%', maxWidth: '12rem'}}
                            >
                              <MessageCircle className="w-5 h-5" />
                              WhatsApp
                            </a>
                          </div>
                          
                          <div className="relative h-4"></div>
                          <div className="relative text-center">
                            <p className="text-sm font-semibold text-gray-700">📞 7777988897</p>
                            <div className="relative h-1"></div>
                            <p className="text-xs text-gray-500">Available Mon-Sat, 9 AM - 7 PM</p>
                          </div>
                        </div>
                        <div className="relative h-6"></div>
                      </div>
                    </div>
                    <div className="relative h-8"></div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="relative h-16"></div>

          {/* Category Cards */}
          <div className="relative w-11/12" style={{maxWidth: '72rem'}}>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">Browse by Category</h2>
            <div className="relative h-10"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    ref={el => cardsRef.current[index] = el}
                    className="relative bg-white border-2 border-gray-100 rounded-3xl hover:border-gray-300 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-2xl overflow-hidden"
                    style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}
                    onClick={() => setActiveCategory(activeCategory === category.title ? null : category)}
                  >
                    <div className={`relative w-full h-2 bg-linear-to-r ${category.color}`}></div>
                    <div className="relative h-6"></div>
                    <div className="relative" style={{width: 'calc(100% - 4rem)', left: '2rem'}}>
                      <div className={`relative w-14 h-14 rounded-2xl bg-linear-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <div className="relative h-4"></div>

                      <h3 className="text-xl font-bold text-gray-900 text-left">
                        {category.title}
                      </h3>

                      <div className="relative h-3"></div>

                      <p className="text-gray-600 text-sm text-left leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="relative h-6"></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative h-20"></div>

          {/* FAQ Section */}
          <div className="relative w-11/12" style={{maxWidth: '72rem'}}>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
            <div className="relative h-10"></div>

            <div className="relative w-full">
              {frequentlyAskedQuestions.map((faq, index) => (
                <div
                  key={index}
                  className="relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 transition-all"
                  style={{marginBottom: index < frequentlyAskedQuestions.length - 1 ? '1rem' : '0'}}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="relative w-full text-left"
                  >
                    <div className="relative h-5"></div>
                    <div className="relative flex items-center justify-between" style={{width: 'calc(100% - 4rem)', left: '2rem'}}>
                      <h3 className="text-lg font-semibold text-gray-900 flex-1" style={{paddingRight: '1rem'}}>{faq.question}</h3>
                      <div className={`relative w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform shrink-0 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <div className="relative h-5"></div>
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="relative">
                      <div className="relative w-full h-px bg-gray-200"></div>
                      <div className="relative h-4"></div>
                      <div className="relative" style={{width: 'calc(100% - 4rem)', left: '2rem'}}>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                      <div className="relative h-5"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-16"></div>

          {/* Contact Section */}
          <div className="relative w-11/12" style={{maxWidth: '72rem'}}>
            <div className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl w-full overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'}}></div>
              <div className="relative">
                <div className="relative h-16"></div>
                <div className="relative" style={{width: 'calc(100% - 4rem)', left: '2rem'}}>
                  <div className="relative text-center">
                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white rounded-full">
                      <HelpCircle className="w-8 h-8 text-gray-900" />
                    </div>
                    <div className="relative h-6"></div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">Need Direct Support?</h2>
                    <div className="relative h-4"></div>
                    <p className="text-lg text-gray-300" style={{maxWidth: '42rem', display: 'inline-block'}}>
                      Our photography team is ready to help you with personalized assistance
                    </p>
                    <div className="relative h-10"></div>
                    <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a 
                        href="mailto:jp7777988897@gmail.com"
                        className="bg-white text-gray-900 h-14 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 transform flex items-center justify-center" 
                        style={{width: '100%', maxWidth: '13rem'}}
                      >
                        Email Support
                      </a>
                      <a 
                        href="https://wa.me/917777988897"
                        className="border-2 border-white text-white h-14 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 flex items-center justify-center" 
                        style={{width: '100%', maxWidth: '13rem'}}
                      >
                        Live Chat
                      </a>
                      <a 
                        href="tel:7777988897"
                        className="border-2 border-white text-white h-14 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 flex items-center justify-center" 
                        style={{width: '100%', maxWidth: '13rem'}}
                      >
                        Call Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative h-16"></div>
              </div>
            </div>
          </div>

          <div className="relative h-20"></div>

        </div>
      </div>

      <div className="relative w-full bg-white">
        <Footer />
      </div>

    </>
  );
};

export default HelpSection;