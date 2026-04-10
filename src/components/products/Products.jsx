import React, { use, useState } from 'react';
import ProductsList from './ProductsList/ProductsList';
import Cart from './Cart/Cart';

const Products = ({ productsPromise, cartArray, setCartArray }) => {
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
                        <button onClick={() => setToggleValue("products")} className={`btn btn-xl rounded-full hover:bg-[grey] ${toggleValue === "products" ? `bg-grad text-[white]` : `bg-[white] border-none shadow-none`}`}>Products</button>
                        <button onClick={() => setToggleValue("cart")} className={`btn btn-xl rounded-full hover:bg-[grey] ${toggleValue === "cart" ? `bg-grad text-[white]` : `bg-[white] border-none shadow-none`}`}>Cart({cartArray.length})</button>
                    </div>
                </div>
                {toggleValue === "products" ? 
                <ProductsList productsArray={productsArray} cartArray={cartArray} setCartArray={setCartArray} totalBill={totalBill} setTotalBill={setTotalBill} /> : 
                <Cart cartArray={cartArray} setCartArray={setCartArray} totalBill={totalBill} setTotalBill={setTotalBill} />}
            </div>
        </div>
    );
};

export default Products;