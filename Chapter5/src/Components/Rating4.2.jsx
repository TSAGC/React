import React, { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

function Rating({ rating, numOfReviews }) {
    const [currentRating, setRating] = useState(rating);

    const styles = {
        starStyle: {
            color: 'orange',
            fontSize: '24px',
            cursor: 'pointer',
        }
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => setRating(star)}>
                    {currentRating >= star ? <IoIosStar style={styles.starStyle} /> : <IoIosStarOutline style={styles.starStyle} />}
                </span>
            ))}
            <span> ({numOfReviews} reviews)</span>
        </div>
    );
}

export default Rating;
