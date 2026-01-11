import React from 'react'
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100">

      {/* Footer Component */}
      <footer className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white h-[40vh] flex items-center">
        {/* Decorative top border */}
        {/* <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div> */}
        
        <div className="absolute left-16 right-16 top-[15%] bottom-[15%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
            
            {/* Brand Section */}
            <div className="relative">
              <div className="relative top-0 left-0">
                <h3 className="text-[6vh] font-[font2] uppercase text-white">
                  STUDIO 97
                </h3>
              </div>
              <div className="absolute top-10 left-0 right-0">
                <p className="text-slate-300 font-[font2] text-[3vh] leading-relaxed">
                  Creating exceptional digital experiences with passion and precision.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="relative">
              <div className="absolute top-0 left-0">
                <h4 className="text-lg font-[font2] text-slate-100">Get In Touch</h4>
              </div>
              
              <div className="relative font-[font2] top-10 left-0 right-0">
                <div className="relative h-2">
                  <a href="tel:7777988897" className="absolute left-0 flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 group-hover:bg-blue-500/10 transition-colors">
                      <Phone size={16} />
                    </div>
                    <span className="text-x">+91 7777988897</span>
                  </a>
                </div>
                
                <div className="relative h-2 top-10">
                  <a href="mailto:jp7777988897@gmail.com" className="absolute left-0 flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 group-hover:bg-blue-500/10 transition-colors">
                      <Mail size={16} />
                    </div>
                    <span className="text-x">jp7777988897@gmail.com</span>
                  </a>
                </div>
                
                <div className="relative top-20">
                  <div className="absolute left-0 flex items-start gap-3 text-slate-300">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800">
                      <MapPin size={16} />
                    </div>
                    <span className="text-sm leading-relaxed">
                      1st floor, Besides Raghuvir Society<br />
                      Anand - 388001
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative font-[font2] ">
              <div className="absolute top-0 left-0">
                <h4 className="text-lg font-semibold text-slate-100">Connect With Me</h4>
              </div>
              
              <div className="absolute top-10 left-0 flex gap-3">
                <a 
                  href="https://www.instagram.com/studio_97__/?hl=en" target="_blank" 
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-linear-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-linear-to-br hover:from-blue-400 hover:to-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                
                <a 
                  href="https://www.facebook.com/captianjayu97/" 
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-linear-to-br hover:from-blue-600 hover:to-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/50"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                
                <a 
                  href="https://wa.me/7777988897" 
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-linear-to-br hover:from-green-400 hover:to-green-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
              
              <div className="absolute top-[90px] left-0 right-0">
                <p className="text-slate-400 text-xs leading-relaxed">
                  Available for freelance projects and collaborations.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="absolute left-0 right-0 bottom-0 h-12">
            <div className="absolute left-0 bottom-3 text-slate-400 text-sm">
              © {new Date().getFullYear()} STUDIO 97, All rights reserved.
            </div>
            <div className="absolute right-0 bottom-3 flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-8 left-8 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-8 right-8 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </footer>
    </div>
  )
}

export default Footer