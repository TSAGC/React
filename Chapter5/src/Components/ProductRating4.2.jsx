import React from 'react';
import Product from './products42';


const getProducts = () => {
    return [
        {
            imageUrl: "http://loremflickr.com/150/150?random=1",
            productName: "Product 1",
            releasedDate: "May 31, 2016",
            description: "This is a sample description for Product 1.",
            rating: 4,
            numOfReviews: 2
        },
        {
            imageUrl: "http://loremflickr.com/150/150?random=2",
            productName: "Product 2",
            releasedDate: "October 31, 2016",
            description: "This is a sample description for Product 2.",
            rating: 2,
            numOfReviews: 12
        },
        {
            imageUrl: "http://loremflickr.com/150/150?random=3",
            productName: "Product 3",
            releasedDate: "July 30, 2016",
            description: "This is a sample description for Product 3.",
            rating: 5,
            numOfReviews: 2
        }
    ];
};

function Products() {
    const products = getProducts();
    return (
        <div>
            {products.map((product, index) => (
                <Product key={index} data={product} />
            ))}
        </div>
    );
}

export default Products;
