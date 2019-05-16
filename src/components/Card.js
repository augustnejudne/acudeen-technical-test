import React from 'react';
import Header from './Header';
import Body from './Body';
import BidAmountDetails from './BidAmountDetails';
import OtherDetails from './OtherDetails';

const Card = ({bidStatus, amount, companyLogo, companyName, stars, bidAmount}) => {
  return (
    <div className="acudeen-card">
      <Header bidStatus={bidStatus} />
      <Body amount={amount} companyLogo={companyLogo} companyName={companyName} stars={stars}/>
      <BidAmountDetails bidAmount={bidAmount} />
      <OtherDetails />
    </div>
  );
};

export default Card;
