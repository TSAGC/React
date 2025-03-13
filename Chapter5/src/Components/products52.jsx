import React from 'react';

function Products() {
    // const listProducts = [];


    const listProducts = [
        { name: "Product 1", description: "This is a sample description for Product 1." },
        { name: "Product 2", description: "This is a sample description for Product 2." },
        { name: "Product 3", description: "This is a sample description for Product 3." }
    ];

    return (
        <div>
            {listProducts.length > 0 ? (
                <ul>
                    {listProducts.map((product, index) => (
                        <li key={index}>{product.name}</li>
                    ))}
                </ul>
            ) : (
                <ul>
                    <li>No Products to display</li>
                </ul>
            )}
        </div>
    );
}

export default Products;
