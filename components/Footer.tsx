
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">HKC Malaysia 2025</h3>
            <p className="text-purple-200 leading-relaxed">
              Join us for four transformative days of spiritual growth, community building, and divine inspiration.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-semibold text-yellow-300 mb-4">Contact Information</h4>
            <div className="space-y-2 text-purple-200">
              <div className="flex items-center justify-center">
                <i className="ri-mail-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                <span>info.nationalconvention@gmail.com</span>
              </div>
{/*               <div className="flex items-center justify-center"> 
                <i className="ri-phone-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                <span>+60 3-1234 5678</span>
              </div> */}
              <div className="flex items-center justify-center">
                <i className="ri-map-pin-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                <span>TODU, Malaysia</span>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold text-yellow-300 mb-4">Registration</h4>
            <p className="text-purple-200 mb-4">Secure your spot for this spiritual journey</p>
            <a 
              href="https://linktr.ee/hkc25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap inline-block"
            >
              Register Now
            </a>
          </div>
        </div>
        
        <div className="border-t border-purple-800 pt-8 text-center">
          <div className="flex flex-wrap justify-center items-center space-x-6 mb-4">
            <div className="flex items-center space-x-2">
              <a 
                href="https://facebook.com/malaysianhkc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <i className="ri-facebook-circle-fill text-2xl text-blue-400 hover:text-blue-300 cursor-pointer w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a 
                href="https://instagram.com/hkcmsia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <i className="ri-instagram-line text-2xl text-pink-400 hover:text-pink-300 cursor-pointer w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a 
                href="https://youtube.com/@nationalharekrishnaconvent1554" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <i className="ri-youtube-fill text-2xl text-red-400 hover:text-red-300 cursor-pointer w-6 h-6 flex items-center justify-center"></i>
              </a>
              <i className="ri-twitter-x-line text-2xl text-gray-400 hover:text-gray-300 cursor-pointer w-6 h-6 flex items-center justify-center"></i>
            </div>
          </div>
          
          <div className="text-purple-300 text-sm">
            <p className="mb-2"> 2025 Hare Krishna Convention Malaysia. All rights reserved.</p>
            <p className="text-yellow-200 font-medium">
              "Let's G.A.U.R.A! - Get Trained, Aspire to Preach, Uplift Each Other, Reach Out Compassionately, Achieve Spiritual Impact"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
