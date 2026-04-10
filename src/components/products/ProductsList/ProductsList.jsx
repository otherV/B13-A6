import React from 'react';

const ProductsList = ({ productsArray, cartArray, setCartArray, totalBill, setTotalBill }) => {
    return (
        <div className="bg-base-100 p-6 grid grid-cols-3 gap-3">

            {productsArray.map((product, index) => {
                return (
                    <div key={product.id} className="card bg-base-100 shadow-sm">
                        <div className="card-body">
                            <span className="badge badge-xs badge-warning">Most Popular</span>
                            <h2 className="text-3xl font-bold">{product.name}</h2>
                            <p>{product.description}</p>
                            <p className="text-xl">${product.price}/{product.period}</p>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                {product.features.map((feature, index) => {
                                    return (
                                        <li key={index}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>{feature}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="mt-6">
                                <button onClick={() => {setCartArray([...cartArray, productsArray[index]]); setTotalBill(totalBill+parseInt(product.price));}} className="btn btn-primary btn-block">Buy Now</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductsList;