import React from 'react';

const Banner = () => {
    return (
        <div className="w-full bg-base-100 pt-15">
            <div className="mx-auto max-w-3/4 flex">
                <div className="w-6/10 flex-col py-15 pr-15">
                    <span className="py-1 px-4 bg-[#E1E7FF] rounded-full">
                        <div className="status status-primary mr-2 -mt-1 animate-ping"></div>
                        <span className="bg-linear-to-r from-[#4F39F6] to-[#9200F6] bg-clip-text text-transparent">
                            New: AI-Powered Tools Available
                        </span>
                    </span>

                    <h1 className="text-6xl font-extrabold my-4">Supercharge Your Digital Workflow</h1>
                    <p className="text-lg text-grey">Access premium AI tools, design assets, templates, and productivity<br/>
                        software—all in one place. Start creating faster today.<br/>
                        Explore Products
                    </p>
                    <div className="flex mt-8">
                        <a className="btn">Explore Products</a>
                        <a className="btn">Watch Demo</a>
                    </div>
                </div>
                <div className="w-4/10">
                    <img className="w-full h-auto block rounded-md" src="../src/assets/banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;