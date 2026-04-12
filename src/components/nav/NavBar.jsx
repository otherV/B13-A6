import React from 'react';

const NavBar = ({ cartCount }) => {
    return (
        <div className="w-full bg-base-100 shadow-sm">
            <div className="mx-auto max-w-3/4 navbar bg-base-100 shadow-y-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a className="text-dark font-semibold">Products</a></li>
                            <li><a className="text-dark font-semibold">Features</a></li>
                            <li><a className="text-dark font-semibold">Pricing</a></li>
                            <li><a className="text-dark font-semibold">Testimonials</a></li>
                            <li><a className="text-dark font-semibold">FAQ</a></li>
                        </ul>
                    </div>
                    <a className="p-1 text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9200F6] bg-clip-text text-transparent">
                        DigiTools
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <li><a className="text-dark font-semibold">Products</a></li>
                        <li><a className="text-dark font-semibold">Features</a></li>
                        <li><a className="text-dark font-semibold">Pricing</a></li>
                        <li><a className="text-dark font-semibold">Testimonials</a></li>
                        <li><a className="text-dark font-semibold">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        < div className="indicator" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-sm badge-error rounded-[50%] indicator-item">{cartCount}</span>
                        </div >
                    </button>
                    <button className="btn btn-ghost hover:z-50 font-normal text-dark">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;