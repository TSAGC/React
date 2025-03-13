import React, { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

function ReactiveRating({ rating: initialRating }) {
    // Add local state for rating
    const [rating, setRating] = useState(initialRating);

    // Function to handle click event on a star
    const handleStarClick = (newRating) => {
        setRating(newRating); // Update the state with the new rating
    };

    return (
        <div>
            <h1>Rating: {rating}</h1>
            {/* Add onClick to each star */}
            <IoIosStarOutline 
                onClick={() => handleStarClick(1)} 
                style={{ cursor: 'pointer', color: rating >= 1 ? 'gold' : 'gray' }} 
            />
            <IoIosStarOutline 
                onClick={() => handleStarClick(2)} 
                style={{ cursor: 'pointer', color: rating >= 2 ? 'gold' : 'gray' }} 
            />
            <IoIosStarOutline 
                onClick={() => handleStarClick(3)} 
                style={{ cursor: 'pointer', color: rating >= 3 ? 'gold' : 'gray' }} 
            />
            <IoIosStarOutline 
                onClick={() => handleStarClick(4)} 
                style={{ cursor: 'pointer', color: rating >= 4 ? 'gold' : 'gray' }} 
            />
            <IoIosStarOutline 
                onClick={() => handleStarClick(5)} 
                style={{ cursor: 'pointer', color: rating >= 5 ? 'gold' : 'gray' }} 
            />
        </div>
    );
}

export default ReactiveRating;
