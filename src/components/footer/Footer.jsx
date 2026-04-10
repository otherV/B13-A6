import React from 'react';

const Footer = () => {
    return (
        <div className="text-[white] bg-[#101727] w-full">
            <div className="mx-auto max-w-3/4">
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
    );
};

export default Footer;