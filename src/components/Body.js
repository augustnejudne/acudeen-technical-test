import React from 'react';
import StarRating from './StarRating';
import infoQuestion from '../assets/info_question.svg';

const Body = ({amount, companyLogo, companyName, stars}) => {
  return (
    <div className="acudeen-card__body">
      <div className="acudeen-card__body__amount">PHP {amount}</div>
      <div className="acudeen-card__body__company">
        <div className="acudeen-card__body__company__logo">
          <img src={companyLogo} alt="company logo" />
        </div>
        <div className="acudeen-card__body__company__name">
          {companyName}
        </div>
      </div>
      <h4 className="text-center pt-5">Rating:</h4>
      <div className="acudeen-card__body__rating">
        <div className="acudeen-card__body__rating__rater">
          <div>
            Payor <img src={infoQuestion} alt="info question" />
          </div>
          <div>
            Seller <img src={infoQuestion} alt="info question" />
          </div>
          <div>
            Overall <img src={infoQuestion} alt="info question" />
          </div>
        </div>
        <div className="acudeen-card__body__rating__stars">
          {stars.map((s, i) => (
            <StarRating key={i} initStars={s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
