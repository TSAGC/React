import React, { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

function Rating(props) {
    const [rating, setRating] = useState(props.rating);

    const styles = {
        starStyle: {
            color: 'orange',
            fontSize: '24px',
            cursor: 'pointer', // Allows clicking to change rating
        }
    };

    return (
        <div>
            <p>Rating: {rating}</p>

            <span onClick={() => setRating(1)}>
                {rating >= 1 ? <IoIosStar style={styles.starStyle} /> : <IoIosStarOutline style={styles.starStyle} />}
            </span>

            <span onClick={() => setRating(2)}>
                {rating >= 2 ? <IoIosStar style={styles.starStyle} /> : <IoIosStarOutline style={styles.starStyle} />}
            </span>

            <span onClick={() => setRating(3)}>
                {rating >= 3 ? <IoIosStar style={styles.starStyle} /> : <IoIosStarOutline style={styles.starStyle} />}
            </span>

            <span onClick={() => setRating(4)}>
                {rating >= 4 ? <IoIosStar style={styles.starStyle} /> : <IoIosStarOutline style={styles.starStyle} />}
            </span>

            <span onClick={() => setRating(5)}>
                {rating >= 5 ? <IoIosStar style={styles.starStyle} /> : <IoIosStarOutline style={styles.starStyle} />}
            </span>

        </div>
    );
}

export default Rating;
