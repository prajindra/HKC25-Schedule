
'use client';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      {/* Event Information */}
      <div className="flex flex-col justify-center items-center text-center text-white px-4 py-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
          {/* HKC Logo */}
          <div className="mb-8">
            <img 
              src="https://static.readdy.ai/image/465851cfd5d255a5b0940b68d8aff6fb/a11ac8ae6de3f3921130eca1b9b085d3.png" 
              alt="HKC Malaysia 2025 Logo"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-300">
            HKC Malaysia 2025
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Let's G.A.U.R.A!
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <i className="ri-calendar-line text-2xl text-yellow-300 mr-2 w-6 h-6 flex items-center justify-center"></i>
              </div>
              <p className="text-lg font-semibold">11–14 September 2025</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <i className="ri-map-pin-line text-2xl text-yellow-300 mr-2 w-6 h-6 flex items-center justify-center"></i>
              </div>
              <p className="text-lg font-semibold">Temple of Devotion & Understanding (TODU), Malaysia</p>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-xl font-medium text-yellow-200 mb-2">Convention Theme:</p>
            <p className="text-lg leading-relaxed">
              Get Trained • Aspire to Preach • Uplift Each Other • Reach Out Compassionately • Achieve Spiritual Impact
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-yellow-300">
            <div className="text-center">
              <p className="text-2xl font-bold">IGNITE</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">INSPIRE</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">IMPACT</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
