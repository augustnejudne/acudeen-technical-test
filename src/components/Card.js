import React from 'react';
import Header from './Header';
import Body from './Body';
import BidAmountDetails from './BidAmountDetails';
import OtherDetails from './OtherDetails';

const Card = props => {
  return (
    <div className="acudeen-card">
      <Header bidStatus={props.bidStatus} />
      <Body />
      <BidAmountDetails />
      <OtherDetails />
    </div>
  );
};

export default Card;
