import React from 'react';
import usrLogo from "../../assets/user.png"
import pkgLogo from "../../assets/package.png"
import rktLogo from "../../assets/rocket.png"

const Steps = () => {
  return (
    <div className="w-full bg-[#F9FAFC] py-30">
      <div className="mx-auto max-w-3/4">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-dark mb-4">
            Get Started in 3 Steps
          </h1>
          <p className="text-base text-grey mb-10">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="flex justify-center gap-7">

          <div className="card bg-base-100 border border-[#e8eaed] rounded-3xl px-10 py-24 relative text-center">
            <div className="absolute top-6 right-6 w-10 h-10 bg-grad rounded-full flex items-center justify-center text-white font-bold text-sm">
              01
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center">
                <img src={usrLogo} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-dark">Create Account</h3>
              <p className="text-grey text-base">
                Sign up for free in seconds. No credit card required to get started.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 border border-[#e8eaed] rounded-3xl px-10 py-24 relative text-center">
            <div className="absolute top-6 right-6 w-10 h-10 bg-grad rounded-full flex items-center justify-center text-white font-bold text-sm">
              02
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center">
                <img src={pkgLogo} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-dark">Choose Products</h3>
              <p className="text-grey text-base">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 border border-[#e8eaed] rounded-3xl px-10 py-24 relative text-center">
            <div className="absolute top-6 right-6 w-10 h-10 bg-grad rounded-full flex items-center justify-center text-white font-bold text-sm">
              03
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center">
                <img src={rktLogo} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-dark">Start Creating</h3>
              <p className="text-grey text-base">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Steps;