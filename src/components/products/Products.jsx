import React, { use, useState } from 'react';
import ProductsList from './ProductsList/ProductsList';
import Cart from './Cart/Cart';

const Products = ({ productsPromise, cartArray, setCartArray, cartCount, setCartCount }) => {
    const productsArray = use(productsPromise);
    const [toggleValue, setToggleValue] = useState("products");
    const [totalBill, setTotalBill] = useState(0);

    return (
        <div className="w-full bg-base-100 text-center py-30">
            <h1 className="text-5xl font-extrabold text-dark">Premium Digital Tools</h1>
            <p className="text-base text-grey my-4">Choose from our curated collection of premium digital products designed<br /> to boost your productivity and creativity.</p>
            <div className="mx-auto max-w-3/4 bg-[white]">
                <div className="flex justify-center items-center">
                    <div className="w-fit border-2 border-[#f6f6f6] bg-[white] rounded-full">
                        <button onClick={() => setToggleValue("products")} className={`btn btn-xl rounded-full ${toggleValue === "products" ? `bg-grad text-[white]` : `bg-[white] hover:bg-[grey] border-none shadow-none`} text-base`}>
                            Products
                        </button>
                        <button onClick={() => setToggleValue("cart")} className={`btn btn-xl rounded-full ${toggleValue === "cart" ? `bg-grad text-[white]` : `bg-[white] hover:bg-[grey] border-none shadow-none`} text-base`}>
                            Cart({cartCount})
                        </button>
                    </div>
                </div>
                {toggleValue === "products" ?
                    <ProductsList productsArray={productsArray} setCartArray={setCartArray} setTotalBill={setTotalBill} setCartCount={setCartCount} /> :
                    (cartCount === 0) ? <h1 className="text-3xl text-center text-grey pt-6">No Item in Cart</h1> : <Cart cartArray={cartArray} setCartArray={setCartArray} totalBill={totalBill} setTotalBill={setTotalBill} setCartCount={setCartCount} />}
            </div>
        </div>
    );
};

export default Products;