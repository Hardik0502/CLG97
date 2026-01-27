import React from 'react'
import { Instagram, Facebook, Mail, Phone, MapPin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <div className="w-full bg-linear-to-br from-gray-50 to-gray-100">
      <footer className="
        relative
        w-full
        bg-linear-to-br from-slate-900 via-slate-800 to-slate-900
        text-white
        min-h-svh
        md:min-h-[40vh]
        overflow-hidden
      ">

        {/* MAIN CONTENT WRAPPER */}
        <div className="
          absolute
          inset-x-[5%]
          inset-y-[5%]
          md:inset-x-16
          md:inset-y-[15%]
        ">

          <div className="grid grid-cols-1 md:grid-cols-3 relative h-full">

            {/* BRAND */}
            <div className="relative">
              <h3 className="text-[32px] md:text-[6vh] font-[font2] uppercase">
                STUDIO 97
              </h3>

              <p className="
                absolute
                top-12
                md:top-[10vh]
                text-[14px]
                md:text-[3vh]
                text-slate-300
                font-[font2]
                max-w-[90%]
              ">
                Creating exceptional digital experiences with passion and precision.
              </p>
            </div>

            {/* CONTACT */}
            <div className="relative">
              <h4 className="absolute top-0 text-lg font-[font2] text-slate-100">
                Get In Touch
              </h4>

              <div className="absolute top-[12vh] md:top-10 font-[font2] space-y-[6vh]">

                <a href="tel:7777988897" className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800">
                    <Phone size={16} />
                  </div>
                  +91 7777988897
                </a>

                <a href="mailto:jp7777988897@gmail.com" className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800">
                    <Mail size={16} />
                  </div>
                  jp7777988897@gmail.com
                </a>

                <div className="flex items-start gap-3 text-slate-300">
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

            {/* SOCIAL */}
            <div className="relative font-[font2]">
              <h4 className="absolute top-0 text-lg text-slate-100">
                Connect With Me
              </h4>

              <div className="absolute top-[12vh] md:top-10 flex gap-3">
                {[ 
                  { href:'https://www.instagram.com/studio_97__/?hl=en', icon:<Instagram size={18}/> },
                  { href:'https://www.youtube.com/@Studio_97__', icon:<Youtube size={18}/> },
                  { href:'https://www.facebook.com/captianjayu97/', icon:<Facebook size={18}/> }
                ].map((s,i)=>(
                  <a key={i} href={s.href} target="_blank"
                     className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 hover:scale-110 transition">
                    {s.icon}
                  </a>
                ))}
              </div>

              <p className="absolute top-[22vh] md:top-[90px] text-slate-400 text-xs">
                Available for freelance projects and collaborations.
              </p>
            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="absolute left-0 right-0 bottom-0 h-12">
            <div className="absolute left-0 top-2 md:top-6 text-slate-400 text-xs font-[font1]">
              © {new Date().getFullYear()} STUDIO 97, All rights reserved.
            </div>

            <div className="absolute right-0 bottom-0 flex gap-6 text-sm text-slate-400">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>

        </div>

        {/* DECORATIVE ORBS */}
        <div className="absolute top-8 left-8 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-8 right-8 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

      </footer>
    </div>
  )
}

export default Footer
