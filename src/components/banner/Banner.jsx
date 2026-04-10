import React from 'react';

const Banner = () => {
    return (
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
    );
};

export default Banner;