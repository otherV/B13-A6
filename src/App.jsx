import './App.css'
function App() {

  return (
    <>
      <div className="w-full bg-base-100 shadow-sm">
        <div className="mx-auto max-w-9/10 navbar bg-base-100 shadow-y-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Products</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Testimonials</a></li>
                <li><a>FAQ</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">DigiTools</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              < div className="indicator" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                <span className="badge badge-sm badge-error rounded-[50%] indicator-item">8</span>
              </div >
            </button>
            <button className="btn btn-ghost hover:z-50">
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-base-100">
        <div className="mx-auto max-w-9/10 flex">
          <div className="w-3/5 flex-col">
            <div role="alert" className="alert alert-info">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>New: AI-Powered Tools Available</span>
            </div>
            <h1>Supercharge Your Digital Workflow</h1>
            <p>Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today.
              Explore Products
            </p>
            <div className="flex">
              <a className="btn">Explore Products</a>
              <a className="btn">Watch Demo</a>
            </div>
          </div>
          <div className="w-2/5">
            <img className="w-full h-auto block rounded-md" src="../src/assets/banner.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-grad text-[white] w-full bg-base-100 flex justify-center">
        <div className="w-7/10 stats">
          <div className="stat place-items-center">
            <div className="stat-value">50K+</div>
            <div className="text-[white] stat-desc">Active Users</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-value">200+</div>
            <div className="text-[white] stat-desc">Premium Tools</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-value">4.9</div>
            <div className="text-[white] stat-desc">Rating</div>
          </div>
        </div>
      </div>

      <div className="w-full bg-base-100 text-center">
        <h1>Premium Digital Tools</h1>
        <p>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
        <div className="mx-auto max-w-9/10 tabs tabs-box flex justify-center bg-[white]">
          <input type="radio" name="products_tabs" className="tab" aria-label="Products" />
          <div className="tab-content bg-base-100 p-6 grid grid-cols-3 gap-3">
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Premium</h2>
                  <span className="text-xl">$29/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Seamless cloud integration</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Real-time collaboration tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
              </div>
            </div>


            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Premium</h2>
                  <span className="text-xl">$29/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Seamless cloud integration</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Real-time collaboration tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Premium</h2>
                  <span className="text-xl">$29/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Seamless cloud integration</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Real-time collaboration tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Premium</h2>
                  <span className="text-xl">$29/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Seamless cloud integration</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Real-time collaboration tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Premium</h2>
                  <span className="text-xl">$29/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Seamless cloud integration</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Real-time collaboration tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Premium</h2>
                  <span className="text-xl">$29/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Seamless cloud integration</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Real-time collaboration tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
              </div>
            </div>
          </div>

          <input type="radio" name="products_tabs" className="tab" aria-label="Cart (0)" defaultChecked />
          <div className="tab-content bg-base-100 border-base-300 p-6">Cart</div>
        </div>
      </div>

      <div className="w-full bg-base-100">
        <div className="mx-auto max-w-9/10">
          <div className="text-center">
            <h1>Get Started in 3 Steps</h1>
            <p>Start using premium digital tools in minutes, not hours.</p>
          </div>
          <div className="flex">
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                <div className="card-actions justify-end">
                  <div class="badge badge-primary badge-xs">
                    01
                  </div>
                </div>
                <p>Step 1</p>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                <div className="card-actions justify-end">
                  <div class="badge badge-primary badge-xs">
                    02
                  </div>
                </div>
                <p>Step 2</p>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                <div className="card-actions justify-end">
                  <div class="badge badge-primary badge-xs">
                    03
                  </div>
                </div>
                <p>Step 3</p>
              </div>
            </div></div>
        </div>
      </div>

      <div className="w-full bg-base-100">
        <div className="mx-auto max-w-9/10">
          <div className="text-center">
            <h1>Simple, Transparent Pricing</h1>
            <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-sm">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Premium</h2>
                  <span className="text-xl">$29/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Seamless cloud integration</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Real-time collaboration tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-sm">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Premium</h2>
                  <span className="text-xl">$29/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Seamless cloud integration</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Real-time collaboration tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-sm">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Premium</h2>
                  <span className="text-xl">$29/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Seamless cloud integration</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Real-time collaboration tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-base-100">
        <div className="mx-auto max-w-9/10 flex flex-col items-center">
          <h1>Ready to Transform Your Workflow?</h1>
          <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
          <div className="flex">
            <a className="btn">Explore Products</a>
            <a className="btn">View Pricing</a>
          </div>
          <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>

      <div className="text-[white] bg-[#101727] w-full">
        <div className="mx-auto max-w-9/10">
          <div className="flex">
            <div>
              <h1>DigiTools</h1>
              <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>
            <div>
              <h5>Product</h5>
              <ul className="menu px-1">
                <li><a className="">Features</a></li>
                <li><a className="">Pricing</a></li>
                <li><a className="">Templates</a></li>
                <li><a className="">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h5>Company</h5>
              <ul className="menu px-1">
                <li><a className="">About</a></li>
                <li><a className="">Blog</a></li>
                <li><a className="">Careers</a></li>
                <li><a className="">Press</a></li>
              </ul>
            </div>
            <div>
              <h5>Resources</h5>
              <ul className="menu px-1">
                <li><a className="">Documentation</a></li>
                <li><a className="">Help Center</a></li>
                <li><a className="">Community</a></li>
                <li><a className="">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5>Social Links</h5>
              <div className="flex">
              <a className="btn">insta</a>
              <a className="btn">fB</a>
              <a className="btn">X</a>
              </div>
            </div>
          </div>
          <hr class="border-[1px] opacity-6"></hr>
          <div className="flex justify-between">
            <div>
              <p>© 2026 Digitools. All rights reserved.</p>
            </div>
            <div className="flex gap-2">
              <a href="#" className="">Privacy Policy</a>
              <a href="#" className="">Terms of Service</a>
              <a href="#" className="">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App



