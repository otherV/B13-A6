import React from 'react';

const Plans = () => {
  return (
    <div className="w-full bg-base-100 py-30">
      <div className="mx-auto max-w-3/4">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-dark mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-base text-grey mb-10">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="w-full grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-7">

          <div className="card bg-[#F9FAFC] p-2 rounded-3xl text-grey border-2 border-[#f2f2f2]">
            <div className="card-body flex flex-col justify-between">

              <div className="">
                <div className="mb-6">
                  <h1 className="text-dark text-2xl font-bold mb-2">Starter</h1>
                  <p className="text-base">Perfect for getting started</p>
                </div>

                <p className="mb-6">
                  <span className="text-dark text-4xl font-bold">$0</span>
                  <span className="text-dark text-xl ml-2">/Month</span>
                </p>

                <ul className="flex flex-col justify-start gap-2 text-base">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium">Access to 10 free tools</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium">Basic templates</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium">Community support</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium">1 project per month</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <button className="btn btn-block h-16 rounded-full bg-grad text-[white] text-base">Get Started Free</button>
              </div>
            </div>
          </div>

          <div className="relative card bg-grad p-2 rounded-3xl text-white">
            <div className="card-body flex flex-col justify-between">

              <div className="">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-sm bg-[#FEF3C7] text-[#92400E] px-6 py-2 rounded-full">
                  Most Popular
                </span>

                <div className="mb-6">
                  <h1 className="text-white text-2xl font-bold mb-2">Pro</h1>
                  <p className="text-white text-base">Best for professionals</p>
                </div>

                <p className="mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-xl ml-2">/Month</span>
                </p>

                <ul className="flex flex-col gap-2 text-base">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium">Access to all premium tools</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium">Unlimited templates</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium">Priority support</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium">Unlimited projects</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium">Cloud sync</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium">Advanced analytics</span>
                  </li>

                </ul>
              </div>

              <div className="mt-6">
                <button className="btn btn-block h-16 rounded-full bg-base-100 text-[#4F39F6] text-base">
                  Start Pro Trial
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex justify-center items-center">

            <div className="w-full md:w-1/2 lg:w-full h-full card bg-[#F9FAFC] p-2 rounded-3xl text-grey border-2 border-[#f2f2f2]">
              <div className="card-body flex flex-col justify-between">

                <div className="">
                  <div className="mb-6">
                    <h1 className="text-dark text-2xl font-bold mb-2">Enterprise</h1>
                    <p className="text-base">For teams and businesses</p>
                  </div>

                  <p className="mb-6">
                    <span className="text-dark text-4xl font-bold">$99</span>
                    <span className="text-dark text-xl ml-2">/Month</span>
                  </p>

                  <ul className="flex flex-col justify-start gap-2 text-base">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span className="font-medium">Everything in Pro</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span className="font-medium">Team collaboration</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span className="font-medium">Custom integrations</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span className="font-medium">Dedicated support</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span className="font-medium">SLA guarantee</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span className="font-medium">Custom branding</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <button className="btn btn-block h-16 rounded-full bg-grad text-[white] text-base">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Plans;