import React from 'react';

const Trial = () => {
    return (
        <div className="bg-grad text-[white] w-full flex justify-center py-30">
            <div className="mx-auto max-w-3/4 flex flex-col items-center text-center">
                <h1 className="text-4xl font-extrabold">Ready to Transform Your Workflow?</h1>
                <p className="mt-2 mb-10">Join thousands of professionals who are already using Digitools to work smarter.<br/>Start your free trial today.</p>
                <div className="flex">
                    <a className="btn">Explore Products</a>
                    <a className="btn">View Pricing</a>
                </div>
                <p className="mt-2">14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Trial;