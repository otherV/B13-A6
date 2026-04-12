import React from 'react';

const Steps = () => {
    return (
        <div className="w-full bg-[#F9FAFC]">
        <div className="mx-auto max-w-3/4">
          <div className="text-center">
            <h1>Get Started in 3 Steps</h1>
            <p>Start using premium digital tools in minutes, not hours.</p>
          </div>
          <div className="flex justify-center">
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                <div className="card-actions justify-end">
                  <div className="badge badge-primary badge-xs">
                    01
                  </div>
                </div>
                <p>Step 1</p>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                <div className="card-actions justify-end">
                  <div className="badge badge-primary badge-xs">
                    02
                  </div>
                </div>
                <p>Step 2</p>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="card-body">
                <div className="card-actions justify-end">
                  <div className="badge badge-primary badge-xs">
                    03
                  </div>
                </div>
                <p>Step 3</p>
              </div>
            </div></div>
        </div>
      </div>
    );
};

export default Steps;