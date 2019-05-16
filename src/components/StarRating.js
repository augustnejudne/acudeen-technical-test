import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import emptyStar from '../assets/star_rating_empty.svg';
import filledStar from '../assets/star_rating_fill.svg';

const StarRating = props => {
  const [stars, setStars] = useState(props.initStars);
  const [rating, setRating] = useState('');

  useEffect(() => {
    switch(stars) {
      case 5:
        setRating('AA');
        break;
      case 4:
        setRating('A');
        break;
      case 3:
        setRating('BB');
        break;
      case 2:
        setRating('B');
        break;
      case 1:
        setRating('C');
        break;
      default:
        return;
    }
  }, [stars])

  return (
    <div className="acudeen-card__body__rating__stars--container">
      <span className="rating-letters">{rating}</span>
      <span className="stars">
        <Rating
          initialRating={stars}
          emptySymbol={
            <img src={emptyStar} alt="empty star" className="icon" />
          }
          fullSymbol={
            <img src={filledStar} alt="filled star" className="icon" />
          }
          onChange={setStars}
        />
      </span>
    </div>
  );
};

export default StarRating;
