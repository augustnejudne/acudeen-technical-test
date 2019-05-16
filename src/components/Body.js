import React from 'react';
import companyLogo from '../assets/no_payor_logo.svg';
import infoQuestion from '../assets/info_question.svg';
import emptyStar from '../assets/star_rating_empty.svg';
import filledStar from '../assets/star_rating_fill.svg';

const Body = props => {
  return (
    <div className="acudeen-card__body">
      <div className="acudeen-card__body__amount">PHP {props.amount}</div>
      <div className="acudeen-card__body__company">
        <div className="acudeen-card__body__company__logo">
          <img src={companyLogo} alt="company logo" />
        </div>
        <div className="acudeen-card__body__company__name">{props.companyName}</div>
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
          <div className="acudeen-card__body__rating__stars--container">
            <span className="rating-letters">
              A
            </span>
            <span className="stars">
              <img src={filledStar} alt="empty star" />
              <img src={filledStar} alt="empty star" />
              <img src={filledStar} alt="empty star" />
              <img src={filledStar} alt="empty star" />
              <img src={emptyStar} alt="empty star" />
            </span>
          </div>
          <div className="acudeen-card__body__rating__stars--container">
            <span className="rating-letters">
              BB
            </span>
            <span className="stars">
              <img src={filledStar} alt="empty star" />
              <img src={filledStar} alt="empty star" />
              <img src={filledStar} alt="empty star" />
              <img src={emptyStar} alt="empty star" />
              <img src={emptyStar} alt="empty star" />
            </span>
          </div>
          <div className="acudeen-card__body__rating__stars--container">
            <span className="rating-letters">
              BB
            </span>
            <span className="stars">
              <img src={filledStar} alt="empty star" />
              <img src={filledStar} alt="empty star" />
              <img src={filledStar} alt="empty star" />
              <img src={emptyStar} alt="empty star" />
              <img src={emptyStar} alt="empty star" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
