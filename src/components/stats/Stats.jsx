import React from 'react';

const Stats = () => {
    return (
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
    );
};

export default Stats;