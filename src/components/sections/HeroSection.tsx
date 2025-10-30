import React from 'react';
import { Button } from '../common/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-pink-50 px-4 py-12 lg:py-20 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Adobe Creative Cloud —<br />
            1 Year Plan for ₹899
          </h1>

          <p className="text-gray-600 text-lg lg:text-xl">
            Unlock all Adobe apps with AI features, 10K monthly AI credits, 2-device
            support (Mac & Windows).
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button>Buy Instantly</Button>
            <Button variant="secondary">Learn More</Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-600">Instant delivery</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="text-gray-600">Trusted by 1,000+ Indian creators</span>
            </div>
          </div>
        </div>

        {/* Right Content - Product Image */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="relative">
              {/* Mock Browser Window */}
              <div className="bg-gray-700 rounded-t-lg p-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Colorful Card */}
              <div className="bg-gradient-to-br from-red-500 via-pink-500 to-orange-400 rounded-b-lg p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-white font-bold text-xl">
                      A toolset for the creative
                    </h3>
                  </div>

                  {/* App Icons Grid */}
                  <div className="grid grid-cols-5 gap-3 mb-6">
                    {['Ps', 'Ai', 'Id', 'Pr', 'Ae', 'Xd', 'Dn', 'An', 'Br', 'Lr'].map(
                      (app, i) => (
                        <div
                          key={i}
                          className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                        >
                          {app}
                        </div>
                      )
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Learn
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Try
                    </button>
                  </div>
                </div>

                {/* Adobe CC Logo */}
                <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};