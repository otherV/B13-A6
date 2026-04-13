import React from 'react';
import ProductCard from './ProductCard';
import { toast } from 'react-toastify';

const ProductsList = ({ productsArray, setCartArray, setTotalBill, setCartCount }) => {

    const handleCartBill = (item) => {
        setCartArray(currentCart => {
            const existingItem = currentCart[item.id];

            if (existingItem) {
                return {
                    ...currentCart,
                    [item.id]: {
                        ...existingItem,
                        count: existingItem.count + 1
                    }
                };
            } else {
                return {
                    ...currentCart,
                    [item.id]: {
                        product: item,
                        count: 1
                    }
                };
            }
        });

        setCartCount(a => a + 1);

        setTotalBill(b => b + parseInt(item.price));

        toast.success("Item Added to Cart!");
    };

    return (
        <div className="bg-base-100 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

            {productsArray.map((product) => {
                return (

                    <ProductCard key={product.id} product={product} handleCartBill={handleCartBill} />

                );
            })}
        </div>
    );
};

export default ProductsList;