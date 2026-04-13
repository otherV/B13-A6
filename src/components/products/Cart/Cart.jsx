import React from 'react';
import CartCard from './CartCard';
import { toast } from 'react-toastify';

const Cart = ({ cartArray, setCartArray, totalBill, setTotalBill, setCartCount }) => {

    const handleRemove = (price, itemId) => {

        setCartArray(currentCart => {
            const existingItem = currentCart[itemId];

            if (existingItem.count > 1) {
                return {
                    ...currentCart,
                    [itemId]: {
                        ...existingItem,
                        count: existingItem.count - 1
                    }
                };
            } else {
                const newCart = { ...currentCart };
                delete newCart[itemId];
                return newCart;
            }
        });

        setCartCount(b => b - 1);

        setTotalBill(a => a - price);

        toast.error("Item Removed From Cart!");
    };

    const handleCheckOut = () => {
        setCartArray({});
        setCartCount(0);
        setTotalBill(0);
        toast.success("Checkout Successful!");
    }

    return (
        <div className="bg-base-100 border border-[#F2F2F2] rounded-xl p-10 mt-10">
            <h1 className="text-2xl font-bold text-start">Your Cart</h1>
            <div className="grid grid-cols-1 gap-4 my-6">
                {Object.values(cartArray).map((item) => {
                    return (

                        <CartCard key={item.product.id} item={item} handleRemove={handleRemove} />

                    );
                })}
            </div>

            <div className="flex justify-between mb-6">
                <span className="text-base text-grey">Total:</span>
                <span className="text-2xl text-dark font-bold">${totalBill}</span>
            </div>

            <div className="w-full">
                <button onClick={
                    () => {
                        handleCheckOut();
                    }
                } className={`w-full text-base btn btn-xl rounded-full bg-grad text-[white]`}>
                    Proceed To Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;