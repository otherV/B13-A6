import React from 'react';
import ProductCard from './ProductCard';

const ProductsList = ({ productsArray, cartArray, setCartArray, totalBill, setTotalBill }) => {

    const handleCartBill = (item) => {
        setCartArray([...cartArray, item]);
        setTotalBill(totalBill + parseInt(item.price));
    };

    return (
        <div className="bg-base-100 p-6 grid grid-cols-3 gap-3">

            {productsArray.map((product, index) => {
                return (

                    <ProductCard key={index} product={product} handleCartBill={handleCartBill} />

                );
            })}
        </div>
    );
};

export default ProductsList;