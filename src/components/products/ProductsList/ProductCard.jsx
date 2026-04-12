import React, { useState } from 'react';

const ProductCard = ({ product, handleCartBill }) => {
    const [counter, setCounter] = useState(0);

    const handleBtnState = () => {
        setCounter(a => a + 1);
        setTimeout(() => {
            setCounter(b => b - 1);
        }, 2000);
    };

    return (

        <div key={product.id} className="card bg-base-100 shadow-sm">
            <div className="card-body flex flex-col items-start text-start">
                <div className="absolute top-4 right-4 bg-[#fef3c7] text-[#92400e] text-sm font-medium px-4 py-1 rounded-full">
                    Best Seller
                </div>

                <div className="w-16 h-16 bg-grey border border-slate-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">{product.icon}</span>
                </div>

                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <p className="mb-4">{product.description}</p>
                <p className="mb-4"><span className="text-xl text-dark">${product.price}</span><span className="text-base text-grey">/{product.period}</span></p>
                <ul className="mb-4 flex flex-col items-start gap-2 text-xs">
                    {product.features.map((feature, index) => {
                        return (
                            <li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>
                        );
                    })}
                </ul>
                <div className="w-full">
                    <button onClick={
                        () => {
                            handleCartBill(product);
                            handleBtnState();
                        }
                    } className={`w-full text-base btn btn-xl rounded-full ${counter === 0 ? `bg-grad` : `bg-[green]`} text-[white]`}>
                        {counter === 0 ? `Buy Now` : `Added To Cart`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;