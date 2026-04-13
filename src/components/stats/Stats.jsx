import React from 'react';

const Stats = () => {
    return (
        <div className="bg-grad text-[white] w-full flex justify-center mt-15 py-15">
            <div className="w-9/10 stats flex flex-col sm:flex-row">
                <div className="stat place-items-center gap-5 sm:border-[#f2f2f2] sm:border-r">
                    <div className="stat-value text-5xl">50K+</div>
                    <div className="text-[white] stat-desc text-2xl font-medium">Active Users</div>
                </div>

                <div className="stat place-items-center gap-5 sm:border-[#f2f2f2] sm:border-r">
                    <div className="stat-value text-5xl">200+</div>
                    <div className="text-[white] stat-desc text-2xl font-medium">Premium Tools</div>
                </div>

                <div className="stat place-items-center gap-5">
                    <div className="stat-value text-5xl">4.9</div>
                    <div className="text-[white] stat-desc text-2xl font-medium">Rating</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;