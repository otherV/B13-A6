import React from 'react';
import playLogo from "../../assets/Play.png"
import bannerImg from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className="w-full bg-base-100 pt-15">
            <div className="mx-auto max-w-3/4 flex flex-col md:flex md:flex-row">
                <div className="block lg:w-6/10 flex-col py-15 lg:pr-15 text-center lg:text-start">
                    <span className="py-1 px-4 bg-[#E1E7FF] rounded-full block lg:inline">
                        <div className="status status-primary mr-2 -mt-1 animate-ping"></div>
                        <span className="bg-linear-to-r from-[#4F39F6] to-[#9200F6] bg-clip-text text-transparent">
                            New: AI-Powered Tools Available
                        </span>
                    </span>

                    <h1 className="text-4xl sm:text-6xl font-extrabold my-4">Supercharge Your Digital Workflow</h1>
                    <p className="text-lg text-grey">Access premium AI tools, design assets, templates, and productivity<br />
                        software—all in one place. Start creating faster today.<br />
                        Explore Products
                    </p>
                    <div className="flex gap-4 mt-8 lg:justify-start justify-center">
                        <a className="btn btn-xl rounded-full bg-grad text-[white] font-bold text-base">
                            Explore Products
                        </a>
                        <a className="btn btn-xl rounded-full bg-[white] text-[#4F39F6] border border-[#4F39F6] font-bold text-base">
                            <div>
                                <img className="w-full h-auto block rounded-md" src={playLogo} alt="" />
                            </div>
                            Watch Demo
                        </a>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-4/10">
                    <img className="w-full h-auto block rounded-md" src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;