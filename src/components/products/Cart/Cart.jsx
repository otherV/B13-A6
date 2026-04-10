import React from 'react';

const Cart = ({ cartArray, setCartArray, totalBill, setTotalBill }) => {
    console.log(cartArray);
    return (
        <div className="bg-base-100 border-base-300 p-6">
            <h1 className="text-2xl">Your Cart</h1>
            <div className="grid grid-cols-1 gap-3">
                {cartArray.map((item, index) => {
                    return (
                        <div key={index} className="flex justify-between items-center bg-[#F9FAFC] rounded-lg p-3">
                            <div className="flex">
                                <div className="p-3 rounded-full">{item.icon}</div>
                                <div className="text-start">
                                    <div>{item.name}</div>
                                    <div className="text-xs uppercase font-semibold opacity-60">${item.price}</div>
                                </div>
                            </div>
                            <button onClick={() => {setCartArray(cartArray.filter(a => a.id !== item.id)); setTotalBill(totalBill-parseInt(item.price));}} className="btn btn-ghost text-[red]">
                                remove
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-between">
                <span className="text-base text-grey">Total:</span>
                <span className="text-2xl text-dark">${totalBill}</span>
            </div>
        </div>
    );
};

export default Cart;