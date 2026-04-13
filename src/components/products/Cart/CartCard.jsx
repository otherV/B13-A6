import React from 'react';

const CartCard = ({ item, handleRemove }) => {
    return (
        <div key={item.product.id} className="flex justify-between items-center bg-[#F9FAFC] rounded-lg p-3">
            <div className="flex">
                <div className="p-3 rounded-full bg-[white] border border-[#F2F2F2] mr-4">{item.product.icon}</div>
                <div className="text-start">
                    <div className="text-lg font-medium text-dark">{item.product.name}</div>
                    <div className="text-xs uppercase font-semibold text-grey mt-2">${item.product.price}</div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-xl">X {item.count}</span>
                <button onClick={
                    () => {
                        handleRemove(parseInt(item.product.price), item.product.id);
                    }
                } className="btn btn-ghost text-[red]">
                    remove
                </button>
            </div>
        </div >
    );
};

export default CartCard;