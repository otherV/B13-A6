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
        <div className="bg-base-100 border-base-300 p-6">
            <h1 className="text-2xl">Your Cart</h1>
            <div className="grid grid-cols-1 gap-3">
                {Object.values(cartArray).map((item) => {
                    return (

                        <CartCard key={item.product.id} item={item} handleRemove={handleRemove} />

                    );
                })}
            </div>

            <div className="flex justify-between">
                <span className="text-base text-grey">Total:</span>
                <span className="text-2xl text-dark">${totalBill}</span>
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