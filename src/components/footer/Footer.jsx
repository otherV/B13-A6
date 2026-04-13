import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";

const Footer = () => {
    return (
        <div className="text-[white] bg-[#101727] w-full pt-30">
            <div className="mx-auto max-w-3/4">
                <div className="w-full grid grid-cols-3 lg:grid-cols-6 justify-between mb-20">
                    

                    <div className="col-span-2 text-start">
                        <h1 className="text-[white] text-3xl font-extrabold mb-4">DigiTools</h1>
                        <p>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter<br /> with our suite of powerful tools.</p>
                    </div>
                    <div className="col-span-1">
                        <h5 className="text-lg font-bold mb-4">Product</h5>
                        <ul className="flex flex-col gap-4">
                            <li><a className="">Features</a></li>
                            <li><a className="">Pricing</a></li>
                            <li><a className="">Templates</a></li>
                            <li><a className="">Integrations</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h5 className="text-lg font-bold mb-4">Company</h5>
                        <ul className="flex flex-col gap-4">
                            <li><a className="">About</a></li>
                            <li><a className="">Blog</a></li>
                            <li><a className="">Careers</a></li>
                            <li><a className="">Press</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h5 className="text-lg font-bold mb-4">Resources</h5>
                        <ul className="flex flex-col gap-4">
                            <li><a className="">Documentation</a></li>
                            <li><a className="">Help Center</a></li>
                            <li><a className="">Community</a></li>
                            <li><a className="">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 flex flex-col items-start justify-center lg:justify-start">
                        <h5 className="text-lg font-bold mb-4">Social Links</h5>
                        <div className="flex justify-center lg:justify-start gap-3">
                            <a className="p-2 rounded-full bg-[white] text-dark text-lg"><TbBrandInstagramFilled /></a>
                            <a className="p-2 rounded-full bg-[white] text-dark text-lg"><FaSquareFacebook /></a>
                            <a className="p-2 rounded-full bg-[white] text-dark text-lg"><FaXTwitter /></a>
                        </div>
                    </div>

                </div>
                <hr className="border-2 opacity-6"></hr>
                <div className="flex justify-between text-grey py-7">
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