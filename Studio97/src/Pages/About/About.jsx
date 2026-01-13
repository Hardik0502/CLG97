import React, { useState, useEffect, useRef } from 'react';
import { Camera, MapPin, Mail, Phone, Shield, AlertCircle, CheckCircle, Users, Award, Heart, Clock } from 'lucide-react';
import Navbar from '../../Constants/Navbar/Navbar';
import Footer from '../../Constants/Footer';

const AboutPage = () => {
  const [activeTermIndex, setActiveTermIndex] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  const studioInfo = {
    name: "Studio 97",
    tagline: "Capturing Moments, Creating Memories",
    description: "At Studio 97, we believe every moment tells a story. With years of experience and a passion for photography, we transform your special occasions into timeless memories. Our team of professional photographers combines artistic vision with technical expertise to deliver stunning results that exceed expectations.",
    address: "1st floor, Besides Raghuvir Society, Anand - 388001",
    email: "jp7777988897@gmail.com",
    phone: "+91 7777988897",
    whatsapp: "917777988897"
  };

  const ourValues = [
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do, and it shows in every photograph we capture"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project"
    },
    {
      icon: Users,
      title: "Client First",
      description: "Your satisfaction and vision are at the heart of everything we do"
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Professional, punctual, and dedicated to meeting deadlines"
    }
  ];

  const termsAndConditions = [
    {
      title: "Advance Payment Policy",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      terms: [
        "50% advance payment is required to confirm your booking",
        "Advance payment is non-refundable under all circumstances",
        "Payment can be made via UPI, Cash, bank transfer, or card",
        "Booking confirmation will be sent via email after payment receipt"
      ]
    },
    {
      title: "Cancellation & Refund",
      icon: AlertCircle,
      color: "from-red-500 to-red-600",
      terms: [
        "Full payment bookings: No refund if cancelled within 7 days of the event",
        "Cancellations made 7+ days before the event may receive 50% refund (excluding advance)",
        "Rescheduling is allowed once without charges if notified 10 days prior",
        "Weather-related cancellations can be rescheduled at no extra cost"
      ]
    },
    {
      title: "Travel & Accommodation",
      icon: MapPin,
      color: "from-orange-500 to-orange-600",
      terms: [
        "Travel charges apply for events outside 25km radius of our studio",
        "Petrol/fuel charges will be calculated at ₹12 per km",
        "For outstation events, accommodation and meals must be provided for the team",
        "Flight/train tickets to be arranged by client for destination events",
        "Travel time to be paid separately for events beyond city limits"
      ]
    },
    {
      title: "Staff Facilities & Conduct",
      icon: Users,
      color: "from-green-500 to-green-600",
      terms: [
        "Adequate working space and rest area must be provided for our team",
        "Refreshments and meals to be arranged for shoots exceeding 4 hours",
        "Client must ensure safety and security of our equipment at venue",
        "Professional and respectful behavior expected from both parties",
        "Any misbehavior or abuse towards staff will result in immediate termination of services"
      ]
    },
    {
      title: "Delivery & Rights",
      icon: Camera,
      color: "from-purple-500 to-purple-600",
      terms: [
        "Edited photos delivered within 2-3 weeks of the event",
        "All photos provided via online gallery with download access",
        "Copyrights of images remain with Studio 97",
        "Client receives usage rights for personal use only",
        "Commercial usage requires separate licensing agreement",
        "Raw/unedited files are not provided"
      ]
    },
    {
      title: "Equipment & Force Majeure",
      icon: Shield,
      color: "from-indigo-500 to-indigo-600",
      terms: [
        "Studio 97 carries backup equipment for all shoots",
        "Technical failures beyond our control may require rescheduling",
        "Natural disasters, medical emergencies exempt both parties from penalties",
        "Equipment damage at venue will be charged to client if due to negligence",
        "Insurance coverage available for high-value events on request"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-white">

      {/* Navbar Space */}
      < Navbar />

      {/* Hero Section */}
      <section className="w-full min-h-screen bg-[#eaeaea] flex justify-center items-center">

        {/* PAGE WRAPPER */}
        <div className=" w-full h-[125vh] z-10 relative top-20 bg-white">

          {/* HEADER */}
          <div className="absolute top-0 left-0 w-full bg-black h-16 border-b flex items-center">
            <span className="absolute left-12 text-[12px] tracking-[0.3em] font-semibold">
              STUDIO 97
            </span>
          </div>

          {/* HERO BLUE */}
          <div className="absolute top-16 left-0 w-full h-[420px] bg-[#6fa6d9]">

            {/* MODEL IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=600&auto=format&fit=crop"
              alt=""
              className="absolute bottom-0 left-[90px] h-[390px] object-contain"
            />

            {/* HERO TEXT */}
            <div className="absolute right-[90px] top-[110px] w-[420px] text-white">

              <h1 className="text-[38px] font-[font2] text-black tracking-wide">
                Jayesh Prajapati
              </h1>

              <p className="absolute top-14 text-[14px] leading-[22px] opacity-95">
                The Official Owner of STUDIO 97.
                <br />
                is now open in Chinook Centre.
              </p>

              <p className="absolute top-28 text-[13px] leading-5 opacity-90">
                The Modern people needs modern Photograpgy.
                <br />
                So Here We are
              </p>

              <button className="absolute top-[180px] w-[200px] h-[42px] bg-white text-[#6fa6d9] text-[12px] tracking-widest font-[font2] cursor-pointer  hover:bg-black hover:text-white transition ease-in  ">
                BOOK AN APPOINTMENT
              </button>

            </div>
          </div>

          {/* MIDDLE WHITE SECTION */}
          <div className="absolute top-[484px] left-0 w-full h-[190px] bg-white flex flex-col items-center justify-center text-center">

            <h2 className="text-[13px] tracking-[0.25em] font-semibold">
              THE MADE TO MEASURE DIFFERENCE
            </h2>

            <p className="absolute top-[88px] w-[620px] text-[13px] leading-[22px] text-black/70">
              We create suits and shirts customized to your exact measurements
              and personal style, at excellent prices.
            </p>

            <button className="absolute bottom-[22px] w-40 h-9 border border-[#6fa6d9] text-[#6fa6d9] text-[11px] font-[font2] cursor-pointer tracking-widest hover:bg-[#6fa6d9] hover:text-white transition ease-in ">
              SEE THE SUITS
            </button>
          </div>


        </div>
      </section>

      {/* Contact Information Section */}
      <div className="relative w-full bg-white">
        <div className="relative" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="relative flex justify-center">
            <div className="relative" style={{ width: '91.666667%', maxWidth: '72rem' }}>
              <div className="relative text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  Get In Touch
                </h2>
                <div className="relative h-4"></div>
                <div className="relative w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500" style={{ left: '50%', transform: 'translateX(-50%)' }}></div>
              </div>

              <div className="relative h-12"></div>

              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Phone */}
                <a
                  href={`tel:${studioInfo.phone}`}
                  className="relative bg-linear-to-br from-blue-500 to-blue-600 rounded-3xl shadow-xl hover:shadow-2xl text-black transition-all duration-300 group overflow-hidden hover:scale-105 transform"
                >
                  <div className="relative h-8"></div>
                  <div className="relative" style={{ width: 'calc(100% - 3rem)', left: '1.5rem' }}>
                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
                      <Phone className="w-8 h-8 text-black" />
                    </div>
                    <div className="relative h-4"></div>
                    <h3 className="text-lg font-semibold text-white">Call Us</h3>
                    <div className="relative h-2"></div>
                    <p className="text-sm text-blue-100">{studioInfo.phone}</p>
                  </div>
                  <div className="relative h-8"></div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${studioInfo.email}`}
                  className="relative bg-linear-to-br from-purple-500 to-purple-600 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden hover:scale-105  transform"
                >
                  <div className="relative h-8"></div>
                  <div className="relative" style={{ width: 'calc(100% - 3rem)', left: '1.5rem' }}>
                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
                      <Mail className="w-8 h-8 text-black" />
                    </div>
                    <div className="relative h-4"></div>
                    <h3 className="text-lg font-semibold text-white">Email Us</h3>
                    <div className="relative h-2"></div>
                    <p className="text-sm text-purple-100 break-all">{studioInfo.email}</p>
                  </div>
                  <div className="relative h-8"></div>
                </a>

                {/* Address */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(studioInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-linear-to-br from-green-500 to-green-600 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden hover:scale-105 transform"
                >
                  <div className="relative h-8"></div>
                  <div className="relative" style={{ width: 'calc(100% - 3rem)', left: '1.5rem' }}>
                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
                      <MapPin className="w-8 h-8 text-black" />
                    </div>
                    <div className="relative h-4"></div>
                    <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                    <div className="relative h-2"></div>
                    <p className="text-sm text-green-100 leading-relaxed">{studioInfo.address}</p>
                  </div>
                  <div className="relative h-8"></div>
                </a>
              </div>

              <div className="relative h-8"></div>

              {/* WhatsApp CTA */}
              <div className="relative text-center">
                <a
                  href={`https://wa.me/${studioInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-linear-to-r from-green-400 to-green-500 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                  style={{ paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '2rem', paddingRight: '2rem' }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="text-lg font-semibold">Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms & Conditions Section */}
      <div className="relative w-full bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="relative flex justify-center">
            <div className="relative" style={{ width: '91.666667%', maxWidth: '80rem' }}>
              <div className="relative text-center">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-blue-500 to-purple-500 rounded-full">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="relative h-6"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Terms & Conditions
                </h2>
                <div className="relative h-4"></div>
                <p className="text-lg text-gray-300">
                  Please read our terms carefully before booking our services
                </p>
              </div>

              <div className="relative h-12"></div>

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
                {termsAndConditions.map((section, sectionIndex) => {
                  const Icon = section.icon;
                  const isExpanded = activeTermIndex === sectionIndex;

                  return (
                    <div
                      key={sectionIndex}
                      className="relative bg-white bg-opacity-5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white border-opacity-10 hover:border-opacity-20 transition-all"
                    >
                      <div
                        className="relative cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTermIndex((prev) =>
                            prev === sectionIndex ? null : sectionIndex
                          );
                        }}

                      >
                        <div className={`absolute top-0 left-0 right-0 h-2 bg-linear-to-r ${section.color}`}></div>

                        <div className="relative h-6"></div>
                        <div className="relative flex items-center justify-between" style={{ width: 'calc(100% - 3rem)', left: '1.5rem' }}>
                          <div className="relative flex items-center gap-4 flex-1">
                            <div className={`relative w-14 h-14 rounded-2xl bg-linear-to-br ${section.color} flex items-center justify-center shrink-0`}>
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-black">{section.title}</h3>
                          </div>
                          <div className={`relative w-10 h-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center transition-transform shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
                            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        <div className="relative h-6"></div>
                      </div>

                      {isExpanded && (
                        <div className="relative">
                          <div className="relative w-full h-px bg-white bg-opacity-10"></div>
                          <div className="relative h-4"></div>
                          <div className="relative" style={{ width: 'calc(100% - 3rem)', left: '1.5rem' }}>
                            {section.terms.map((term, termIndex) => (
                              <div key={termIndex} className="relative flex items-start gap-3" style={{ marginBottom: termIndex < section.terms.length - 1 ? '0.75rem' : '0' }}>
                                <div className="relative shrink-0" style={{ top: '0.125rem' }}>
                                  <CheckCircle className="w-5 h-5 text-green-400" />
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed flex-1">{term}</p>
                              </div>
                            ))}
                          </div>
                          <div className="relative h-6"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="relative h-12"></div>

              {/* Important Notice */}
              <div className="relative bg-linear-to-r from-red-500 to-orange-500 rounded-3xl overflow-hidden">
                <div className="relative h-8"></div>
                <div className="relative" style={{ width: 'calc(100% - 3rem)', left: '1.5rem' }}>
                  <div className="relative flex items-start gap-4">
                    <div className="relative shrink-0">
                      <div className="relative w-12 h-12 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                        <AlertCircle className="w-7 h-7 text-red-800" />
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <h3 className="text-xl font-bold text-white">Important Notice</h3>
                      <div className="relative h-2"></div>
                      <p className="text-sm text-white text-opacity-90 leading-relaxed">
                        By booking our services, you acknowledge that you have read, understood, and agree to all the terms and conditions mentioned above. These terms are designed to ensure a smooth and professional experience for both parties. For any clarifications or special requests, please contact us before confirming your booking.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Space */}
      <div className="relative w-full bg-white">
        <Footer />
      </div>

    </div>
  );
};

export default AboutPage;