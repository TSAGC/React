import React from 'react';
import { Card  } from 'react-bootstrap';
import Rating from './Rating4.2';


const Product = (props) => {
    return (
        <Card className="mb-3">
            <img
                width={150}
                height={150}
                className="mr-3"
                src={props.data.imageUrl}
                alt={props.data.productName}
            />
            <Card.Body>
                <h5>{props.data.productName}</h5>
                <p>Released: {props.data.releasedDate}</p>
                <Rating rating={props.data.rating} numOfReviews={props.data.numOfReviews} />
                <p>{props.data.description}</p>
            </Card.Body>
        </Card>
    );
};

export default Product;
